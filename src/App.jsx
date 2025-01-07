import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faUser, faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';
import Pages from './components/Pages';
import Products from './components/Products';
import Blog from './components/Blog';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Login from './components/Login';
import Shoping from './components/Shoping'

import './App.css';

const App = () => {
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
              <Link to="/login" className='Login'>login</Link>
              <FontAwesomeIcon icon={faUser} className="icon-style-small" />
              <p>
                Wishlist
                <FontAwesomeIcon icon={faHeart} className="icon-style-small" />
              </p>
            </div>
            <Link to="/Shoping" className='Shoping'>
            <FontAwesomeIcon icon={faShoppingCart} className="icon-style" /></Link>
       
          </div>
        </nav>
        <nav className="main-navbar">
          <div className="main-navbar-container">
            <h1 className="logo">Hekto</h1>
            <ul className="main-navbar-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pages">Pages</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button className='searchbtn'>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shoping" element={<Shoping />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
