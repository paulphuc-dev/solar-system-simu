import PlutoCanvas from '../objects/o_pluto';
import '../../assets/style/detail_panel.css';

export default function PlutoDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Pluto</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <PlutoCanvas zoom={7} /> 
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>
                Pluto was once our solar system's ninth planet, but has been reclassified as a dwarf planet. It's located in the Kuiper Belt.
              </p>
              <h3>Size & Distance</h3>
              <p>Diameter: about 2,377 km and smaller than Earth’s Moon.</p>
              <p>Average: ~5.9 billion km (≈ 39.5 astronomical units – AU)</p>
              <h3>Orbit and Rotation</h3>
              <p>Orbital period: about 248 Earth years and highly elliptical orbit</p>
              <p>Rotation period: about 6.4 Earth days and have Axial tilt about 120°</p>
              <h3>Structure & Atmosphere</h3>
              <p>Pluto have Rocky core at the center, Water-ice layer surrounding the core, Surface covered with ice</p>
              <p>Surface temperature: approximately –220°C to –230°C, Extremely thin atmosphere, mainly composed of:
              Nitrogen, Methane, Carbon monoxide</p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://cdn.mos.cms.futurecdn.net/DoZSMXF87kCuzbymsuEFHo-1200-80.jpg" />
                <img src="https://cdn.mos.cms.futurecdn.net/DoZSMXF87kCuzbymsuEFHo.jpg" />
                <img src="https://images.newscientist.com/wp-content/uploads/2016/03/p_color2_enhanced_release_black_smaller.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
