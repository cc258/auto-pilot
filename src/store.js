import * as THREE from 'three'
import { Curves } from 'three/examples/jsm/curves/CurveExtras'
import { addEffect } from '@react-three/fiber'
import create from 'zustand'
import * as audio from './audio'

let guid = 1

const useStore = create((set, get) => {
  let spline = new Curves.GrannyKnot()
  let track = new THREE.TubeBufferGeometry(spline, 250, 0.2, 10, true)
  let cancelLaserTO = undefined
  let cancelExplosionTO = undefined
  const box = new THREE.Box3()

  return {
    sound: false,
    camera: undefined,
    type: 'free',
    points: 0,
    health: 100,
    lasers: [],
    explosions: [],
    rocks: randomData(100, track, 150, 8, () => 1 + Math.random() * 2.5),
    enemies: randomData(10, track, 20, 15, 1),
    gridInfo: undefined,

    mutation: {
      t: 0,
      position: new THREE.Vector3(),
      startTime: Date.now(),

      track,
      scale: 15,
      fov: 70,
      hits: false,
      rings: randomRings(30, track),
      particles: randomData(150, track, 100, 1, () => 0.5 + Math.random() * 0.8),
      looptime: 40 * 1000,
      binormal: new THREE.Vector3(),
      normal: new THREE.Vector3(),
      clock: new THREE.Clock(false),
      mouse: new THREE.Vector2(-250, 50),

      // Re-usable objects
      dummy: new THREE.Object3D(),
      ray: new THREE.Ray(),
      box: new THREE.Box3()
    },

    actions: {
      init(camera) {
        const { mutation, actions } = get()
        const gridInfo = getGridInfo(camera)
        set({ camera, gridInfo })
        mutation.clock.start()
        actions.toggleSound(get().sound)
        let lock = false

        addEffect(() => {
          const { rocks, enemies, health } = get()

          if (health <= 0) {
            return
          }

          const time = Date.now()
          const t = (mutation.t = ((time - mutation.startTime) % mutation.looptime) / mutation.looptime)
          mutation.position = track.parameters.path.getPointAt(t)
          mutation.position.multiplyScalar(mutation.scale)

          // test for wormhole/warp
          let warping = false
          if (t > 0.3 && t < 0.4) {
            if (!warping) {
              warping = true
              playAudio(audio.warp)
            }
          } else if (t > 0.5) warping = false

          // test for hits
          const r = rocks.filter(actions.test)
          const e = enemies.filter(actions.test)
          const a = r.concat(e)
          const previous = mutation.hits
          mutation.hits = a.length
          if (previous === 0 && mutation.hits) playAudio(audio.click)
          const lasers = get().lasers
          if (mutation.hits && lasers.length && time - lasers[lasers.length - 1] < 100) {
            const updates = a.map((data) => ({ time: Date.now(), ...data }))
            set((state) => ({ explosions: [...state.explosions, ...updates] }))
            clearTimeout(cancelExplosionTO)
            cancelExplosionTO = setTimeout(() => set((state) => ({ explosions: state.explosions.filter(({ time }) => Date.now() - time <= 1000) })), 1000)
            set((state) => ({
              points: state.points + r.length * 100 + e.length * 200,
              rocks: state.rocks.filter((rock) => !r.find((r) => r.guid === rock.guid)),
              enemies: state.enemies.filter((enemy) => !e.find((e) => e.guid === enemy.guid))
            }))
          }
          // TODO
          if (get().type && a.some((data) => data.distance < 30)) {
            const param = { clientX: Math.round(Math.random() * (1400 - 100)) + 100, clientY: Math.round(Math.random() * (500 - 100)) + 100 }

            actions.updateMouse(param)
            clearTimeout(autoReset)
            const autoReset = setTimeout(() => {
              actions.updateMouse({ clientX: window.innerWidth / 2, clientY: window.innerHeight * 0.8 })
            }, 3000)
          }

          if (a.some((data) => data.distance < 15)) {
            // 撞击时播放声音
            playAudio(audio.explosion)
            set((state) => ({ health: state.health - 1 }))
          }
        })
      },
      shoot() {
        set((state) => ({ lasers: [...state.lasers, Date.now()] }))
        clearTimeout(cancelLaserTO)
        cancelLaserTO = setTimeout(() => set((state) => ({ lasers: state.lasers.filter((t) => Date.now() - t <= 1000) })), 1000)
        playAudio(audio.zap, 0.5)
      },
      toggleSound(sound = !get().sound) {
        set({ sound })
        playAudio(audio.engine, 1, true)
        playAudio(audio.engine2, 0.3, true)
        playAudio(audio.bg, 1, true)
      },
      updateMouse({ clientX: x, clientY: y }) {
        console.log('updateMouse: ', x, y)
        get().mutation.mouse.set(x - window.innerWidth / 2, y - window.innerHeight / 2)
      },
      test(data) {
        box.min.copy(data.offset)
        box.max.copy(data.offset)
        box.expandByScalar(data.size * data.scale)
        data.hit.set(10000, 10000, 10000)
        const result = get().mutation.ray.intersectBox(box, data.hit)
        data.distance = get().mutation.ray.origin.distanceTo(data.hit)
        return result
      },
      changeType() {
        set({
          type: get().type ? undefined : 'free'
        })
      },
      restart() {
        set({
          health: 100,
          points: 0,
          lasers: [],
          explosions: [],
          type: 'free',
          rocks: randomData(100, track, 150, 8, () => 1 + Math.random() * 2.5),
          enemies: randomData(10, track, 20, 15, 1)
        })
      }
    }
  }
})

