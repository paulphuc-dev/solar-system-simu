import MoonCanvas from '../objects/o_moon';
import '../../assets/style/detail_panel.css';

export default function MoonDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Moon</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <MoonCanvas zoom={7} /> 
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>
                The Moon is the Earth's only natural satellite, located about 384,400 km away. 
                It does not emit its own light but reflects sunlight, and it affects the tides on Earth. 
                The Moon's surface features many craters, mountains, and rocky plains, with almost no atmosphere and no life. 
                It is an important object of scientific study and holds significant cultural meaning for humanity.
              </p>
              <h3>Size</h3>
              <p>The Moon is much smaller than Earth. Its diameter is about 3,474 km, nearly 1/4 of Earth's diameter, and its mass is only about 1/81 of Earth's mass. 
              The Moon’s volume is also significantly smaller, equivalent to roughly 50 Earths inside it if compared proportionally. 
              Despite its modest size, the Moon has a major impact on Earth, especially in regulating tides and influencing the planet’s axial stability.</p>
              <h3>Orbit and Rotation</h3>
              <p>The Moon orbits the Earth in an elliptical path at an average distance of about 384,400 km. It completes one orbit around Earth in approximately 27.3 days, known as the sidereal period. 
              However, due to tidal locking, the Moon always shows the same face to Earth, creating what we call the “near side” and the “far side” of the Moon. 
              Its orbit is not perfectly circular and is tilted about 5 degrees relative to the ecliptic plane, which is why lunar and solar eclipses do not occur every month. 
              This orbit also influences tides and many natural phenomena on Earth.</p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://science.nasa.gov/wp-content/uploads/2023/08/full.jpg" />
                <img src="https://science.nasa.gov/wp-content/uploads/2023/03/moon-1-jpeg.webp" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/2023/08/iss048-e-61111.jpg?w=1280&h=720&fit=clip&crop=faces%2Cfocalpoint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
