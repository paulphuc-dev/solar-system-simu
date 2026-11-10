import { 
  useState, 
  useEffect, 
  useRef,
  lazy,
  Suspense 
} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import SolarSystem from './components/solar_system';
import Sun from './components/solar_system';
const InfoSystemPanel = lazy(() => import('./panels/system_panel'));
const PlanetPanel = lazy(() => import('./panels/planet_panel'));
const DwarfPlanetPanel = lazy(() => import('./panels/dwarf_planet_panel'));
const ExoPlanetPanel = lazy(() => import('./panels/exoplanet_panel'));
const EquipmentsPanel = lazy(() => import('./panels/equipments_panel'));
const Meteor = lazy(() => import('./components/meteor'));
const BlackHole = lazy(() => import('./components/black-hole'));
const BackgroundMusic = lazy(() => import('./sfx/bg_music'));
import './assets/style/btn.css';
import './assets/style/action_btn.css';
import './assets/style/title_bar.css';
import './assets/style/font.css';

export default function App() {
  const [, setIsFullscreen] = useState(false);
  const [showSystemInfo, setShowSystemInfo] = useState(false);
  const [showPlanetInfo, setShowPlanetInfo] = useState(false);
  const [showDwarfPlanetInfo, setShowDwarfPlanetInfo] = useState(false);
  const [showExoPlanetInfo, setShowExoPlanetInfo] = useState(false);
  const [showEquipmentsInfo, setShowEquipmentsInfo] = useState(false);
  const appRef = useRef<HTMLDivElement | null>(null);

  const handleFullscreen = () => {
    if (appRef.current) {
      if (!document.fullscreenElement) {
        appRef.current.requestFullscreen()
          .then(() => setIsFullscreen(true))
          .catch((err) => console.error("Fullscreen error:", err));
      } else {
        document.exitFullscreen()
          .then(() => setIsFullscreen(false))
          .catch((err) => console.error("Exit fullscreen error:", err));
      }
    }
  };  

  // Bắt phím Esc để thoát fullscreen
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div ref={appRef} style={{ width: '100vw', height: '100vh', position: 'relative' }}>

      {/* HUD Header */}
      <div className="hud-header">
        <svg
          className="hud-svg"
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Neon glow */}
            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Soft shadow */}
            <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#000" floodOpacity="0.6"/>
            </filter>
          </defs>

          {/* Background */}
          <path
            d="M0 0 H1000 V70 H620 L580 95 H420 L380 70 H0 Z"
            fill="#00000f"
            filter="url(#soft-shadow)"
          />

          {/* Neon border */}
          <path
            d="M0 70 H380 L420 95 H580 L620 70 H1000"
            fill="none"
            stroke="#2dd4bf"
            strokeWidth="6"
            strokeLinejoin="miter"
            filter="url(#neon-glow)"
          />

          {/* Text */}
          <text
            x="500"
            y="60"
            textAnchor="middle"
            fill="#2dd4bf"
            fontSize="20"
            fontWeight="750"
            letterSpacing="4"
            filter="url(#neon-glow)"
            style={{ fontFamily: "Orbitron", textTransform: "uppercase" }}
          >
            Solar System
          </text>
        </svg>
      </div>

      {/* Left HUD Buttons */}
      <div
        className="hud-buttons-container"
        style={{ position: 'absolute', top: 100, left: 20, zIndex: 10 }}
      >
        <button className="hud-button" onClick={() => setShowPlanetInfo(true)}>
          <span className="hud-text">Planets</span>
        </button>
        <button className="hud-button" onClick={() => setShowDwarfPlanetInfo(true)}>
          <span className="hud-text">Dwarf Planets</span>
        </button>
        <button className="hud-button" onClick={() => setShowExoPlanetInfo(true)}>
          <span className="hud-text">Exoplanets</span>
        </button>
        <button className="hud-button" onClick={() => setShowEquipmentsInfo(true)}>
          <span className="hud-text">Equipments</span>
        </button>
      </div>

      {/* Bottom Right Hex Buttons */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <button className="hex-button" onClick={() => setShowSystemInfo(true)}><i className="fa-solid fa-info"></i></button>
        {/*<button className="hex-button"><i className="fa-brands fa-react"></i></button>*/}
        <button className="hex-button" onClick={handleFullscreen}>
          <i className="fa-solid fa-expand"></i>
        </button>
      </div>

      {/* Scene Objects */}
      <Suspense fallback={null}>
        <Meteor />
        <BlackHole />
        <BackgroundMusic />
        {showSystemInfo && (
          <InfoSystemPanel onClose={() => setShowSystemInfo(false)} />
        )}

        {showPlanetInfo && (
          <PlanetPanel onClose={() => setShowPlanetInfo(false)} />
        )}

        {showDwarfPlanetInfo && (
          <DwarfPlanetPanel onClose={() => setShowDwarfPlanetInfo(false)} />
        )}

        {showExoPlanetInfo && (
          <ExoPlanetPanel onClose={() => setShowExoPlanetInfo(false)} />
        )}

        {showEquipmentsInfo && (
          <EquipmentsPanel onClose={() => setShowEquipmentsInfo(false)} />
        )}
      </Suspense>

      {/* Three.js Canvas */}
      <Canvas 
        camera={{ position: [0, 120, 240], fov: 60 }} 
        dpr={[1, 2]}
        gl = {
          {
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance'
          }
        }
        style={
          { height: '100vh', 
            width: '100vw' 
          }
        }
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        
        <OrbitControls
          enableZoom={true}
          minDistance={30}   
          maxDistance={300}
          enablePan={false}
        />
        <Stars radius={150} depth={100} count={5000} fade />
        <Sun />
        <SolarSystem />
      </Canvas>
    </div>
  );
}
