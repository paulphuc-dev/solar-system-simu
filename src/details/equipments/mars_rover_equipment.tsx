import '../../assets/style/detail_panel.css';

export default function MarsRoverDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Mars Rover</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/5qqsMjy8Rx0?si=tFdOvXwhVbWc34ex" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>
                A Mars rover is a remote-controlled motor vehicle designed to travel on the surface of Mars. 
                Rovers have several advantages over stationary landers: they examine more territory, they can be directed to interesting features, 
                they can place themselves in sunny positions to weather winter months, and they can advance the knowledge of how to perform very remote robotic vehicle control. 
                They serve a different purpose than orbital spacecraft like Mars Reconnaissance Orbiter.
              </p>
              <h3>Structure</h3>
              <p>
                Each robotic explorer sent to the Red Planet has its own unique capabilities driven by science. Many attributes of a rover take on human-like features, such as “heads,” “bodies,” and “arms and legs.”
              </p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NASA_Mars_Rover.jpg/1200px-NASA_Mars_Rover.jpg" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/rover2-1.jpg" />
                <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/resources/detail_files/2/4/24759_PIA23491-web.jpg?w=1600&h=900&fit=clip&crop=faces%2Cfocalpoint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
