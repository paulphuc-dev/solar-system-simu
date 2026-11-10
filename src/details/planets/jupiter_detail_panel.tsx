import JupiterCanvas from '../objects/o_jupiter';
import '../../assets/style/detail_panel.css';

export default function JupiterDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Jupiter</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <JupiterCanvas zoom={7} /> 
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>             
                Jupiter is the fifth planet from the Sun, and the largest in the solar system, by far — more than twice as massive as the other planets combined.
              </p>
              <h3>About Venus</h3>
              <p>Jupiter has the shortest day in the solar system, taking about 9.9 hours to spin around once on its axis.</p>
              <h3>Size and Distance</h3>
              <p>With a radius of 43,440.7 miles (69,911 kilometers), Jupiter is 11 times wider than Earth</p>
              <p>From an average distance of 484 million miles (778 million kilometers), Jupiter is 5.2 astronomical units away from the Sun. 
                One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 43 minutes to travel from the Sun to Jupiter.</p>
              <h3>Orbit and Rotation</h3>
              <p>
                Jupiter has the shortest day in the solar system. One day on Jupiter takes 9.9 hours.
                Its equator is tilted with respect to its orbital path around the Sun by just 3 degrees. Jupiter does not have seasons as extreme as other planets do.
              </p>
              <h3>Structure & Atmosphere</h3>
              <p>The composition of Jupiter is similar to that of the Sun – mostly hydrogen and helium. 
              Deep in the atmosphere, pressure and temperature increase, compressing the hydrogen gas into a liquid. 
              This gives Jupiter the largest ocean in the solar system – an ocean made of hydrogen instead of water.</p>
              <p>
              Jupiter's appearance is a tapestry of colorful stripes and spots – the cloud bands that encircle the planet, 
              and the cyclonic storms dotting it from pole to pole. The gas planet likely has three distinct cloud layers in its "skies" that, taken together, span about 44 miles (71 kilometers). 
              The top cloud is probably made of ammonia ice, while the middle layer is likely made of ammonium hydrosulfide crystals. The innermost layer may be made of water ice and vapor.
              </p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://science.nasa.gov/wp-content/uploads/2024/03/jupiter-marble-pia22946-16x9-1.jpg" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia00/pia00343/jpeg/PIA00343.jpg?w=600&h=600&fit=crop&crop=faces%2Cfocalpoint" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/06/Jupiter_moons_family_portrait-1280x900-1.jpg?w=1280&h=900&fit=crop&crop=faces%2Cfocalpoint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
