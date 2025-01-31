import React, { useState } from "react";
import { useTranslation } from 'react-i18next'; // i18next importi
import Carsimg from './assets/caruselpng.png'
import "./Carusel.css";
import fanar from './assets/fonar.png';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation(); // t() funksiyasini chaqirish

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
            <div className="fanar"><img src={fanar} alt="" className="fanar" /></div>
            <div className="text-content">
              <p className="subtitle">{t('subtitle')}</p> {/* Tarjima qo'shildi */}
              <h1 className="title">{t('title')}</h1> {/* Tarjima qo'shildi */}
              <p className="description">{t('description')}</p> {/* Tarjima qo'shildi */}
              <button className="shop-now">{t('shopNow')}</button> {/* Tarjima qo'shildi */}
            </div>
            <div className="image-content">
              <img src={Carsimg} alt="" className="caruselimg" />
            </div>
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
  const { t, i18n } = useTranslation();
  const slides = [
    {
      subtitle: t("Best Furniture For Your Castle..."), // Tarjima qilish
      title: t("New Furniture Collection Trends in 2020"), // Tarjima qilish
      description: t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo."), // Tarjima qilish
    },
    {
      subtitle: t("Best Furniture For Your Castle..."), // Tarjima qilish
      title: t("Explore Modern Styles"), // Tarjima qilish
      description: t("Discover the latest trends in modern furniture designs."), // Tarjima qilish
    },
    {
      subtitle: t("Best Furniture For Your Castle..."), // Tarjima qilish
      title: t("Timeless Elegance"), 
      description: t("Experience timeless elegance with our exclusive furniture collection."), // Tarjima qilish
    },
  ];

  return (
    <div className="App">
      <Carousel slides={slides} />
    </div>
  );
};

export default App;
