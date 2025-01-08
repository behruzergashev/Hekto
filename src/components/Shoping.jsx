import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer";
import "./Shoping.css"; 

const Shoping = ({ cart }) => {
  const totalPrice = cart.reduce((acc, product) => acc + parseFloat(product.price.replace('$', '')), 0); // Calculate total price

  return (
    <div className="shopping-page">
      <nav className="shopping-navbar">
        <div className="shopping-container">
          <h1>Your Shopping Cart</h1>
          <div className="shopping-cart-info">
            <p><FontAwesomeIcon icon={faShoppingCart} className="icon-style" /> {cart.length} items</p>
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </nav>

      <div className="shopping-items">
        {cart.length > 0 ? (
          <ul>
            {cart.map((product, index) => (
              <li key={index} className="shopping-item">
                <div className="item-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="item-details">
                  <h3>{product.name}</h3>
                  <p>Price: {product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty. <Link to="/shop">Start shopping</Link></p>
        )}
      </div>

      <div className="shopping-actions">
        {cart.length > 0 && (
          <button className="checkout-btn">Proceed to Checkout</button>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Shoping;
