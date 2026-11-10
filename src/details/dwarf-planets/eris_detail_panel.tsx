import ErisCanvas from '../objects/o_eris';
import '../../assets/style/detail_panel.css';

export default function ErisDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Eris</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <ErisCanvas zoom={7} /> 
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>
              Eris is one of largest the dwarf planets in our solar system. It's about the same size as Pluto, but it's three times farther from the Sun.
              </p>
              <h3>Size & Distance</h3>
              <p>With an equatorial diameter of about 1,500 miles (2,400 kilometers), Eris is about 1/5 the width of Earth. Eris, like Pluto, is a little smaller than Earth's Moon.</p>
              <p>Eris is about 68 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight more than nine hours to travel from the Sun to the surface of Eris.</p>
              <h3>Orbit and Rotation</h3>
              <p>As Eris orbits the Sun, it completes one rotation every 25.9 hours, making its day length similar to ours.</p>
              <p>Eris takes 557 Earth years to make one trip around the Sun.</p>
              <h3>Structure & Atmosphere</h3>
              <p>The dwarf planet is often so far from the Sun that its atmosphere collapses and freezes, falling to the surface as snow. As it gets closest to the Sun in its faraway orbit, the atmosphere thaws.</p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/3256/Artists_c_oncept_of_Eris_and_Dysnomia_far_from_the_Sun.jpeg?w=800&h=600&fit=clip&crop=faces%2Cfocalpoint" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Eris_and_Dysnomia_art.png" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/e/ErisArtistConcept1200w.jpg?w=1200&h=900&fit=clip&crop=faces%2Cfocalpoint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
