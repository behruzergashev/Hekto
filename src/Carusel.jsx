import React, { useState } from "react";
import Carsimg from './assets/caruselpng.png'
import "./Carusel.css";
import fanar from './assets/fonar.png'




const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <div className="fanar"><img src={fanar} alt="" className="fanar"/></div>
            <div className="text-content">
              <p className="subtitle">{slide.subtitle}</p>
              <h1 className="title">{slide.title}</h1>
              <p className="description">{slide.description}</p>
              <button className="shop-now">Shop Now</button>
            </div>
            <div
              className="image-content"
               
            ><img src={Carsimg} alt="" className="caruselimg" /></div>
          </div>
        ))}
      </div>
    
    
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

    </div>
  );
};

const App = () => {
  const slides = [
    {

      subtitle: "Best Furniture For Your Castle....",
      title: "New Furniture Collection Trends in 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    },
    {
      image:
        "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-4.0.3",
      subtitle: "Best Furniture For Your Castle....",
      title: "Explore Modern Styles",
      description: "Discover the latest trends in modern furniture designs.",
    },
    {
      image:
        "sofa promotional header(1)(1).png",
      subtitle: "Best Furniture For Your Castle....",
      title: "Timeless Elegance",
      description: "Experience timeless elegance with our exclusive furniture collection.",
    },
  ];

  return (
    <div className="App">
      <Carousel slides={slides} />
    </div>
  );
};

export default App;