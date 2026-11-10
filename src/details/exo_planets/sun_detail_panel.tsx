import SunCanvas from '../objects/o_sun';
import '../../assets/style/detail_panel.css';

export default function SunDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Sun</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <SunCanvas zoom={7} /> 
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>The Sun is the star at the heart of our solar system. Its gravity holds the solar system together, keeping everything — from the biggest planets to the smallest bits of debris — in its orbit.</p>
              <h3>Fact</h3>
              <p>The Sun's gravity holds the solar system together, keeping everything – from the biggest planets to the smallest particles of debris – in its orbit. 
              The connection and interactions between the Sun and Earth drive the seasons, ocean currents, weather, climate, radiation belts and auroras. Though it is special to us, 
              there are billions of stars like our Sun scattered across the Milky Way galaxy.</p>
              <h3>Size</h3>
              <p>Sun's diameter is approximately 1.39 million kilometers, about 109 times larger than Earth’s diameter, corresponding to an average radius of around 696,000 kilometers. 
              The Sun’s mass is nearly 1.99 × 10³⁰ kilograms, accounting for about 99.86% of the total mass of the entire Solar System.</p>
              <h3>Temperature</h3>
              <p>The Sun has extremely high temperatures that vary significantly across its different layers. The temperature at the Sun’s surface, known as the photosphere, is about 5,500 degrees Celsius, 
              which is hot enough to emit the light and heat received by Earth. At the core of the Sun, where nuclear fusion reactions generate energy, the temperature can reach around 15 million degrees Celsius. 
              Above the surface, the Sun’s atmospheric layers such as the chromosphere and the corona have surprisingly high temperatures, with the corona reaching millions of degrees Celsius, even though it is farther from the core. 
              This wide range of temperatures shows that the Sun has a very complex structure and set of physical processes.</p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://images-assets.nasa.gov/image/PIA17669/PIA17669~orig.jpg?w=600&h=600&fit=crop&crop=faces%2Cfocalpoint" />
                <img src="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~large.jpg?w=600&h=600&fit=crop&crop=faces%2Cfocalpoint" />
                <img src="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002115/GSFC_20171208_Archive_e002115~orig.jpg?w=600&h=469&fit=crop&crop=faces%2Cfocalpoint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
