import MercuryCanvas from '../objects/o_mercury';
import '../../assets/style/detail_panel.css';

export default function MercuryDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Mercury</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <MercuryCanvas zoom={7} /> 
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>
                Mercury is the closest planet to the Sun, and the smallest planet in our solar system. It's only slightly larger than Earth's Moon.
              </p>
              <h3>Size and Distance</h3>
              <p>With a radius of 1,516 miles (2,440 kilometers), Mercury is a little more than 1/3 the width of Earth.</p>
              <p>From an average distance of 36 million miles (58 million kilometers), Mercury is 0.4 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. 
              From this distance, it takes sunlight 3.2 minutes to travel from the Sun to Mercury.</p>
              <h3>Orbit and Rotation</h3>
              <p>Mercury's highly eccentric, egg-shaped orbit takes the planet as close as 29 million miles (47 million kilometers) and as far as 43 million miles (70 million kilometers) from the Sun. 
              It speeds around the Sun every 88 days, traveling through space at nearly 29 miles (47 kilometers) per second, faster than any other planet.</p>
              <p>Mercury's axis of rotation is tilted just 2 degrees with respect to the plane of its orbit around the Sun. </p>
              <h3>Structure & Atmosphere</h3>
              <p> It has a large metallic core with a radius of about 1,289 miles (2,074 kilometers), about 85% of the planet's radius.</p>
              <p>Instead of an atmosphere, Mercury possesses a thin exosphere made up of atoms blasted off the surface by the solar wind and striking meteoroids. Mercury's exosphere is composed mostly of oxygen, sodium, hydrogen, helium, and potassium.</p>
            </div>

            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://images-assets.nasa.gov/image/PIA14729/PIA14729~orig.jpg?w=600&h=337&fit=crop&crop=faces%2Cfocalpoint" />
                <img src="https://images-assets.nasa.gov/image/PIA11406/PIA11406~orig.jpg?w=600&h=405&fit=crop&crop=faces%2Cfocalpoint" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia13/pia13508/jpeg/PIA13508.jpg?w=1536&h=1086&fit=crop&crop=faces%2Cfocalpoint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
