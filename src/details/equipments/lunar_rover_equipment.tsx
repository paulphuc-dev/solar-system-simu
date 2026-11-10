import '../../assets/style/detail_panel.css';

export default function LunarRoverDetailPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="earth-overlay" style={{ zIndex: 1000 }}>
      <div className="earth-panel">
        <div className="earth-header">
          <h2>Lunar Rover</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="earth-body">
          <div className="earth-canvas-card">
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/zTHJ9zb8J2s?si=WUuh_zvHMe_bWkhf" 
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
                A lunar rover or Moon rover is a space exploration vehicle designed to move across the surface of the Moon. 
                The Apollo program's Lunar Roving Vehicle was driven on the Moon by members of three American crews, Apollo 15, 16, and 17. 
                Other rovers have been partially or fully autonomous robots, such as the Soviet Union's Lunokhods, Chinese Yutus, Indian Pragyan, and Japan's LEVs. 
                Five countries have had operating rovers on the Moon: the Soviet Union, the United States, China, India, and Japan.
              </p>
              <h3>Size and Speed</h3>
              <p>Lunokhod rovers were 170 centimetres (67 in) in length. The LRVs were 10 ft (3.0 m) long with a 7.5 ft (2.3 m) wheelbase, and achieved a top speed of 11.2 miles per hour (18.0 km/h) during Apollo 17</p>
              <h3>Power</h3>
              <p>The Lunokhod rovers, and others, used photovoltaic solar power. The LRV rovers were battery powered. Lunokhod and the Chinese Yutu rovers were furthermore equipped with a radioisotope heater unit to keep instruments warm. 
                These, however, delivered only heat, not electric power. While unlike on other celestial bodies, such as Earth or Mars, there is no atmosphere to interfere with solar power, the extreme length of the day/night cycle complicates 
                the use of solar power as energy storage or hibernation are necessary for any missions exceeding two weeks in length. There are places where solar power is almost always available (especially near the lunar south pole) on the Moon, 
                but to date no mission has successfully landed a rover at one of those places. Radioisotope thermoelectric generators can operate independent of the day/night cycle and have been used on missions to other celestial bodies in the past</p>
              <h3>Thermal control</h3>
              <p>To remain warm during periods of lunar night the Lunokhod rovers used heat from radioactive polonium-210</p>
            </div>
            <div className="earth-carousel">
              <div className="carousel-track">
                <img src="https://www.nasa.gov/wp-content/uploads/2023/03/as15-88-11901orig.jpg?w=1041" />
                <img src="https://www.nasa.gov/wp-content/uploads/2023/03/apollo15lunarrover2.jpeg" />
                <img src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:240,cw:1440,ch:1080,q:80,w:1440/k4sJryNRvvTCt3PotvNUFC.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
