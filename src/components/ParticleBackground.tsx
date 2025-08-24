import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticlesProps {
  count: number;
}

function Particles({ count }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);
  const [sphere] = useMemo(() => [new Float32Array(count * 3)], [count]);

  // Generate random positions for particles
  useMemo(() => {
    for (let i = 0; i < count; i++) {
      const distance = Math.random() * 20 + 5;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      sphere[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
      sphere[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
      sphere[i * 3 + 2] = distance * Math.cos(theta);
    }
  }, [sphere, count]);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x -= delta / 10;
      mesh.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={mesh} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff00ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export const ParticleBackground: React.FC = () => {
  return (
    <div className="particles-bg">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: true }}
      >
        <Particles count={2000} />
      </Canvas>
    </div>
  );
};