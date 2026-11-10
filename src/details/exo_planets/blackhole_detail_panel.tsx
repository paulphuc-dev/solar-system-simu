import '../../assets/style/detail_panel.css';

export default function BlackHoleDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>BlackHole</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <img  src="https://svs.gsfc.nasa.gov/vis/a010000/a010800/a010807/BlackHoleAnimation_01500.jpg"></img>
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>
                Black holes are among the most mysterious cosmic objects, much studied but not fully understood. These objects aren’t really holes. 
                They’re huge concentrations of matter packed into very tiny spaces. 
                A black hole is so dense that gravity just beneath its surface, the event horizon, is strong enough that nothing – not even light – can escape. 
                The event horizon isn’t a surface like Earth’s or even the Sun’s. It’s a boundary that contains all the matter that makes up the black hole.
              </p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/06/PIA16695_large.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint" />
                <img src="https://science.anu.edu.au/sites/prod.science.sca-lws06.anu.edu.au/files/38331e82-a17e-38ad-b788-c7617d6ed185.jpg" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/BH_LMC.png/330px-BH_LMC.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
