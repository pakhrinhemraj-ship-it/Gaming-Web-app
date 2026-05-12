import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSystem() {
  const ref = useRef<THREE.Points>(null!);
  
  // Use useMemo to prevent re-generating points on every render
  const sphere = useMemo(() => {
    const points = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      
      const x = 1.5 * Math.sin(theta) * Math.cos(phi);
      const y = 1.5 * Math.sin(theta) * Math.sin(phi);
      const z = 1.5 * Math.cos(theta);
      
      points[i * 3] = x;
      points[i * 3 + 1] = y;
      points[i * 3 + 2] = z;
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Mouse interaction: slightly tilt based on mouse position
    const { x, y } = state.mouse;
    ref.current.rotation.x += y * 0.005;
    ref.current.rotation.y += x * 0.01;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f2ff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function NeonRing({ color, radius, speed, rotationSpeed }: { color: string, radius: number, speed: number, rotationSpeed: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.y = Math.sin(t) * 0.1;
    ref.current.rotation.z += rotationSpeed;
    ref.current.rotation.x += rotationSpeed * 0.5;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.01, 16, 100]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={10} 
        transparent 
        opacity={0.5}
      />
    </mesh>
  );
}

export default function ThreeCanvas() {
  return (
    <div id="three-canvas-container" className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff00ea" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00f2ff" />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <ParticleSystem />
        </Float>
        
        <NeonRing color="#ff00ea" radius={0.8} speed={0.5} rotationSpeed={0.005} />
        <NeonRing color="#00f2ff" radius={1.2} speed={0.3} rotationSpeed={-0.003} />
        
        {/* Cinematic background glow */}
        <mesh position={[0, 0, -2]}>
          <planeGeometry args={[10, 10]} />
          <meshBasicMaterial color="#000000" transparent opacity={1} />
        </mesh>
      </Canvas>
      <div className="absolute inset-0 bg-radial-[at_center] from-transparent via-black/50 to-black pointer-events-none" />
    </div>
  );
}
