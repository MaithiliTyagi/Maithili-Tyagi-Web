
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const AvatarModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Simple animation
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      {/* Use a simple geometric shape for the avatar */}
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#ff00ff" 
        emissive="#420042"
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
};

const AI3DAvatar = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="purple" intensity={0.5} />
        <AvatarModel />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default AI3DAvatar;
