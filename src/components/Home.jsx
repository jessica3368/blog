import React from 'react';
// day1
import d11 from '../assets/day1/1.jpg';
import d12 from '../assets/day1/2.jpg';
import d13 from '../assets/day1/3.jpg';
import d14 from '../assets/day1/4.jpg';
import d15 from '../assets/day1/6.jpg';
// day2
import d21 from '../assets/day2/4.jpg';
import d22 from '../assets/day2/1.jpg';
import d23 from '../assets/day2/2.jpg';
import d24 from '../assets/day2/3.jpg';
import d25 from '../assets/day2/5.jpg';
import d26 from '../assets/day2/6.jpg';
// day3
import d31 from '../assets/day3/1.jpg';
import d32 from '../assets/day3/2.jpg';
import d33 from '../assets/day3/3.jpg';
import d34 from '../assets/day3/5.jpg';
import d35 from '../assets/day3/6.jpg';
// day4
import d41 from '../assets/day4/6.jpg';
import d42 from '../assets/day4/1.jpg';
import d43 from '../assets/day4/2.jpg';
import d44 from '../assets/day4/3.jpg';
import d45 from '../assets/day4/5.jpg';
// day5
import d51 from '../assets/day5/1.jpg';
import d52 from '../assets/day5/2.jpg';
import d53 from '../assets/day5/3.jpg';
import d54 from '../assets/day5/4.jpg';
import d55 from '../assets/day5/5.jpg';
// day6
import d61 from '../assets/day6/1.jpg';
import d62 from '../assets/day6/2.jpg';
import d63 from '../assets/day6/3.jpg';
import d64 from '../assets/day6/4.jpg';
import d65 from '../assets/day6/5.jpg';
// day7
import d71 from '../assets/day7/4.jpg';
import d72 from '../assets/day7/1.jpg';
import d73 from '../assets/day7/3.jpg';
import d74 from '../assets/day7/5.jpg';
import d75 from '../assets/day7/6.jpg';

