import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);

  const particlesCount = 1000;

  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#eab308"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const ParticlesBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticlesBackground;

