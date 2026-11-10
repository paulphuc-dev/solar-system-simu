import MarsCanvas from '../objects/o_mars';
import '../../assets/style/detail_panel.css';

export default function MarsDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Mars</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <MarsCanvas zoom={7} /> 
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>
              Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots.
              </p>
              <h3>Size and Distance</h3>
              <p>With a radius of 2,106 miles (3,390 kilometers), Mars is about half the size of Earth. 
                If Earth were the size of a nickel, Mars would be about as big as a raspberry.</p>
              <h3>Orbit and Rotation</h3>
              <p>
                As Mars orbits the Sun, it completes one rotation every 24.6 hours, which is very similar to one day on Earth (23.9 hours). 
                Martian days are called sols – short for "solar day." A year on Mars lasts 669.6 sols, which is the same as 687 Earth days.
              </p>
              <p>
                Mars' axis of rotation is tilted 25 degrees with respect to the plane of its orbit around the Sun. This is another similarity with Earth, which has an axial tilt of 23.4 degrees. 
                Like Earth, Mars has distinct seasons, but they last longer than seasons here on Earth since Mars takes longer to orbit the Sun (because it's farther away). 
              </p>
              <h3>Formation</h3>
              <p>
                When the solar system settled into its current layout about 4.5 billion years ago, Mars formed when gravity pulled swirling gas and dust in to become the fourth planet from the Sun. 
                Mars is about half the size of Earth, and like its fellow terrestrial planets, it has a central core, a rocky mantle, and a solid crust.
              </p>
              <h3>Structure & Atmosphere</h3>
              <p>
                Mars has a dense core at its center between 930 and 1,300 miles (1,500 to 2,100 kilometers) in radius. 
                It's made of iron, nickel, and sulfur. Surrounding the core is a rocky mantle between 770 and 1,170 miles (1,240 to 1,880 kilometers) thick, 
                and above that, a crust made of iron, magnesium, aluminum, calcium, and potassium. 
                This crust is between 6 and 30 miles (10 to 50 kilometers) deep.
              </p>
              <p>Mars has a thin atmosphere made up mostly of carbon dioxide, nitrogen, and argon gases.
              The temperature on Mars can be as high as 70 degrees Fahrenheit (20 degrees Celsius) or as low as about -225 degrees Fahrenheit (-153 degrees Celsius).
              </p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://science.nasa.gov/wp-content/uploads/2024/03/pia04304-mars.jpg?w=1536" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/resources/detail_files/7/7808_global-color-views-mars-PIA00407-full2.jpg?w=1600&h=1600&fit=clip&crop=faces%2Cfocalpoint" />
                <img src="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000019/GSFC_20171208_Archive_e000019~large.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
