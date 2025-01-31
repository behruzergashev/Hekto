import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./ShopGrid.css";
import Toast from "./Toast";

const Wishis = ({ likedProducts, setCart, toggleLike }) => {
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [alertMessage1, setAlertMessage1] = useState("");
  const [alertMessage2, setAlertMessage2] = useState("");
  
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const addToCart = (product) => {
    // Add product to cart
    setCart((prevCart) => [...prevCart, product]);

    // Remove from wishlist after adding to cart
    toggleLike(product);

    setAlertMessage1("Vaaaauuuuv");
    setShowAlert1(true);
    setTimeout(() => setShowAlert1(false), 3000);

    setAlertMessage2(`${product.name} added to cart`);
    setShowAlert2(true);
    setTimeout(() => setShowAlert2(false), 3000);
  };

  const handleView = (product) => {
    console.log("Viewing product:", product);
  };

  const handleUnlike = (product) => {
    toggleLike(product);

    setAlertMessage1("Vaaaauuuuv");
    setShowAlert1(true);
    setTimeout(() => setShowAlert1(false), 3000);

    setAlertMessage2(`${product.name} removed from wishlist`);
    setShowAlert2(true);
    setTimeout(() => setShowAlert2(false), 3000);
  };

  return (
    <div className="wishis-page">
      <nav>
        <div className="navbarheader">
          <div className="headermain">
            <div className="mainleft">
              <h1>Wishlist</h1>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <h4>Wishlist</h4>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* <div className="wishlist-counter">
        <h3>Total Items in Wishlist: {likedProducts.length}</h3>
      </div> */}

      <div className="grid-container1">
        {likedProducts && likedProducts.length > 0 ? (
          likedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="rasmuchun">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="image" />
                <div className="middle">
                  <div className="text" onClick={() => addToCart(product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </div>
                  <div className="text2" onClick={() => handleView(product)}>
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                  <div className="text3 liked" onClick={() => handleUnlike(product)}>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <h3>{product.name}</h3>
              <div className="price">
                <span className="current-price">{product.price}</span>
                <span className="old-price">{product.oldPrice}</span>
              </div>
              <div className="displayflex">
                <div className="flex1"></div>
                <div className="flex2"></div>
                <div className="flex3"></div>
              </div>
            </div>
          ))
        ) : (
          
          <p>No liked products yet</p>
        )}
      </div>
    </div>
  );
};

export default Wishis;
