/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 monkeys.gltf 
Author: Jorma Rysky (Joona Venäläinen) (https://sketchfab.com/Rysky)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/timeframe-skeleton-orchestra-c223cd775f924a2599d36daad83fe02e
Title: Timeframe Skeleton Orchestra
*/

import { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';


export default function Model(props) {

  const group = useRef()

  useFrame((state, delta)=>{
     group.current.rotation.y +=delta; 
  })
  
  const { nodes, materials, animations } = useGLTF('/monkeys.gltf')
  const { actions } = useAnimations(animations)
  return (
    <group ref={group}  {...props} dispose={null} scale={1.4}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2,0,0]} scale={1.083}>
          <group name="sketchfabtimeframe">
            <group name="Object_2" scale={0}>
              <group name="frame_6">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Luurako} />
                <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.Luurako} />
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Luurako} />
                <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Luurako} />
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Luurako} />
                <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Luurako} />
              </group>
            </group>
            <group name="Object_10" scale={0}>
              <group name="frame_5">
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Luurako} />
                <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.Luurako} />
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Luurako} />
                <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.Luurako} />
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Luurako} />
                <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.Luurako} />
              </group>
            </group>
            <group name="Object_18" scale={0}>
              <group name="frame_4">
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.Luurako} />
                <mesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.Luurako} />
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.Luurako} />
                <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.Luurako} />
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.Luurako} />
                <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.Luurako} />
              </group>
            </group>
            <group name="Object_26" scale={0}>
              <group name="frame_3">
                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.Luurako} />
                <mesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials.Luurako} />
                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.Luurako} />
                <mesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.Luurako} />
                <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.Luurako} />
                <mesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials.Luurako} />
              </group>
            </group>
            <group name="Object_34" scale={0}>
              <group name="frame_2">
                <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.Luurako} />
                <mesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials.Luurako} />
                <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.Luurako} />
                <mesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.Luurako} />
                <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.Luurako} />
                <mesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.Luurako} />
              </group>
            </group>
            <group name="Object_42" scale={0}>
              <group name="frame_1">
                <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.Luurako} />
                <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials.Luurako} />
                <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials.Luurako} />
                <mesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials.Luurako} />
                <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.Luurako} />
                <mesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials.Luurako} />
              </group>
            </group>
            <group name="Object_50">
              <group name="frame_0">
                <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials.Luurako} />
                <mesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials.Luurako} />
                <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.Luurako} />
                <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials.Luurako} />
                <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials.Luurako} />
                <mesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.Luurako} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/monkeys.gltf')
