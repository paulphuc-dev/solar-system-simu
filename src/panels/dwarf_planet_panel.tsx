import { useState } from 'react';
import '../assets/style/planet_panel.css';
import PlutoDetailPanel from '../details/dwarf-planets/pluto_detail_panel';
import ErisDetailPanel from '../details/dwarf-planets/eris_detail_panel';
import HaumeaDetailPanel from '../details/dwarf-planets/haumea_detail_panel';
import MakeMakeDetailPanel from '../details/dwarf-planets/makemake_detail_panel';
import CeresDetailPanel from '../details/dwarf-planets/ceres_detail_panel';

export type PlanetId =
  | 'pluto'
  | 'eris'
  | 'haumea'
  | 'makemake'
  | 'ceres';

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
            <Card title="Pluto" planetId="pluto" image="https://science.nasa.gov/wp-content/uploads/2024/03/pluto-new-horizons-pia20291-16x9-1.jpg?resize=1200,675" onDetail={setActivePlanet} />
            <Card title="Eris" planetId="eris" image="https://hips.hearstapps.com/hmg-prod/images/eris-makemake-icy-dwarf-planet-65d919391d7c7.jpg?crop=0.505xw:0.722xh;0.450xw,0.0322xh&resize=1200:*" onDetail={setActivePlanet} />
            <Card title="Haumea" planetId="haumea" image="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/h/haumea_th.jpg" onDetail={setActivePlanet} />
            <Card title="Makemake" planetId="makemake" image="https://science.nasa.gov/wp-content/uploads/2024/03/dwarf-planet-makemake-16x9-1.jpg?resize=1200,675" onDetail={setActivePlanet} />
            <Card title="Ceres" planetId="ceres" image="https://science.nasa.gov/wp-content/uploads/2024/03/ceres-dawn-pia19562-16x9-1.jpg?resize=1200,675" onDetail={setActivePlanet} />
          </div>
        </div>
      </div>

      {activePlanet === 'pluto' && (
        <PlutoDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}

      {activePlanet === 'eris' && (
        <ErisDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}

      {activePlanet === 'haumea' && (
        <HaumeaDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}

      {activePlanet === 'makemake' && (
        <MakeMakeDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}

      {activePlanet === 'ceres' && (
        <CeresDetailPanel
          onClose={() => setActivePlanet(null)}
        />
      )}
    </>
  );
}
