import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Stars from './3d/Stars'
import Planets from './3d/Planets'
import Effects from './3d/Effects'
import Particles from './3d/Particles'
import Enemies from './3d/Enemies'
import Rocks from './3d/Rocks'
import Explosions from './3d/Explosions'
import Rings from './3d/Rings'
import Track from './3d/Track'
import Ship from './3d/Ship'
import Ships from './3d/Ships'
import Rig from './3d/Rig'
import Hud from './Hud'
import useStore from './store'

export default function App() {
  const { fov } = useStore((state) => state.mutation)
  const actions = useStore((state) => state.actions)
  const health = useStore((state) => state.health)
  const type = useStore((state) => state.type)

  return (
    <div onPointerMove={actions.updateMouse} onClick={health ? actions.shoot : undefined}>
      <Canvas
        linear
        mode="concurrent"
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 2000], near: 0.01, far: 10000, fov }}
        onCreated={({ gl, camera }) => {
          actions.init(camera)
          gl.setClearColor(new THREE.Color('#020209'))
        }}>
        <fog attach="fog" args={['#070710', 100, 700]} />
        <ambientLight intensity={0.25} />
        <Stars />
        <Explosions />
        <Track />
        <Particles />
        <Rings />
        <Suspense fallback={null}>
          <Rocks />
          <Planets />
          {/* <Enemies /> */}
          <Rig>
            <Ship />
            {/* <Ships /> */}
          </Rig>
        </Suspense>
        <Effects />
      </Canvas>
      <Hud />
    </div>
  )
}
