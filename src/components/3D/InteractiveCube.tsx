import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { RefreshCw, RotateCcw } from 'react-feather';

function Cube(props: { position: [number, number, number]; shouldRotate: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  
  useFrame((state, delta) => {
    if (meshRef.current && props.shouldRotate) { // Only rotate if shouldRotate is true
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });
  
  return (
    <mesh
      position={props.position}
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

export function InteractiveCube() {
  const orbitControlsRef = useRef<any>(null);
  const [shouldRotate, setShouldRotate] = useState(true);

  const handleResetView = () => {
    if (orbitControlsRef.current) {
      orbitControlsRef.current.reset();
    }
  };

  const toggleRotation = () => {
    setShouldRotate(prev => !prev);
  };

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
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
        <Cube position={[0, 0, 0]} shouldRotate={shouldRotate} />
        <OrbitControls 
          ref={orbitControlsRef}
          enableZoom={false}
          autoRotate={shouldRotate} // Sync both rotations
          autoRotateSpeed={1}
        />
      </Canvas>
      
      <div className="absolute bottom-4 left-4 flex gap-2">
        <button
          onClick={toggleRotation}
          className="p-2 bg-white/80 text-gray-800 rounded-md hover:bg-white transition"
          aria-label={shouldRotate ? 'Stop rotation' : 'Start rotation'}
        >
          <RefreshCw className={`w-4 h-4 ${shouldRotate ? 'animate-spin' : ''}`} />
        </button>
        <button
          onClick={handleResetView}
          className="p-2 bg-white/80 text-gray-800 rounded-md hover:bg-white transition"
          aria-label="Reset view"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
