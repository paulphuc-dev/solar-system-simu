import '../../assets/style/detail_panel.css';

export default function VoyagerDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Voyager 2</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/MGPM58S5Njg?si=ZAWikGNIFtGfSamW" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>

          <div className="earth-info">
            <div className="earth-text">
              <h3>Introduction</h3>
              <p>
                Voyager 2 is the only spacecraft to visit Uranus and Neptune. 
                The probe is now in interstellar space, the region outside the heliopause, or the bubble of energetic particles and magnetic fields from the Sun.
              </p>
              <h3>History</h3>
              <p>
                NASA's Voyager 2 is the second spacecraft to enter interstellar space. 
                On Dec. 10, 2018, the spacecraft joined its twin – Voyager 1 – as the only human-made objects to enter the space between the stars.
              </p>
              <ul>
                <li>Voyager 2 is the only spacecraft to study all four of the solar system's giant planets at close range.</li>
                <li>Voyager 2 discovered a 14th moon at Jupiter.</li>
                <li>Voyager 2 was the first human-made object to fly past Uranus.</li>
                <li>At Uranus, Voyager 2 discovered 10 new moons and two new rings.</li>
                <li>Voyager 2 was the first human-made object to fly by Neptune.</li>
                <li>At Neptune, Voyager 2 discovered five moons, four rings, and a "Great Dark Spot."</li>
              </ul>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://photo2.tinhte.vn/data/attachment-files/2025/03/8661956_nasa-tat-mot-so-thiet-bi-tau-voyager.jpg"></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Voyager_spacecraft.jpg/1200px-Voyager_spacecraft.jpg" />
                <img src="https://s3.cloud.cmctelecom.vn/tinhte2/2019/11/4824890_Voyager2_Uranus.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