function randomData(count, track, radius, size, scale) {
  return new Array(count).fill().map(() => {
    const t = Math.random()
    const pos = track.parameters.path.getPointAt(t)
    pos.multiplyScalar(15)
    const offset = pos
      .clone()
      .add(new THREE.Vector3(-radius + Math.random() * radius * 2, -radius + Math.random() * radius * 2, -radius + Math.random() * radius * 2))
    const speed = 0.1 + Math.random()
    return { guid: guid++, scale: typeof scale === 'function' ? scale() : scale, size, offset, pos, speed, radius, t, hit: new THREE.Vector3(), distance: 1000 }
  })
}

function randomRings(count, track) {
  let temp = []
  let t = 0.4
  for (let i = 0; i < count; i++) {
    t += 0.003
    const pos = track.parameters.path.getPointAt(t)
    pos.multiplyScalar(15)
    const segments = track.tangents.length
    const pickt = t * segments
    const pick = Math.floor(pickt)
    const lookAt = track.parameters.path.getPointAt((t + 1 / track.parameters.path.getLength()) % 1).multiplyScalar(15)
    const matrix = new THREE.Matrix4().lookAt(pos, lookAt, track.binormals[pick])
    temp.push([pos.toArray(), matrix])
  }
  return temp
}

function playAudio(audio, volume = 1, loop = false) {
  if (useStore.getState().sound) {
    audio.currentTime = 0
    audio.volume = volume
    audio.loop = loop
    audio.play()
  } else audio.pause()
}

function getGridInfo(camera) {
  const grid = []
  const size = 200
  const rowNum = Math.round(window.innerHeight / size)
  const colNum = Math.round(window.innerWidth / size)
  const half = size / 2
  const range = []
  let centerRowIndex = Math.round(rowNum / 2) - 1
  let centerColIndex = Math.round(colNum / 2) - 1
  let id = 1

  if (centerRowIndex < 0) {
    centerRowIndex = 0
  }
  if (centerColIndex < 0) {
    centerColIndex = 0
  }

  for (let i = 0; i < rowNum; i++) {
    grid[i] = []
    for (let j = 0; j < colNum; j++) {
      const point = {
        id: id++,
        x: j * size + half,
        y: i * size + half,
        index: [i, j],
        hits: []
      }
      point.mouseX = point.x - window.innerWidth / 2
      point.mouseY = point.y - window.innerHeight / 2
      const x1 = (point.x / window.innerWidth) * 2 - 1
      const y1 = -(point.y / window.innerHeight) * 2 + 1
      const stdVector = new THREE.Vector3(x1, y1, 0.5)
      const worldVector = stdVector.unproject(camera)

      point.ray = new THREE.Ray()
      point.box = new THREE.Box3()
      // point.ray.origin = worldVector
      // point.direction = worldVector.normalize()
      // point.worldVector = worldVector

      grid[i][j] = point

      // if (j >= centerColIndex - 1 && j <= centerColIndex + 1) {
      //   range.push(point)
      // }
      range.push(point)
    }
  }

  return { grid, center: grid[centerRowIndex][centerColIndex], centerRowIndex, centerColIndex, rowLength: rowNum, colLength: colNum, range }
}

function getAvoidPoint(gridInfo, rocks, lock) {
  // if (lock) {
  //   return
  // }
  // lock = true;
  const test = (point, rock) => {
    point.box.min.copy(rock.offset)
    point.box.max.copy(rock.offset)
    point.box.expandByScalar(rock.size * rock.scale)
    rock.hit.set(10000, 10000, 10000)
    const result = point.ray.intersectBox(point.box, rock.hit)
    return result
  }

  let found
  // let index = Math.floor(Math.random() * gridInfo.range.length)
  // let point = gridInfo.range[index]
  // for (let i = 0; i < gridInfo.range.length; i++) {
  //   let point = gridInfo.range[i]
  //   const newRocks = rocks.filter((rock) => {
  //     return test(point, rock)
  //   })

  //   point.hits = newRocks

  //   if (!newRocks.length) {
  //     found = point
  //     break
  //   }
  // }

  const checkLeft = (rowIndex, mid, min) => {
    let found
    for (let i = mid; i >= min; i--) {
      const point = gridInfo.grid[rowIndex][i]
      const newRocks = rocks.filter((rock) => {
        return test(point, rock)
      })
      point.hits = newRocks
      if (!newRocks.length) {
        found = point
        break
      }
    }
    return found
  }

  const checkRight = (rowIndex, mid, max) => {
    let found
    for (let i = mid; i <= max; i++) {
      const point = gridInfo.grid[rowIndex][i]
      const newRocks = rocks.filter((rock) => {
        return test(point, rock)
      })
      point.hits = newRocks
      if (!newRocks.length) {
        found = point
        break
      }
    }
    return found
  }

  let curRowIndex = gridInfo.centerRowIndex
  while (curRowIndex >= 0 && !found) {
    found = checkLeft(curRowIndex, gridInfo.centerColIndex, 0)
    if (!found) {
      found = checkRight(curRowIndex, gridInfo.centerColIndex + 1, gridInfo.colLength - 1)
    }
    curRowIndex--
  }

  curRowIndex = gridInfo.centerRowIndex + 1
  while (curRowIndex < gridInfo.rowLength && !found) {
    found = checkLeft(curRowIndex, gridInfo.centerColIndex, 0)
    if (!found) {
      found = checkRight(curRowIndex, gridInfo.centerColIndex + 1, gridInfo.colLength - 1)
    }
    curRowIndex++
  }

  return found
}

export default useStore
export { audio, playAudio }
