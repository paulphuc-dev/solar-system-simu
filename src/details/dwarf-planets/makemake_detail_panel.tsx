import MakeMakeCanvas from '../objects/o_makemake';
import '../../assets/style/detail_panel.css';

export default function MakeMakeDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>MakeMake</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <MakeMakeCanvas zoom={7} /> 
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>
              Dwarf planet Makemake – along with Pluto, Haumea, and Eris – is located in the Kuiper Belt, a donut-shaped region of icy bodies beyond the orbit of Neptune.
              </p>
              <h3>Size & Distance</h3>
              <p>With a radius of approximately 444 miles (715 kilometers), Makemake is 1/9 the radius of Earth. </p>
              <p>From an average distance of 4,253,000,000 miles (6,847,000,000 kilometers), Makemake is 45.8 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 6 hours and 20 minutes to travel from the Sun to Makemake.</p>
              <h3>Orbit and Rotation</h3>
              <p>Makemake takes 305 Earth years to make one trip around the Sun. As Makemake orbits the Sun, it completes one rotation every 22 and a half hours, making its day length similar to Earth and Mars.</p>
              <h3>Structure & Atmosphere</h3>
              <p>Makemake may develop a very thin atmosphere, most likely made of nitrogen, near perihelion – when it is closest to the Sun.</p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/m/makemake_th.jpg" />
                <img src="https://theplanets.org/123/2021/11/Dwarf-Planet-Makemake.png" />
                <img src="https://cdn.mos.cms.futurecdn.net/8QBGiy9BhmttKdGeAAZpn8.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
