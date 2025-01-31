import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";
import "./Shoping.css";

const Shopping = ({ cart: initialCart, setCart: setGlobalCart }) => {
  const [cart, setCart] = useState(initialCart); // Local cart state
  const [quantities, setQuantities] = useState(initialCart.map(() => 1)); // Product quantities
  const [shippingInfo, setShippingInfo] = useState({
    destination: "",
    postalCode: "",
    region: "",
  });

  useEffect(() => {
    // Save to localStorage and update global cart
    localStorage.setItem("cart", JSON.stringify(cart));
    if (typeof setGlobalCart === "function") {
      setGlobalCart(cart);
    }
  }, [cart, setGlobalCart]);

  const calculateSubtotal = () => {
    return cart.reduce(
      (acc, product, index) =>
        acc + Number.parseFloat(product.price.replace("$", "")) * quantities[index],
      0
    );
  };

  const calculateShipping = () => {
    return shippingInfo.destination ? 10.0 : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleQuantityChange = (index, delta) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(newQuantities[index] + delta, 1); // Ensure min value is 1
    setQuantities(newQuantities);
  };

  const handleDelete = (indexToRemove) => {
    const newCart = cart.filter((_, index) => index !== indexToRemove); // Remove product from cart
    const newQuantities = quantities.filter((_, index) => index !== indexToRemove); // Remove quantity info
    setCart(newCart);
    setQuantities(newQuantities);

    if (typeof setGlobalCart === "function") {
      setGlobalCart(newCart); // Update global cart
    }
  };

  const handleClearCart = () => {
    setCart([]); // Clear local cart
    setQuantities([]);
    if (typeof setGlobalCart === "function") {
      setGlobalCart([]); // Clear global cart
    }
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout");
  };

  return (
    <div className="shopping-page">
      <div className="shopping-container">
        <div className="shopping-header">
          <h1>Shopping Cart</h1>
          <p className="cart-count">
            <FontAwesomeIcon icon={faShoppingCart} /> {cart.length} items
          </p>
        </div>

        <div className="shopping-content">
          <div className="cart-items">
            {cart.length > 0 ? (
              <>
                <div className="cart-headers">
                  <span className="header-product">Product</span>
                  <span className="header-price">Price</span>
                  <span className="header-quantity">Quantity</span>
                  <span className="header-total">Total</span>
                </div>
                <ul className="cart-list">
                  {cart.map((product, index) => (
                    <li key={index} className="cart-item">
                      <div className="item-product">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                        />
                        <div className="item-info">
                          <h3>{product.name}</h3>
                          <p className="item-description">{product.description}</p>
                        </div>
                      </div>
                      <div className="item-price">{product.price}</div>
                      <div className="quantity-controls">
                        <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                        <span>{quantities[index]}</span>
                        <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                      </div>
                      <div className="item-total">
                        $
                        {(
                          Number.parseFloat(product.price.replace("$", "")) *
                          quantities[index]
                        ).toFixed(2)}
                      </div>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(index)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="cart-actions">
                  <button className="clear-cart" onClick={handleClearCart}>
                    Clear Cart
                  </button>
                </div>
              </>
            ) : (
              <div className="empty-cart">
                <p>Your cart is empty.</p>
                <Link to="/shop" className="continue-shopping">
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>

          <div className="cart-totals">
            <h2>Cart Totals</h2>
            <div className="totals-content">
              <div className="subtotal-row">
                <span>Subtotal:</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>

              <div className="shipping-calculator">
                <h3>Calculate Shipping</h3>
                <div className="shipping-form">
                  <input
                    type="text"
                    placeholder="Destination"
                    value={shippingInfo.destination}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        destination: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    value={shippingInfo.postalCode}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        postalCode: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="total-row">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>

              <button className="proceed-checkout" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shopping;
