import HaumeaCanvas from '../objects/o_haumea';
import '../../assets/style/detail_panel.css';

export default function HaumeaDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Haumea</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <HaumeaCanvas zoom={7} /> 
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>
              Haumea is located in the Kuiper Belts, a doughnut-shaped region of icy bodies beyond the orbit of Neptune.
              </p>
              <h3>Size & Distance</h3>
              <p>With an equatorial diameter of about 1,080 miles (about 1,740 kilometers), Haumea is about 1/7 the width of Earth.</p>
              <p>Haumea is 43 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 6 hours to travel from the Sun to Haumea.</p>
              <h3>Orbit and Rotation</h3>
              <p>Haumea takes 285 Earth years to make one trip around the Sun. As Haumea orbits the Sun, it completes one rotation every 4 hours, making it one of the fastest rotating large objects in our solar system.</p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/h/haumea_th.jpg" />
                <img src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/h5P8ZW8QJAscrMQ9r6euoc.jpg" />
                <img src="https://c02.purpledshub.com/uploads/sites/48/2024/01/dwarf-planet-haumea.jpg?w=1200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
