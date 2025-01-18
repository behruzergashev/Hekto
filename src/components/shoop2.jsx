import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import "./shoop2.css";
import Footer from "../Footer";
import Nom from "../assets/1.png";
import Nom1 from "../assets/2.png";
import Nom2 from "../assets/3.png";
import Nom3 from "../assets/4.png";
import Nom4 from "../assets/5.png";
import Nom5 from "../assets/6.png";
import Nom6 from "../assets/7.png";
import Nom7 from "../assets/8.png";
import Nom8 from "../assets/9.png";
import Nom9 from "../assets/11.png";
import Nom10 from "../assets/4.png";

const products = [
  { id: 1, name: "Vel elit euismod", price: "$26.00", oldPrice: "$42.00", image: Nom },
  { id: 2, name: "Ultricies condimentum imperdiet", price: "$26.00", oldPrice: "$42.00", image: Nom1 },
  { id: 3, name: "Vitae suspendisse sed", price: "$26.00", oldPrice: "$42.00", image: Nom2 },
  { id: 4, name: "Sed at fermentum", price: "$26.00", oldPrice: "$42.00", image: Nom3 },
  { id: 5, name: "Vel elit euismod", price: "$26.00", oldPrice: "$42.00", image: Nom4 },
  { id: 6, name: "Ultricies condimentum imperdiet", price: "$26.00", oldPrice: "$42.00", image: Nom5 },
  { id: 7, name: "Vitae suspendisse sed", price: "$26.00", oldPrice: "$42.00", image: Nom6 },
  { id: 8, name: "Sed at fermentum", price: "$26.00", oldPrice: "$42.00", image: Nom7 },
  { id: 9, name: "Vel elit euismod", price: "$26.00", oldPrice: "$42.00", image: Nom8 },
  { id: 10, name: "Ultricies condimentum imperdiet", price: "$26.00", oldPrice: "$42.00", image: Nom9 },
  { id: 11, name: "Vitae suspendisse sed", price: "$26.00", oldPrice: "$42.00", image: Nom10 },
];

const ProductCard = ({ product, addToCart, toggleLike, isLiked }) => (
  <div className="product-item">
    <div className="image-container">
      <img src={product.image || "/placeholder.svg"} alt={product.name} />
      <div className="hover-options">
        <div className="cart-icon" onClick={() => addToCart(product)}>
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        </div>
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="like-icon" onClick={() => toggleLike(product)}>
          <FontAwesomeIcon 
            icon={faHeart} 
            className={`icon-small ${isLiked ? 'liked' : ''}`} 
          />
        </div>
      </div>
    </div>
    <h3>{product.name}</h3>
    <div className="color-options">
      <div className="color-option yellow"></div>
      <div className="color-option red"></div>
      <div className="color-option blue"></div>
    </div>
    <p className="pricing">
      <span className="current">{product.price}</span>
      <span className="old">{product.oldPrice}</span>
    </p>
  </div>
);

const ShopGrid = ({ setCart }) => {
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [sortOption, setSortOption] = useState("bestMatch");
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    console.log("Liked products updated:", likedProducts);
    const event = new CustomEvent('likedProductsUpdated', { detail: likedProducts });
    window.dispatchEvent(event);
  }, [likedProducts]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); 
  };

  const toggleLike = (product) => {
    setLikedProducts(prevLiked => {
      const isAlreadyLiked = prevLiked.some(p => p.id === product.id);
      if (isAlreadyLiked) {
        return prevLiked.filter(p => p.id !== product.id);
      } else {
        return [...prevLiked, product];
      }
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchesId = searchId ? product.id.toString() === searchId : true;
    const matchesName = searchName ? product.name.toLowerCase().includes(searchName.toLowerCase()) : true;
    return matchesId && matchesName;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    const priceA = parseFloat(a.price.replace('$', ''));
    const priceB = parseFloat(b.price.replace('$', ''));

    if (sortOption === "priceLowToHigh") {
      return priceA - priceB;
    } else if (sortOption === "priceHighToLow") {
      return priceB - priceA;
    }

    return 0;
  });

  return (
    <div className="shop-container">
      <nav>
        <div className="header-section">
          <div className="header-content">
            <div className="content-left">
              <h1>Shop Grid Default</h1>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pages">Pages</Link></li>
                <h4>Shop Grid Default</h4>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="filter-bar">
        <div className="results-info">
          <h1>Ecommerce Accessories & Fashion item</h1>
          <p>About 9,620 results (0.62 seconds)</p>
        </div>
        <div className="filter-controls">
          <div>
            <label htmlFor="perPage">Per Page:</label>
            <input
              id="perPage"
              type="text"
              placeholder="Page"
              onChange={(e) => setSearchId(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="sortBy">Sort By:</label>
            <select 
              id="sortBy" 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="bestMatch">all</option>
              <option value="priceLowToHigh">expensive</option>
              <option value="priceHighToLow">cheat</option>
            </select>
          </div>
          <div>
            <label htmlFor="view">View:</label>
            <input
              id="view"
              type="text"
              placeholder="Name"
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="product-grid">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
              toggleLike={toggleLike}
              isLiked={likedProducts.some(p => p.id === product.id)}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ShopGrid;