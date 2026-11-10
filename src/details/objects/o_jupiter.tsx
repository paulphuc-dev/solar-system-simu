import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef, useState } from 'react';
import { Mesh, TextureLoader } from 'three';
import jupiterTexture from '../../assets/imgs/jupiter_surface.jpg';

interface JupiterCanvasProps {
  zoom?: number;
}

function JupiterSphere({ texture }: { texture: any }) {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    meshRef.current.rotation.y += 0.0015;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.2, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function VenusCanvas({ zoom = 6 }: JupiterCanvasProps) {
  const textures = useLoader(TextureLoader, jupiterTexture);
  const [currentTexture] = useState(textures);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, zoom], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <JupiterSphere texture={currentTexture} />
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
