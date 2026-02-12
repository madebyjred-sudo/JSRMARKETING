import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Environment, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const GlassShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.1;
      meshRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group>
      <Float floatIntensity={2} rotationIntensity={1} speed={1.5}>
        <mesh ref={meshRef} scale={1.8}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshTransmissionMaterial 
            backside={false}
            samples={8}
            resolution={512}
            transmission={0.95}
            roughness={0.1}
            ior={1.2}
            thickness={2.5}
            chromaticAberration={0.06}
            anisotropy={0.1}
            distortion={0.2}
            distortionScale={0.3}
            temporalDistortion={0.1}
            color="#38bdf8"
            background={new THREE.Color('#020617')}
          />
        </mesh>
      </Float>
    </group>
  );
};

const FluidGlass: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full h-full absolute inset-0 -z-10 ${className}`}>
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ alpha: true, antialias: true }} dpr={[1, 1.5]}>
        <color attach="background" args={['#020617']} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#38bdf8" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        
        <GlassShape />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default FluidGlass;