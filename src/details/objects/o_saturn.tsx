import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef} from 'react';
import { Mesh, TextureLoader } from 'three';
import saturnTexture from '../../assets/imgs/saturn_surface.jpg';
import saturnRingTexture from '../../assets/imgs/saturn_ring.png';

interface SaturnCanvasProps {
    zoom?: number;
  }
  
  function SaturnSphere({ planetTexture, ringTexture }: { planetTexture: any; ringTexture: any }) {
    const planetRef = useRef<Mesh>(null!);
    const ringRef = useRef<Mesh>(null!);
  
    useFrame(() => {
      planetRef.current.rotation.y += 0.0015;
      ringRef.current.rotation.y += 0.0017;
    });
  
    return (
      <>
        {/* Planet Sphere */}
        <mesh ref={planetRef}>
          <sphereGeometry args={[2.2, 64, 64]} />
          <meshStandardMaterial map={planetTexture} />
        </mesh>
  
        {/* Saturn Ring */}
        <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]}>
          {/* radiusInner: 2.4, radiusOuter: 4 */}
          <ringGeometry args={[2.4, 4, 64]} />
          <meshStandardMaterial
            map={ringTexture}
            side={2} // DoubleSide để cả hai mặt hiển thị
            transparent={true}
          />
        </mesh>
      </>
    );
  }
  
  export default function SaturnCanvas({ zoom = 6 }: SaturnCanvasProps) {
    const planetTexture = useLoader(TextureLoader, saturnTexture);
    const ringTexture = useLoader(TextureLoader, saturnRingTexture);
  
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Canvas camera={{ position: [0, 5, zoom], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          <SaturnSphere planetTexture={planetTexture} ringTexture={ringTexture} />
          <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.6} />
        </Canvas>
      </div>
    );
}
