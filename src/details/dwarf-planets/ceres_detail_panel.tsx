import CeresCanvas from '../objects/o_ceres';
import '../../assets/style/detail_panel.css';

export default function CeresDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Ceres</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <CeresCanvas zoom={7} /> 
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>
              Dwarf planet Ceres is the largest object in the asteroid belt between Mars and Jupiter. It was explored by NASA's Dawn spacecraft.
              </p>
              <h3>Size & Distance</h3>
              <p>With a radius of 296 miles (476 kilometers), Ceres is 1/13 the radius of Earth.</p>
              <p>From an average distance of 257 million miles (413 million kilometers), Ceres is 2.8 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 22 minutes to travel from the Sun to Ceres</p>
              <h3>Orbit and Rotation</h3>
              <p>Ceres takes 1,682 Earth days, or 4.6 Earth years, to make one trip around the Sun. As Ceres orbits the Sun, it completes one rotation every 9 hours, making its day length one of the shortest in the solar system.</p>
              <p>Ceres' axis of rotation is tilted just 4 degrees with respect to the plane of its orbit around the Sun. </p>
              <h3>Structure & Atmosphere</h3>
              <p>Ceres probably has a solid core and a mantle made of water ice. In fact, Ceres could be composed of as much as 25 percent water. If that is correct, Ceres has more water than Earth does. </p>
              <p>Ceres has a very thin atmosphere, and there is evidence it contains water vapor. The vapor may be produced by ice volcanoes or by ice near the surface sublimating (transforming from solid to gas)</p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/2948/Image_of_Ceres_with_bright_spot.jpeg?w=640&h=350&fit=clip&crop=faces%2Cfocalpoint" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/p/i/a/2/PIA21906_detail.jpg" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/Ceres_Color_PIA21079-800x600-1.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
