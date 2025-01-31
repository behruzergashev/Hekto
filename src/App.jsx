import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faUser,
  faHeart,
  faShoppingCart,
  faSearch,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Home";
import Pages from "./components/Pages";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Shoping from "./components/Shoping";
import Wishis from "./components/Wishis";
import Barsgrid from "./components/shoop2";
import "./App.css";
import "./i18n";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [likedProducts, setLikedProducts] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLike = (product) => {
    setLikedProducts((prevLiked) => {
      const isAlreadyLiked = prevLiked.some((p) => p.id === product.id);
      if (isAlreadyLiked) {
        return prevLiked.filter((p) => p.id !== product.id);
      } else {
        return [...prevLiked, product];
      }
    });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div>
        <nav className="pushtinavbar">
          <div className="pushtiora">
            <div className="pushtidiv2">
              <FontAwesomeIcon icon={faEnvelope} className="icon-style" />
              <p>{t("email")}</p>
            </div>
            <div className="pushtidiv">
              <FontAwesomeIcon icon={faPhoneAlt} className="icon-style" />
              <a href="tel:942630429" className="phone-link">
                {t("phone")}
              </a>
            </div>
          </div>
          <div className="pushtiora2">
            <div className="pushtidiv3">
              <select onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="uz">O'zbek</option>
                <option value="ru">Русский</option>
              </select>
              <Link to="/login" className="Login">
                Login
              </Link>
              <FontAwesomeIcon icon={faUser} className="icon-style-small" />
            </div>

            <Link to="/wishis" className="Wishis">
              Wishlist
              <FontAwesomeIcon icon={faHeart} className="icon-style" />
              <span className="counter-badge">{likedProducts.length}</span>
            </Link>
            <Link to="/shoping" className="Shoping">
              <FontAwesomeIcon icon={faShoppingCart} className="icon-style" />
              <span className="counter-badge">{cart.length}</span>
            </Link>
          </div>
        </nav>

        <nav className="main-navbar">
          <div className="main-navbar-container">
            <h1 className="logo">Hekto</h1>
            <ul className="main-navbar-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pages">Pages</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/blog">About</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button className="searchbtn">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="bars" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="barsicon" />
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop setCart={setCart} toggleLike={toggleLike} likedProducts={likedProducts} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wishis" element={<Wishis likedProducts={likedProducts} setCart={setCart} toggleLike={toggleLike} />} />
            <Route path="/shoping" element={<Shoping cart={cart} setCart={setCart} />} />
            <Route path="/shop." element={<Barsgrid />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
