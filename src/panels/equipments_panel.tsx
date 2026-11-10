import { useState } from 'react';
import '../assets/style/planet_panel.css';
import ShuttleDetailPanel from '../details/equipments/shuttle_equipment';
import VoyagerDetailPanel from '../details/equipments/voyager_equipment';
import MarsRoverDetailPanel from '../details/equipments/mars_rover_equipment';
import LunarRoverDetailPanel from '../details/equipments/lunar_rover_equipment';
import MRODetailPanel from '../details/equipments/mro_equipment';
import ISSDetailPanel from '../details/equipments/iss_equipment';

export type EquipmentId =
| 'shuttle'
| 'voyager'
| 'mars_reconnaise' 
| 'lunar_rover' 
| 'mars_rover'
| 'iss';

type CardProps = {
  title: string;
  image: string;
  equipmentId: EquipmentId;
  onDetail: (id: EquipmentId) => void;
};

type EquipmentPanelProps = { onClose: () => void };

const Card = ({ title, image, equipmentId, onDetail }: CardProps) => (
  <div className="planet-card">
    <h3>{title}</h3>

    <div className="planet-card-body">
      <img src={image} alt={title} />
      <div className="planet-card-actions">
        <span className="learn-more">LEARN MORE THIS DWARF PLANET</span>
        <button
          className="detail-btn"
          onClick={() => {onDetail(equipmentId);}}
        >
        Explore
        </button>
      </div>
    </div>
  </div>
);

export default function EquipmentsPanel({ onClose }: EquipmentPanelProps) {
  const [activeEquipment, setActiveEquipment] = useState<EquipmentId | null>(null);
  return (
    <>
      <div className="planet-overlay">
        <div className="planet-panel">

          {/* Header */}
          <div className="planet-header">
            <h2>Equipments</h2>
            <button onClick={onClose}>✕</button>
          </div>

          {/* Content */}
          <div className="planet-grid">
            <Card title="Space Shuttle" equipmentId="shuttle" image="https://images-assets.nasa.gov/image/61a-s-0139/61a-s-0139~large.jpg?w=1920&h=1257&fit=clip&crop=faces%2Cfocalpoint" onDetail={setActiveEquipment}/>
            <Card title="Voyager 2" equipmentId="voyager" image="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia26/pia26353/PIA26353.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint" onDetail={setActiveEquipment}/>
            <Card title="Mars Reconnaissance Orbiter" equipmentId="mars_reconnaise" image="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/resources/detail_files/1/166_PIA07245_200609062-full2.jpg?w=3791&h=3002&fit=clip&crop=faces%2Cfocalpoint" onDetail={setActiveEquipment}/>
            <Card title="Lunar Rover" equipmentId="lunar_rover" image="https://www.nasa.gov/wp-content/uploads/2023/03/as15-88-11901orig.jpg?w=1041" onDetail={setActiveEquipment}/>
            <Card title="Mars Rover" equipmentId="mars_rover" image="https://cdn.prod.website-files.com/67566041d96257851e0e7721/6827bcf683157eb236147b4e_AD_4nXe6mDUpIgdwJehFTFgdkWZnQgXBKbi_CywNHJYR_S3MrvDKSCBN44UA2hHsVir2yrdsX29lrrMD-QDSqfBZHgN1iEuCcK4kUUFdW_NFHto7SDSDvuioq4jQ7BEbUxAtubg7e4tErQ.png" onDetail={setActiveEquipment}/>
            <Card title="ISS" equipmentId="iss" image="https://images-assets.nasa.gov/image/iss056e201248/iss056e201248~large.jpg?w=1920&h=1280&fit=clip&crop=faces%2Cfocalpoint" onDetail={setActiveEquipment}/>
          </div>
        </div>
      </div>

      {activeEquipment === 'shuttle' && (
        <ShuttleDetailPanel
          onClose={() => setActiveEquipment(null)}
        />
      )}

      {activeEquipment === 'voyager' && (
        <VoyagerDetailPanel
          onClose={() => setActiveEquipment(null)}
        />
      )}

      {activeEquipment === 'lunar_rover' && (
        <LunarRoverDetailPanel
          onClose={() => setActiveEquipment(null)}
        />
      )}

      {activeEquipment === 'mars_rover' && (
        <MarsRoverDetailPanel
          onClose={() => setActiveEquipment(null)}
        />
      )}

      {activeEquipment === 'mars_reconnaise' && (
        <MRODetailPanel
          onClose={() => setActiveEquipment(null)}
        />
      )}

      {activeEquipment === 'iss' && (
        <ISSDetailPanel
          onClose={() => setActiveEquipment(null)}
        />
      )}

    </>
  );
}
