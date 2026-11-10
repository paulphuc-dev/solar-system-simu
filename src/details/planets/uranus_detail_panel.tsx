import VenusCanvas from '../objects/o_uranus';
import '../../assets/style/detail_panel.css';

export default function UranusDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Uranus</h2>
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
                Uranus is the seventh planet from the Sun, and the third largest planet in our solar system. It appears to spin sideways.
              </p>
              <h3>Size & Distance</h3>
              <p>With an equatorial diameter of 31,763 miles (51,118 kilometers), Uranus is four times wider than Earth.</p>
              <p>From an average distance of 1.8 billion miles (2.9 billion kilometers), Uranus is about 19 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), 
              is the distance from the Sun to Earth. From this distance, it takes sunlight 2 hours and 40 minutes to travel from the Sun to Uranus</p>
              <h3>Orbit and Rotation</h3>
              <p>One day on Uranus takes about 17 hours. This is the amount of time it takes Uranus to rotate, or spin once around its axis. Uranus makes a complete orbit around the Sun (a year in Uranian time) in about 84 Earth years (30,687 Earth days)</p>
              <p>Uranus is the only planet whose equator is nearly at a right angle to its orbit, with a tilt of 97.77 degrees. </p>
              <h3>Structure & Atmosphere</h3>
              <p>Uranus is one of two ice giants in the outer solar system (the other is Neptune). Most (80% or more) of the planet's mass is made up of a hot dense fluid of "icy" materials – water, methane, and ammonia – above a small rocky core. 
              Near the core, it heats up to 9,000 degrees Fahrenheit (4,982 degrees Celsius).</p>
              <p>Uranus' atmosphere is mostly hydrogen and helium, with a small amount of methane and traces of water and ammonia. The methane gives Uranus its signature blue color.</p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/p/i/a/1/PIA18182-1.jpg?w=1720&h=1720&fit=clip&crop=faces%2Cfocalpoint" />
                <img src="https://images-assets.nasa.gov/image/PIA17306/PIA17306~orig.jpg?w=1024&h=800&fit=clip&crop=faces%2Cfocalpoint" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/p/i/a/0/PIA01492-1.jpg?w=2188&h=2185&fit=clip&crop=faces%2Cfocalpoint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
