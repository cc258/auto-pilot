import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import myFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import useStore from '../store'

const hotpink = new THREE.Color('hotpink')
const crossMaterial = new THREE.MeshBasicMaterial({ color: hotpink, fog: false })
crossMaterial.color = hotpink

export default function Rocks() {
  const gltf = useLoader(GLTFLoader, '/rock.gltf')
  const font = new THREE.FontLoader().parse(myFont)
  const rocks = useStore((state) => state.rocks)
  return rocks.map((data) => <Rock {...gltf} key={data.guid} data={data} font={font} />)
}

const Rock = React.memo(({ nodes, materials, data, font }) => {
  const ref = useRef()
  const { clock } = useStore((state) => state.mutation)
  useFrame(() => {
    const r = Math.cos((clock.getElapsedTime() / 2) * data.speed) * Math.PI
    ref.current && ref.current.rotation.set(r, r, r)
  })
  return (
    <group ref={ref} position={data.offset} scale={[data.scale, data.scale, data.scale]}>
      <group
        position={[-0.016298329457640648, -0.012838120572268963, 0.24073271453380585]}
        rotation={[3.0093872578726644, 0.27444228385461117, -0.22745113653772078]}
        scale={[20, 20, 20]}>
        <mesh geometry={nodes.node_id4_Material_52_0.geometry} material={materials.Material_52} material-roughness={1} material-metalness={1} />

        {/* <mesh position={[0, 0, 0]}>
          <textGeometry args={[String(data.distance), { font, size: 0.2, height: 0.2 }]} />
          <meshLambertMaterial attach="material" color={'gold'} />
        </mesh> */}
      </group>
    </group>
  )
})
