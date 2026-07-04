import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sparkles, Float, Lightformer, Environment } from '@react-three/drei'

export default function Scene() {
  const sphereRef = useRef()
  
  useFrame((state) => {
    // Slowly rotate the liquid metal sphere
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.1
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <group>
      {/* Massive Liquid Metal Sphere representing raw energy/strength */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1} position={[0, 0, -2]}>
        <mesh ref={sphereRef} scale={3.5}>
          <sphereGeometry args={[1, 128, 128]} />
          <MeshDistortMaterial
            color="#050505"
            envMapIntensity={3}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={1}
            roughness={0.1}
            distort={0.4}
            speed={1.5}
          />
        </mesh>
      </Float>

      {/* Elegant floating energy particles matching cult.fit colors */}
      <Sparkles count={300} scale={12} size={2} speed={0.2} color="#FF3278" opacity={0.6} />
      <Sparkles count={200} scale={15} size={1} speed={0.1} color="#FFDB17" opacity={0.3} />

      {/* Custom environment lighting for sleek reflections */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#FF3278" /> {/* Hot Pink */}
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} color="#FFDB17" /> {/* Yellow */}
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[5, 1, -1]} scale={[20, 0.1, 1]} color="#FFDB17" />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 10, 1]} color="#62B1F2" /> {/* Light Blue */}
        </group>
      </Environment>
    </group>
  )
}
