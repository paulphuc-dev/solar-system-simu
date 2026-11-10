import '../../assets/style/detail_panel.css';

export default function ShuttleDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Shuttle</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zsJpUCWfyPE?si=jJPuMD9iXDl2Hri_"
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
                The Space Shuttle is a retired, partially reusable low Earth orbital spacecraft system operated from 1981 to 2011 by the U.S. 
                National Aeronautics and Space Administration (NASA) as part of the Space Shuttle program. 
                Its official program name was the Space Transportation System (STS), taken from the 1969 plan led by U.S.
              </p>
              <h3>Models</h3>
              <p>
                Enterprise (OV-101),
                Columbia (OV-102),
                Challenger (OV-099),
                Discovery (OV-103),
                Atlantis (OV-104),
                Endeavour (OV-105),
              </p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:51,cw:548,ch:548,q:80,w:548/ka5acHNs3trfycsfvB5aeY.jpg"></img>
                <img src="https://cdn.britannica.com/48/96048-050-4B8AC107/space-shuttle-Discovery-International-Space-Station-July-2006.jpg" />
                <img src="https://images-assets.nasa.gov/image/s31-s-131/s31-s-131~large.jpg?w=1920&h=1272&fit=clip&crop=faces%2Cfocalpoint" />
                <img src="https://images-assets.nasa.gov/image/51b-s-072/51b-s-072~large.jpg?w=1920&h=1920&fit=clip&crop=faces%2Cfocalpoint"></img>
                <img src="https://images-assets.nasa.gov/image/EC81-15104/EC81-15104~large.jpg?w=1920&h=1543&fit=clip&crop=faces%2Cfocalpoint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