export function Home() {
  return (
    <section id="home">
      <section id="blog-posts">
        <article className="post">
          <img src={d11} alt="Typography" className="post-img" />
          <div className="post-content">
            <h2>Kickoff & Departure: The Journey Begins</h2>
            <p className="post-meta">April 7, 2025</p>
            <p className="post-excerpt">
              Rizal Park, commonly referred to as Luneta Park, is a large urban green space located in Manila. It's well-maintained...
            </p>
            <a href="#post-1" className="read-more">Read More</a>
          </div>
        </article>

        <article className="post">
          <img src={d21} alt="React Todo List" className="post-img" />
          <div className="post-content">
            <h2>First Stops, First Impressions</h2>
            <p className="post-meta">April 8, 2025</p>
            <p className="post-excerpt">
              The Subic Bay Metropolitan Authority (SBMA) has implemented an advanced monitoring system that delivers real-time image feeds...
            </p>
            <a href="#post-2" className="read-more">Read More</a>
          </div>
        </article>

        <article className="post">
          <img src={d31} alt="GymPerks Logo" className="post-img" />
          <div className="post-content">
            <h2>Culture, History, and Heritage</h2>
            <p className="post-meta">April 9, 2025</p>
            <p className="post-excerpt">
              This grand exhibition center showcases a wide array of cultural, artistic, and historical works from across the country...
            </p>
            <a href="#post-3" className="read-more">Read More</a>
          </div>
        </article>

        <article className="post">
          <img src={d41} alt="Web Design Tips" className="post-img" />
          <div className="post-content">
            <h2>Learning on the Move</h2>
            <p className="post-meta">April 10, 2025</p>
            <p className="post-excerpt">
              On our fourth day, we had the opportunity to visit the Bangko Sentral ng Pilipinas—an experience that left a lasting impression on me...
            </p>
            <a href="#post-4" className="read-more">Read More</a>
          </div>
        </article>

        <article className="post">
          <img src={d51} alt="JavaScript Basics" className="post-img" />
          <div className="post-content">
            <h2>Behind the Scenes: System & Security</h2>
            <p className="post-meta">April 11, 2025</p>
            <p className="post-excerpt">
              This photo captures the impressive network of MMDA CCTV cameras monitoring key areas across the city...
            </p>
            <a href="#post-5" className="read-more">Read More</a>
          </div>
        </article>

        <article className="post">
          <img src={d61} alt="UI/UX Trends" className="post-img" />
          <div className="post-content">
            <h2>Technology, Transit & Teamwork</h2>
            <p className="post-meta">April 12, 2025</p>
            <p className="post-excerpt">
              The Bell Church in Baguio is a peaceful sanctuary that blends Chinese culture, spiritual tradition, and natural beauty...
            </p>
            <a href="#post-6" className="read-more">Read More</a>
          </div>
        </article>

        <article className="post">
          <img src={d71} alt="CSS Techniques" className="post-img" />
          <div className="post-content">
            <h2>Gratitude & Goodbyes</h2>
            <p className="post-meta">April 13, 2025</p>
            <p className="post-excerpt">
              Baguio has a charm that stays with you long after you leave. From its cool mountain breeze and scenic views...
            </p>
            <a href="#post-7" className="read-more">Read More</a>
          </div>
        </article>
      </section>

      {/* Full Post Modals */}
      <section id="post-1" className="full-post">
        <div className="full-post-content">
          <a href="#home" className="close-btn">×</a>
          <h2>Kickoff & Departure: The Journey Begins</h2>
          <p className="post-meta">April 7, 2025</p>
          <img src={d11} alt="Typography" className="main-img" />
          <p>
            Rizal Park, commonly referred to as Luneta Park, is a large urban green space located in Manila. It's well-maintained and visually appealing, attracting many visitors who come to walk or exercise. The ideal times to visit are early in the morning or late in the afternoon to avoid the intense heat and enjoy the refreshing breeze. It's also a popular spot for families and tourists to relax and take in the historic surroundings.
          </p>
          <div className="gallery">
            <img src={d12} />
            <img src={d13} />
          </div>
            <p>
            Fort Santiago is a significant historical site in the Philippines and among the oldest fortresses in Manila. Visitors can enter the fort for a small fee, payable in cash at the entrance, or conveniently book tickets in advance through Klook to skip the lines.
            </p>
            <p>
            The Palacio del Gobernador, once the residence of the Spanish Governor-General, now houses various government offices such as the Intramuros Administration and the Commission on Elections. Located in the historic Intramuros district, it is surrounded by notable landmarks like Fort Santiago, Casa Manila, La Monja Loca, and San Agustin Church. Just steps away from the Manila Cathedral, the area offers visitors a rich cultural experience and great photo opportunities.
            </p>
            <div className="gallery">
              <img src={d14} />
              <img src={d15} />
            </div>
            <p>
              A group walks through the charming cobblestone streets of Intramuros, Manila, on their way to Fort Santiago. Surrounded by colonial-era buildings and historic landmarks, the tour offers a meaningful glimpse into the city’s rich past. It was a memorable journey that combined cultural exploration with historical learning.
            </p>
            <p>
            Mall of Asia is our last destination before the Educational Tour Day 1 ends. And the best part was we lost in the middle of nowhere Hahahah, I was accompanied by friend Padwa, the thing is we can’t find the exit where the tour guide instructs us to meet.
            </p>
        </div>
      </section>

      <section id="post-2" className="full-post">
        <div className="full-post-content">
          <a href="#home" className="close-btn">×</a>
          <h2>First Stops, First Impressions</h2>
          <p className="post-meta">April 8, 2025</p>
          <img src={d21} alt="Subic Bay" className="main-img" />
          <p>
            The Subic Bay Metropolitan Authority (SBMA) has implemented an advanced monitoring system that delivers real-time image feeds from remote surveillance locations throughout the Subic Freeport to enhance security measures and ensure public safety in the area.
          </p>
          <p>
          According to the Officer, they were able to solve crimes through surveillance using their high-tech CCTV cameras. All of these cameras are monitored 24/7, allowing police officers to closely watch areas for any illegal activity and respond more quickly to apprehend suspects.
          </p>
          <div className="gallery">
            <img src={d22}/>
            <img src={d23}/>
          </div>
          <p>
            This photo was taken during Day 2 of our educational tour in Subic Bay, capturing the scenic beauty of the coastline and the surrounding mountains. The round building in the foreground is part of the port area, with clear skies and calm waters adding to the peaceful atmosphere. Subic’s mix of modern structures and natural landscapes made this stop both educational and visually stunning.
          </p>
          <p>
          In The Grand Hall Lobby of the Subic Bay Exhibition & Convention Center (SBECC), many of the masterpieces of the artist were display there and each of the painting has meaning. One of the paintings caught my attention it is the Panel V: Vision of the Future 1998-Present, it shows how Subic Bay is thriving as a sports tourism and showcases their resiliency of the Aeta’s.
          </p>
          <div className="gallery">
            <img src={d24}/>
            <img src={d21}/>
          </div>
          <p>
          Located in the center of the Subic Bay Freeport Zone, the Subic Bay Exhibition and Convention Center (SBECC) ranks among the largest event spaces in the Philippines. With its contemporary architecture and spacious interiors, it’s a top choice for expos, conferences, and large-scale events. A fun fact: SBECC served as a major venue during the 30th SEA Games, hosting various international competitions.
          </p>
          <p>
          This towering satellite structure in Subic Bay plays a crucial role in managing communication signals for the port area. It ensures smooth coordination and real-time monitoring of maritime activities. Captured under the bright midday sun, the structure stands tall as a symbol of technological advancement supporting port operations.
          </p>
          <div className="gallery">
            <img src={d25}/>
            <img src={d26}/>
          </div>
        </div>
      </section>

      <section id="post-3" className="full-post">
        <div className="full-post-content">
          <a href="#home" className="close-btn">×</a>
          <h2>Culture, History, and Heritage</h2>
          <p className="post-meta">April 9, 2025</p>
          <img src={d31} alt="Exhibition Center" className="main-img" />
          <p>
            This grand exhibition center showcases a wide array of cultural, artistic, and historical works from across the country. It serves as a venue for celebrating national heritage and promoting Filipino creativity. From traditional art to modern exhibits, it offers tourists a rich and diverse cultural experience.
          </p>
          <div className="gallery">
            <img src={d32}/>
            <img src={d33}/>
          </div>
          <p>
          At the foot of the Quezon Memorial Shrine lies the Museo ni Manuel L. Quezon, a museum that tells the story of the former president’s life and legacy. Inside, visitors can explore a collection of personal artifacts, historical relics, and memorabilia that offer a glimpse into Quezon’s contributions to the nation. Beneath the museum rests a solemn mausoleum, where the remains of Manuel Quezon and his wife, Aurora Aragon Quezon, are peacefully laid to rest.
          </p>
          <p>
          At the heart of the shrine lies a circular chamber, where President Quezon’s sarcophagus rests on a raised marble plinth, quietly commanding the space. After his death from tuberculosis in the United States in 1944 during World War II, it wasn’t until July 27, 1946, that his remains were finally brought home to the Philippines and temporarily laid to rest at the North Cemetery in Manila. It was only decades later, on August 19, 1978—marking the centennial of his birth—that his remains found their final home beneath the monument built in his honor.
          </p>
          <div className="gallery">
            <img src={d34}/>
            <img src={d35}/>
          </div>
          <p>
          On display is a 1943 Willy’s Jeep, a historic vehicle donated by General Douglas MacArthur himself. This rugged jeep served as the official service vehicle of Ramón Magsaysay during his time as Secretary of National Defense under President Elpidio Quirino, from 1950 to 1953. Much like its military version, it came equipped with practical features—a sturdy shovel, an extra gas tank, and a collapsible radio antenna—ready for the demands of the post-war era. I was amazed at how well they’ve maintained and preserved it after all these years; it felt like stepping into a piece of living history.
          </p>
          <p>
          Lolong, the world’s largest crocodile in captivity, was captured in Agusan del Sur in 2011, measuring over 20 feet long and weighing more than a ton. He became a symbol of both awe and awareness, drawing visitors from around the world to the Bunawan Eco-Park. Though he passed away in 2013, Lolong’s legacy lives on as a reminder of the delicate balance between humans and wildlife.
          </p>
        </div>
      </section>

      <section id="post-4" className="full-post">
        <div className="full-post-content">
          <a href="#home" className="close-btn">×</a>
          <h2>Learning on the Move</h2>
          <p className="post-meta">April 10, 2025</p>
          <img src={d41} alt="Bangko Sentral" className="main-img" />
          <p>
          This photo captures more than just a moment—it reflects the incredible experience we had at Hytec Power Inc. Being there gave us a deeper understanding of how innovation, education, and industry come together to shape the future. I’m truly grateful for the opportunity to explore their advanced facilities, learn from passionate professionals, and see firsthand how theory turns into practice. A big thank you to Hytec for the warm welcome and for inspiring us to keep growing, learning, and aiming higher in our own careers.
          </p>
          <div className="gallery">
            <img src={d42} />
            <img src={d43} />
          </div>
          <p>
          On our fourth day, we had the opportunity to visit the Bangko Sentral ng Pilipinas—an experience that left a lasting impression on me. Due to strict security measures, we weren’t allowed to take photos inside, but every detail remains fresh in my memory. It was fascinating to witness the meticulous process of how our currency is created, from the raw materials to the final printing of banknotes. Seeing firsthand the level of precision and security involved in producing money gave me a new appreciation for something we often take for granted.
          </p>
          <p>
          Founded in 1994 by Engr. Eric Jude S. Soliman, Hytec Power Inc. has steadily become a key player in providing advanced industrial and educational solutions in the Philippines. The company focuses on closing the gap between classroom learning and real-world industry needs by offering modern training systems and technologies. With its strong dedication to innovation and partnerships, Hytec Power continues to help prepare a skilled and future-ready Filipino workforce. Seeing how they integrate education with real industry tools made me realize how important it is to align what we learn in school with what’s actually needed in the workplace.
          </p>
          <div className="gallery">
            <img src={d44} />
            <img src={d45} />
          </div>
          <p>
          This photo of the Hytec staff reminds me of how thoughtful and welcoming they were during our visit. They took the time to explain how the machines work, making complex ideas easier to understand. We’re truly grateful for their patience and generosity in sharing their knowledge—it made the experience both meaningful and inspiring.and aiming higher in our own careers.
          </p>
        </div>
      </section>

      <section id="post-5" className="full-post">
        <div className="full-post-content">
          <a href="#home" className="close-btn">×</a>
          <h2>Behind the Scenes: System & Security</h2>
          <p className="post-meta">April 11, 2025</p>
          <img src={d51} alt="MMDA CCTV" className="main-img" />
          <p>
          This photo captures the impressive network of MMDA CCTV cameras monitoring key areas across the city, keeping an eye on traffic, accidents, and any other activities on the road. These cameras play a crucial role in ensuring safety and order, providing real-time data to help authorities respond quickly to incidents. It’s fascinating to think how technology, like this system, has become a key part of modern urban management, making our streets safer and more efficient for everyone.
          </p>
          <div className="gallery">
            <img src={d52} />
            <img src={d53} />
          </div>
          <p>
          The MMDA staff took the time to explain the vital role the agency plays in keeping the country’s urban areas running smoothly. From managing traffic to responding to accidents, their work ensures that everything from road safety to public order is maintained. It was eye-opening to hear firsthand how their efforts impact daily life, and I gained a deeper appreciation for the hard work they put in behind the scenes to improve the flow of our cities and the well-being of its residents.
          </p>
          <p>
          Riding the LRT for the first time was an experience that left a lasting impression on all of us. The smooth ride, the bustling stations, and the views of the city from above made it feel like we were stepping into a new part of the city we’d never fully appreciated before. It was exciting to see how the LRT connects various neighborhoods, offering a fast and efficient way to travel, especially in a city with such heavy traffic. It was not only a practical mode of transport but also a glimpse into the pulse of daily life in the city, and it made me realize how important public transit is in keeping things moving.
          </p>
          <div className="gallery">
            <img src={d54} />
            <img src={d55} />
          </div>
          <p>
          One of the LRT staff kindly took the time to explain how the train wagons are built and the purpose they serve in daily transport. The wagon shown in the photo is just one example—designed to carry heavy loads and passengers efficiently from one place to another across the city. Listening to the details behind its construction and function gave me a deeper appreciation for the engineering and planning that go into something we often see but rarely think about. It reminded me that even the most ordinary parts of our daily commute are the result of careful design and dedicated work.
          </p>
          <p>
          Here, they shared with us how the LRT’s monitoring system works—an essential part of keeping the entire operation running safely and efficiently. Through real-time tracking, they monitor each train’s location, speed, and status, allowing them to quickly respond to any issues or delays. It was impressive to see the level of coordination and technology involved, and it gave me a deeper appreciation for the behind-the-scenes work that keeps the LRT reliable for thousands of daily commuters.
          </p>
        </div>
      </section>

      <section id="post-6" className="full-post">
        <div className="full-post-content">
          <a href="#home" className="close-btn">×</a>
          <h2>Technology, Transit & Teamwork</h2>
          <p className="post-meta">April 12, 2025</p>
          <img src={d61} alt="Bell Church" className="main-img" />
          <p>
          The Bell Church in Baguio is a peaceful sanctuary that blends Chinese culture, spiritual tradition, and natural beauty in one calming space. Surrounded by lush gardens and guarded by dragon statues, its ornate architecture and tranquil atmosphere invite quiet reflection. We learned about the teachings behind its design and the symbols carved into its structures, each one holding deep cultural meaning. Standing there, I felt a calm sense of reverence—and a greater appreciation for how different cultures and beliefs can coexist in harmony within the city.
          </p>
          <div className="gallery">
            <img src={d62} />
            <img src={d63} />
          </div>
          <p>
          Exploring the Philippine Military Academy (PMA) in Baguio was an eye-opening experience that revealed the intense discipline and training behind the country’s future defenders. As we walked through the academy’s historic grounds, I was impressed by how it balances long-standing traditions with modern developments, showing its drive for excellence. Watching the cadets in their daily routines and feeling the solemn atmosphere gave me a deep admiration for their commitment and the sacrifices they’re willing to make. The visit made me appreciate even more the core values of bravery, honor, and loyalty that define the PMA.
          </p>
          <div className="gallery">
            <img src={d64} />
            <img src={d65} />
          </div>
        </div>
      </section>

      <section id="post-7" className="full-post">
        <div className="full-post-content">
          <a href="#home" className="close-btn">×</a>
          <h2>Gratitude & Goodbyes</h2>
          <p className="post-meta">April 13, 2025</p>
          <img src={d71} alt="Baguio Charm" className="main-img" />
          <p>
          Baguio has a charm that stays with you long after you leave. From its cool mountain breeze and scenic views to the warmth of its people, every corner of the city feels welcoming and full of character. I’ll never forget the simple joy of walking through Burnham Park early in the morning, the smell of pine trees in the air, and the peaceful rhythm of the city waking up. Whether you're exploring markets, enjoying local food, or just soaking in the view, Baguio offers a calm and cozy escape—a place that truly feels like home, even just for a while.
          </p>
          <div className="gallery">
            <img src={d72} />
            <img src={d73} />
          </div>
          <div className="gallery">
            <img src={d74} />
            <img src={d75} />
          </div>
        </div>
      </section>
    </section>
  );
}