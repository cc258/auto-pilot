import * as THREE from 'three'
import React, { memo, useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import useStore from '../store'
import Ship from './Ship'
import Ship2 from './Ship2'

const Ships = () => {
  const gridInfo = useStore((state) => state.gridInfo)
  const items = gridInfo
    ? gridInfo.range.map((item, index) => {
        return <Ship2 key={item.id} mouseX={item.mouseX} mouseY={item.mouseY} ray={item.ray} box={item.box} hits={item.hits} />
      })
    : []

  return items
}

export default memo(Ships)
