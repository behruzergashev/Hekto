import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhoneAlt,
  faUser,
  faHeart,
  faShoppingCart,
  faSearch,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';
import Pages from './components/Pages';
import Products from './components/Products';
import Blog from './components/Blog';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Login from './components/Login';
import Shoping from './components/Shoping';
import './App.css';
import Wishis from './components/wishis'


const App = () => {
  const [cart, setCart] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <Router>
      <div>
        <nav className="pushtinavbar">
          <div className="pushtiora">
            <div className="pushtidiv2">
              <FontAwesomeIcon icon={faEnvelope} className="icon-style" />
              <p>mhhasanul@gmail.com</p>
            </div>
            <div className="pushtidiv">
              <FontAwesomeIcon icon={faPhoneAlt} className="icon-style" />
              <p>(12345)67890</p>
            </div>
          </div>
          <div className="pushtiora2">
            <div className="pushtidiv3">
              <p>English</p>
              <p>USD</p>
              <Link to="/login" className="Login">
                login
              </Link>
              <FontAwesomeIcon icon={faUser} className="icon-style-small" />
              <Link to="/Wishis" className="Wishis">
              Wishlist
              </Link>
     
        
                <FontAwesomeIcon icon={faHeart} className="icon-style-small" />
            
            </div>
            <Link to="/shoping" className="Shoping">
              <FontAwesomeIcon icon={faShoppingCart} className="icon-style" />
            </Link>
          </div>
        </nav>

        <nav className="main-navbar">
          <div className="main-navbar-container">
            <h1 className="logo">Hekto</h1>
            <ul className="main-navbar-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/blog">About</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
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

        <nav className={`blokcha ${isMenuOpen ? 'blokcha-active' : ''}`}>
          <div className="mainblok">
            <h1 className="logo1">Hekto</h1>
            <ul className="main-navbar-links2">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pages" onClick={toggleMenu}>
                  Pages
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/shop" onClick={toggleMenu}>
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop setCart={setCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Wishis />} />

            <Route path="/shoping" element={<Shoping cart={cart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
