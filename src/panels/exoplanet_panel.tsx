import { useState } from 'react';
import '../assets/style/planet_panel.css';
import SunDetailPanel from '../details/exo_planets/sun_detail_panel';
import MoonDetailPanel from '../details/exo_planets/moon_detail_panel';
import BlackHoleDetailPanel from '../details/exo_planets/blackhole_detail_panel';

export type PlanetId =| 'sun'| 'moon'| 'blackhole';

type CardProps = {
  title: string;
  image: string;
  planetId: PlanetId;
  onDetail: (id: PlanetId) => void;
};

type PlanetPanelProps = { onClose: () => void };

const Card = ({ title, image, planetId, onDetail }: CardProps) => (
  <div className="planet-card">
    <h3>{title}</h3>

    <div className="planet-card-body">
      <img src={image} alt={title} />
      <div className="planet-card-actions">
        <span className="learn-more">LEARN MORE THIS DWARF PLANET</span>
        <button
          className="detail-btn"
          onClick={() => {onDetail(planetId);}}
        >
        Explore
        </button>
      </div>
    </div>
  </div>
);

export default function PlanetPanel({ onClose }: PlanetPanelProps) {
  const [activePlanet, setActivePlanet] = useState<PlanetId | null>(null);
  return (
    <>
      <div className="planet-overlay">
        <div className="planet-panel">
          <div className="planet-header">
            <h2>Dwarf Planets</h2>
            <button onClick={onClose}>✕</button>
          </div>

          <div className="planet-grid">
            <Card title="Sun" planetId="sun" image="https://science.nasa.gov/wp-content/uploads/2023/05/pia03149-copy.jpg" onDetail={setActivePlanet} />
            <Card title="Moon" planetId="moon" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNlRTBR4JOrip4bICQykN6EMVzESNyDaLBQ&s" onDetail={setActivePlanet} />
            <Card title="BlackHole" planetId="blackhole" image="https://www.nasa.gov/wp-content/uploads/2017/03/assasn-14li-banner.jpg" onDetail={setActivePlanet} />
          </div>
        </div>
      </div>

      {activePlanet === 'sun' && (
        <SunDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}

      {activePlanet === 'moon' && (
        <MoonDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}

      {activePlanet === 'blackhole' && (
        <BlackHoleDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}
    </>
  );
}

