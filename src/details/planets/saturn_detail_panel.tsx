import SaturnCanvas from '../objects/o_saturn';
import '../../assets/style/detail_panel.css';

export default function SaturnDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Saturn</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <SaturnCanvas zoom={10} /> 
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>Saturn is the sixth planet from the Sun, and the second largest in the solar system. It’s surrounded by beautiful rings.</p>
              <h3>Size and Distance</h3>
              <p>With an equatorial diameter of about 74,897 miles (120,500 kilometers), Saturn is 9 times wider than Earth</p>
              <p>From an average distance of 886 million miles (1.4 billion kilometers), Saturn is 9.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, 
                it takes sunlight 80 minutes to travel from the Sun to Saturn.</p>
              <h3>Orbit and Rotation</h3>
              <p>Saturn has the second-shortest day in the solar system. One day on Saturn takes only 10.7 hours
              and Saturn makes a complete orbit around the Sun (a year in Saturnian time) in about 29.4 Earth years (10,756 Earth days).
              Its axis is tilted by 26.73 degrees with respect to its orbit around the Sun, which is similar to Earth's 23.5-degree tilt. 
              </p>
              <h3>Rings</h3>
              <p>Saturn's ring system extends up to 175,000 miles (282,000 kilometers) from the planet, yet the vertical height is typically about 30 feet (10 meters) in the main rings.</p>
              <h3>History</h3>
              <p>Saturn took shape when the rest of the solar system formed about 4.5 billion years ago when gravity pulled swirling gas and dust in to become this gas giant.</p>
              <h3>Structure & Atmosphere</h3>
              <p>Like Jupiter, Saturn is made mostly of hydrogen and helium.</p>
              <p>Winds in the upper atmosphere reach 1,600 feet per second (500 meters per second) in the equatorial region. In contrast, the strongest hurricane-force winds on Earth top out at about 360 feet per second (110 meters per second). 
              And the pressure – the same kind you feel when you dive deep underwater – is so powerful it squeezes gas into a liquid.</p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://science.nasa.gov/wp-content/uploads/2024/03/hubble-saturn-visible-light.jpg?resize=600,335"></img>
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/730/Saturn_and_its_rings.jpeg?w=600&h=429&fit=crop&crop=faces%2Cfocalpoint" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia05/pia05389/jpeg/PIA05389.jpg?w=1024&h=1024&fit=crop&crop=faces%2Cfocalpoint" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/pia17474/PIA17474~large.jpg?w=600&h=450&fit=crop&crop=faces%2Cfocalpoint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
