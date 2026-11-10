import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef, useState } from 'react';
import { Mesh, TextureLoader } from 'three';
import earthDay from '../../assets/imgs/earth_surface.jpg';
import earthNight from '../../assets/imgs/earth_night.jpg';
import earthClouds from '../../assets/imgs/earth_clouds.jpg';

interface EarthCanvasProps {
  zoom?: number;
}

function EarthSphere({ texture }: { texture: any }) {
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

export default function EarthCanvas({ zoom = 6 }: EarthCanvasProps) {
  const textures = useLoader(TextureLoader, [earthDay, earthNight, earthClouds]);
  const [currentTexture, setCurrentTexture] = useState(textures[0]);

  const handleDay = () => setCurrentTexture(textures[0]); 
  const handleNight = () => setCurrentTexture(textures[1]);   // đổi texture đêm
  const handleClouds = () => setCurrentTexture(textures[2]);  // đổi texture mây

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, zoom], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <EarthSphere texture={currentTexture} />
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.6} />
      </Canvas>

      {/* Nút lục giác đổi texture */}

      <button
        onClick={handleDay}
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          width: 50,
          height: 50,
          clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
          background: '#2dd4bf',
          border: '2px solid #0a1b2a',
          color: '#07131f',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
      <i className="fa-solid fa-sun"></i>
      </button>

      <button
        onClick={handleNight}
        style={{
          position: 'absolute',
          bottom: 10,
          left: 70,
          width: 50,
          height: 50,
          clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
          background: '#2dd4bf',
          border: '2px solid #0a1b2a',
          color: '#07131f',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
      <i className="fa-solid fa-moon"></i>
      </button>

      <button
        onClick={handleClouds}
        style={{
          position: 'absolute',
          bottom: 10,
          left: 130,
          width: 50,
          height: 50,
          clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
          background: '#2dd4bf',
          border: '2px solid #0a1b2a',
          color: '#07131f',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
      <i className="fa-solid fa-cloud"></i>
      </button>
    </div>
  );
}
