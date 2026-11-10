import VenusCanvas from '../objects/o_neptune';
import '../../assets/style/detail_panel.css';

export default function NeptuneDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Neptune</h2>
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
                Neptune is the eighth, and most distant planet from the Sun. It’s the fourth-largest, and the first planet discovered with math.
              </p>
              <h3>Size & Distance</h3>
              <p>With an equatorial diameter of 30,775 miles (49,528 kilometers), Neptune is about four times wider than Earth. </p>
              <p>From an average distance of 2.8 billion miles (4.5 billion kilometers), Neptune is 30 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 4 hours to travel from the Sun to Neptune.</p>
              <h3>Orbit and Rotation</h3>
              <p>One day on Neptune takes about 16 hours (the time it takes for Neptune to rotate or spin once). And Neptune makes a complete orbit around the Sun (a year in Neptunian time) in about 165 Earth years (60,190 Earth days).</p>
              <p>Neptune’s axis of rotation is tilted 28 degrees with respect to the plane of its orbit around the Sun, which is similar to the axial tilts of Mars and Earth.</p>
              <h3>Structure & Atmosphere</h3>
              <p>Neptune is one of two ice giants in the outer solar system (the other is Uranus). Most (80% or more) of the planet's mass is made up of a hot dense fluid of "icy" materials – water, methane, and ammonia – above a small, rocky core.</p>
              <p>Neptune's atmosphere is made up mostly of hydrogen and helium with just a little bit of methane. Neptune's neighbor Uranus has a similar makeup; the methane absorbs other colors but reflects blue, giving these ice giants their similar hue.</p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/p/i/a/0/PIA01492-1.jpg?w=2188&h=2185&fit=clip&crop=faces%2Cfocalpoint" />
                <img src="https://images-assets.nasa.gov/image/PIA00057/PIA00057~orig.jpg?w=780&h=780&fit=clip&crop=faces%2Cfocalpoint" />
                <img src="https://images-assets.nasa.gov/image/PIA02210/PIA02210~orig.jpg?w=1000&h=1000&fit=clip&crop=faces%2Cfocalpoint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
