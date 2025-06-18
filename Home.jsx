import { useEffect, useState } from 'react';
import './home.css';
import Jersey from "./jersey image.jpg"
import NewArrivals from "./New Arrivals.png"
import Online from "./Online shopping logo.jpg"
import ball from "./ball image.jpg"

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    NewArrivals,
    Jersey,
    "https://c4.wallpaperflare.com/wallpaper/306/63/720/nike-shoes-sneakers-blue-wallpaper-preview.jpg",
    ball
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="top">
        <div className='Logo'>
          <img src={Online} width="50" height="50" alt="logo" />
          <h2>𝓞𝓕𝓕𝓢𝓘𝓓𝓔 𝓓𝓔𝓐𝓛𝓢</h2>
        </div>
        <div className="search-bar">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3OkEP3lTuFSSRzACTAZIV_UxId5pxZZBGQ&s" width="30" height="30" alt="search-logo" />
          <input type="text" placeholder="Search....." />
        </div>
        <div className="button-link">
          <div className='login'><a href='#'>Login</a></div>
          <div className='cart'><a href='#'>Cart</a></div>
        </div>
      </div>

      <div className="slideshow">
        {images.map((src, index) => (
          <div
            key={index}
            className="Slides fade"
            style={{ opacity: index === slideIndex ? 1 : 0 }}
          >
            <img src={src} alt={`pic${index + 1}`} />
          </div>
        ))}
      </div>

      
      <div className="things">
        <div className='footweart'>
          <img src='https://5.imimg.com/data5/SELLER/Default/2024/2/391075156/GS/YS/JM/115368345/football-shoes-for-players.jpg ' width="150" height="150"/>
          <br></br>
          <a href='#'>Footwear</a>
          <p>20% off</p>
        </div>
        <div className='apparelt'>
          <img src='https://5.imimg.com/data5/SA/TL/MY-1756364/football-clothes.jpg' width="150" height="150"/>
          <br></br>
          <a href='#'>Apparel</a>
          <p>50% off</p>
        </div>
        <div className='geart'>
          <img src='https://www.shocpro.com/wp-content/uploads/2017/01/A-List-of-American-Football-Protective-Gear-and-Equipment-1024x687.jpeg' width="150" height="150"/>
          <br></br>
          <a href='#'>Football Gear</a>
          <p>30% off</p>
        </div>
        <div className='accessoriest'>
          <img src='https://www.thesoccerstore.co.uk/wp-content/uploads/Football-Equipment-1024x680.jpg' width="150" height="150"/>
          <br></br>
          <a href='#'>Accessories</a>
          <p>40% off</p>
        </div>
        <div className='collect'>
          <img src='https://www.shutterstock.com/image-photo/football-trophy-collection-260nw-1271086963.jpg' width="150" height="150"/>
          <br></br>
          <a href='#'>Seasonal Collections</a>
          <p>70% off</p>
        </div>
        <div className='custom'>
          <img src='https://vivagifts.in/wp-content/uploads/2021/10/Personalized-Football-With-Name-1.jpeg' width="150" height="150"/>
          <br></br>
          <a href='#'>Customisation</a>
          <p>20% off</p>
        </div>
      </div>


      <div className="bottom">
        <footer className="down">
          &copy;offdeals.ac.in
          <div className="logos">
            <a href="https://www.instagram.com">
              <img className="insta" src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png" width="30px" height="20px" alt="insta-log" />
            </a>
            <a href="https://www.facebook.com">
              <img className="face" src="https://freelogopng.com/images/all_img/1657548367Facebook-logo.png" width="30px" height="25px" alt="facebook-logo" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
