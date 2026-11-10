import '../../assets/style/detail_panel.css';

export default function MRODetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Mars Reconnaissance Orbiter</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/bdHkgtLgcSY?si=asPhuxW11jEH6sPi" 
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
                The Mars Reconnaissance Orbiter (MRO) is a spacecraft designed to search for the existence of water on Mars and provide support for missions to Mars, 
                as part of NASA's Mars Exploration Program. It was launched from Cape Canaveral on August 12, 2005, at 11:43 UTC and reached Mars on March 10, 2006, 
                at 21:24 UTC. In November 2006, after six months of aerobraking, it entered its final science orbit and began its primary science phase
              </p>
              <h3>Mission Objective</h3>
              <p>
                MRO has both scientific and "mission support" objectives which were carried out during the mission's phases. 
                The Primary Science Phase lasted until November 2008, at which time NASA declared the mission a success. 
                The Extended Science Phase, lasting from 2008 to 2010, was initially planned to support the Phoenix lander and the Mars Science Laboratory, 
                but they were uncontactable and delayed respectively, freeing up the MRO to further study Mars. After 2010, the mission consisted of Extended Mission (EM) phases, 
                each lasting two years up to EM4, and three years from then on. As of 2024, the MRO is on its 6th extended mission.
              </p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://www.nasa.gov/wp-content/uploads/2025/06/1-pia04918-mro-artists-concept.jpg" />
                <img src="https://science.nasa.gov/wp-content/uploads/2017/12/mars-reconnaissance-orbiter-pia04916.jpg" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Mars_Reconnaissance_Orbiter.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
