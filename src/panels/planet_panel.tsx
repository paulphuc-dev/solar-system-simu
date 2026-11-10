import { useState } from 'react';
import '../assets/style/planet_panel.css';
import MercuryDetailPanel from '../details/planets/mercury_detail_panel';
import VenusDetailPanel from '../details/planets/venus_detail_panel';
import EarthDetailPanel from '../details/planets/earth_detail_panel';
import MarsDetailPanel from '../details/planets/mars_detail_panel';
import JupiterDetailPanel from '../details/planets/jupiter_detail_panel';
import SaturnDetailPanel from '../details/planets/saturn_detail_panel';
import UranusDetailPanel from '../details/planets/uranus_detail_panel';
import NeptuneDetailPanel from '../details/planets/neptune_detail_panel';

export type PlanetId =
  | 'mercury'
  | 'venus'
  | 'earth'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune';

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
        <span className="learn-more">LEARN MORE THIS PLANET</span>
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
            <h2>Planets</h2>
            <button onClick={onClose}>✕</button>
          </div>

          <div className="planet-grid">
            <Card title="Mercury" planetId="mercury" image="https://science.nasa.gov/wp-content/uploads/2024/03/pia15162-mercury-basins-messenger-16x9-1.jpg?resize=1200,675" onDetail={setActivePlanet} />
            <Card title="Venus" planetId="venus" image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Venus_globe.jpg/2048px-Venus_globe.jpg" onDetail={setActivePlanet} />
            <Card title="Earth" planetId="earth" image="https://science.nasa.gov/wp-content/uploads/2024/03/blue-marble-apollo-17-16x9-1.jpg?resize=1200,675" onDetail={setActivePlanet} />
            <Card title="Mars" planetId="mars" image="https://science.nasa.gov/wp-content/uploads/2024/03/mars-full-globe-16x9-1.jpg?resize=1200,675" onDetail={setActivePlanet} />
            <Card title="Jupiter" planetId="jupiter" image="https://science.nasa.gov/wp-content/uploads/2024/03/jupiter-marble-pia22946-16x9-1.jpg?resize=1200,675" onDetail={setActivePlanet} />
            <Card title="Saturn" planetId="saturn" image="https://science.nasa.gov/wp-content/uploads/2024/03/saturn-farewell-pia21345.jpg?resize=1200,621" onDetail={setActivePlanet} />
            <Card title="Uranus" planetId="uranus" image="https://science.nasa.gov/wp-content/uploads/2024/03/uranus-pia18182-16x9-1.jpg?resize=1200,675" onDetail={setActivePlanet} />
            <Card title="Neptune" planetId="neptune" image="https://science.nasa.gov/wp-content/uploads/2024/03/pia01492-neptune-full-disk-16x9-1.jpg?resize=1200,675" onDetail={setActivePlanet} />
          </div>
        </div>
      </div>

      {activePlanet === 'mercury' && (
        <MercuryDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}

      {activePlanet === 'venus' && (
        <VenusDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}

      {activePlanet === 'earth' && (
        <EarthDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}

      {activePlanet === 'mars' && (
        <MarsDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}

      {activePlanet === 'jupiter' && (
        <JupiterDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}

      {activePlanet === 'saturn' && (
        <SaturnDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}

      {activePlanet === 'uranus' && (
        <UranusDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}

      {activePlanet === 'neptune' && (
        <NeptuneDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}
    </>
  );
}
