/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 ufo.gltf 
Author: yanix (https://sketchfab.com/yanix)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ufo-2d55eec1da344c9a9943abafbd07f0f9
Title: Ufo
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {


  const group = useRef();


  useFrame((state, delta)=>{
    group.current.rotation.y +=delta; 
 })


  const { nodes, materials, animations } = useGLTF('/ufo.gltf')
  // eslint-disable-next-line no-unused-vars
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} scale={50}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Cube" position={[0, 0, 0.513]}>
              <mesh name="Cube_0" geometry={nodes.Cube_0.geometry} material={materials['Material-material']} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ufo.gltf')
