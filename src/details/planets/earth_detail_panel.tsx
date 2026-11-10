import EarthCanvas from '../objects/o_earth';
import '../../assets/style/detail_panel.css';

export default function EarthDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Earth</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <EarthCanvas zoom={7} /> 
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>Earth – our home planet – is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things.</p>
              <h3>Size and Distance</h3>
              <p>With an equatorial diameter of 7,926 miles (12,756 kilometers), Earth is the biggest of the terrestrial planets and the fifth largest planet in our solar system.</p>
              <h3>Orbit and Rotation</h3>
              <p>
                As Earth orbits the Sun, it completes one rotation every 23.9 hours. It takes 365.25 days to complete one trip around the Sun. 
                That extra quarter of a day presents a challenge to our calendar system, which counts one year as 365 days. 
                Earth's axis of rotation is tilted 23.4 degrees with respect to the plane of Earth's orbit around the Sun. This tilt causes our yearly cycle of seasons. 
              </p>
              <h3>Atmosphere</h3>
              <p>
                Near the surface, Earth has an atmosphere that consists of 78% nitrogen, 21% oxygen, and 1% other gases such as argon, carbon dioxide, and neon. 
                The atmosphere affects Earth's long-term climate and short-term local weather and shields us from much of the harmful radiation coming from the Sun.
              </p>
            </div>

            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://science.nasa.gov/wp-content/uploads/2023/05/earth-1-jpg.webp?w=1600" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/cds/kids/nasa-kids-science/earth/why-does-nasa-study-earth/earth1.jpg?w=2048&h=2048&fit=clip&crop=faces%2Cfocalpoint" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/esd/eo/content-feature/cloudsgallery/images/earth_render_2012.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
