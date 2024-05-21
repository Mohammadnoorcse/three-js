/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/airplane/model.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.PUSHILIN_Plane_Circle000.geometry} material={materials.plane} />
    </group>
  )
}

useGLTF.preload('/model.glb')
