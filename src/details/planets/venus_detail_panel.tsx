import VenusCanvas from '../objects/o_venus';
import '../../assets/style/detail_panel.css';

export default function VenusDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Venus</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <VenusCanvas zoom={7} /> 
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>
                Venus is the second planet from the Sun, and the sixth largest planet. It’s the hottest planet in our solar system.
              </p>
              <h3>Size & Distance</h3>
              <p>Venus orbits the Sun from an average distance of 67 million miles (108 million kilometers), or 0.72 astronomical units. One astronomical unit (abbreviated as AU), 
                is the distance from the Sun to Earth. From this distance, it takes sunlight about six minutes to travel from the Sun to Venus.</p>
              <h3>Orbit and Rotation</h3>
              <p>Venus's extremely slow rotation, sunrise to sunset would take 117 Earth days. And by the way, the Sun would rise in the west and set in the east, because Venus spins backward compared to Earth.</p>
              <h3>Structure & Atmosphere</h3>
              <p>Venus has an iron core enveloped by a hot-rock mantle; the thinnest of skins forms a rocky, exterior crust. 
                On this planets, this thin skin changes form and sometimes erupts into volcanoes in response to the ebb and flow of heat and pressure deep beneath.</p>
              <p>Venus’ atmosphere is extreme. With the hottest surface in the solar system. The atmosphere is mostly carbon dioxide – the same gas driving the greenhouse effect on Venus and Earth – with clouds composed of sulfuric acid. 
              And at the surface, the hot, high-pressure carbon dioxide behaves in a corrosive fashion. </p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/pia00271/PIA00271~large.jpg?w=600&h=600&fit=crop&crop=faces%2Cfocalpoint" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar-system/venus/images/venus_from_nasa_pioneer_1_orbiter.jpg?w=583&h=600&fit=crop&crop=faces%2Cfocalpoint" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/2024/03/venus-mariner-10-pia23791-fig2-16x9-1.jpg?w=600&h=338&fit=crop&crop=faces%2Cfocalpoint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
