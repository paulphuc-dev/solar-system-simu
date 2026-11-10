import '../../assets/style/detail_panel.css';

export default function ISSDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>International Space Station (ISS)</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/aB1yRz0HhdY?si=_aY5rO_wzPW4oR3I" 
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
                The International Space Station (ISS) is a large space station that was assembled and is maintained in low Earth orbit by a collaboration of five space agencies 
                and their contractors: NASA (United States), Roscosmos (Russia), ESA (Europe), JAXA (Japan), and CSA (Canada). 
                As the largest space station ever constructed, it primarily serves as a platform for conducting scientific experiments in microgravity and studying the space environment.
              </p>
              <h3>Structure & Assemble</h3>
              <p>
                The station is divided into two main sections: the Russian Orbital Segment (ROS), developed by Roscosmos, and the US Orbital Segment (USOS), built by NASA, ESA, JAXA, and CSA. 
                A striking feature of the ISS is the Integrated Truss Structure, which connect the station's vast system of solar panels and radiators to its pressurized modules. 
                These modules support diverse functions, including scientific research, crew habitation, storage, spacecraft control, and airlock operations. The ISS has eight docking and berthing ports for visiting spacecraft. 
                The station orbits the Earth at an average altitude of 400 kilometres (250 miles) and circles the Earth in roughly 93 minutes, completing 15.5 orbits per day.
              </p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://www.nasa.gov/wp-content/uploads/2025/12/2026-iss-calendar.jpg?w=1024" />
                <img src="https://www.nasa.gov/wp-content/uploads/2023/05/iss-blowout-updated-view-2023-300.png" />
                <img src="https://images-assets.nasa.gov/image/0302381/0302381~large.jpg?w=1536&h=1536&fit=crop&crop=faces%2Cfocalpoint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
