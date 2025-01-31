import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import "./ProductModal.css"

const ProductModal = ({ product, onClose }) => {
  if (!product) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.image || "/placeholder.svg"} alt={product.name} />
          </div>
          <div className="modal-details">
            <h2>{product.name}</h2>
            <p className="modal-price">
              <span className="current-price">{product.price}</span>
              <span className="old-price">{product.oldPrice}</span>
            </p>
            <p className="modal-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal

