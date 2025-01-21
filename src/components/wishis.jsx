import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const Wishis = ({ likedProducts, removeFromWishlist }) => {
  return (
    <div className="wishlist-container">
      <h1>Wishlist</h1>
      {likedProducts.length > 0 ? (
        <div className="wishlist-items">
          {likedProducts.map((product) => (
            <div key={product.id} className="wishlist-item">
              <img src={product.image || "/placeholder.svg"} alt={product.name} />
              <div className="wishlist-details">
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
                <button
                  className="remove-button"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  <FontAwesomeIcon icon={faTrash} /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-message">Your wishlist is empty!</p>
      )}
    </div>
  );
};

export default Wishis;
