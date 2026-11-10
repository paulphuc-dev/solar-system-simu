import '../assets/style/info_system_panel.css';

type Props = {
  onClose: () => void;
};

export default function InfoSystemPanel({ onClose }: Props) {
  return (
    <div className="info-overlay">
      <div className="info-panel">
        <div className="info-header">
          <h2>Solar System</h2>
          <button onClick={onClose}>✕</button>
        </div>
        <div className="info-content">

          {/* Div 1 – Image */}
          <div className="info-image">
            <img src="https://science.nasa.gov/wp-content/uploads/2023/10/edu-solar-system-large.png?w=1024" alt="Earth" />
          </div>

          {/* Div 2 – Scrollable text */}
          <div className="info-text">
            <p>
              Solar System has eight planets orbiting the Sun at its center and formed from a giant 
              cloud of gas and dust about 4.6 billion years ago as gravity caused this “solar nebula” to collapse and spin, 
              forming the star and planets. It is located in the Milky Way galaxy, 
              specifically in the Orion Arm or Orion Spur  between the Sagittarius and Perseus arms. 
              Our solar system orbits the center of the galaxy at about 515,000 mph (828,000 kph). 
              It takes about 230 million years to complete one orbit around the galactic center.
            </p>
          </div>

          <div className="info-carousel">
            <div className="carousel-track">
              <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/s/ssc2008-10b1.jpg?w=5600&h=5600&fit=clip&crop=faces%2Cfocalpoint" />
              <img src="https://www.nasa.gov/wp-content/uploads/2021/01/20201118_4planet.png" />
              <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia10/pia10969/PIA10969.jpg?w=1600&h=1600&fit=clip&crop=faces%2Cfocalpoint" />
              <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/o/OSS2.jpg?w=2925&h=2229&fit=clip&crop=faces%2Cfocalpoint" />
              <img src="https://plus.nasa.gov/wp-content/uploads/2023/08/inasnap_solarsystem.jpg?w=1024"></img>
              <img src="https://svs.gsfc.nasa.gov/vis/a000000/a003800/a003809/BeyondEarthView.1555.jpg"></img>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
