
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Component for the cube mesh
function Cube(props: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  
  // Rotate the cube on each frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.5;
  });
  
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color={hovered ? '#06b6d4' : '#0891b2'} 
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}

// Main component with canvas
export function InteractiveCube() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1}
          castShadow 
        />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <Cube position={[0, 0, 0]} />
        <OrbitControls 
          enableZoom={true}
          autoRotate={true}
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}
