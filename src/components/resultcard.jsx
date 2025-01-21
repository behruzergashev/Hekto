import React from "react"
import "./Resultcard.css"
import Releted from '../assets/Rustamimg.png'
import Releted1 from '../assets/Rustamxon.png'
import Releted2 from '../assets/Rustamoy.png'
import Releted3 from '../assets/Rustamjun.png'


const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Mens Fashion Wear",
      price: 25.0,
      rating: 5,
      image: Releted,
    },
    {
      id: 2,
      name: "Women's Fashion",
      price: 67.0,
      rating: 5,
      image: Releted1,
    },
    {
      id: 3,
      name: "Wola Dummy Fashion",
      price: 67.0,
      rating: 5,
      image: Releted2,    },
    {
      id: 4,
      name: "Top Wall Digital Clock",
      price: 51.0,
      rating: 5,
      image: Releted3,    },
  ]

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating)
  }

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image || "/placeholder.svg"} alt={product.name}  className="rasmrustam"/>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="price-rating">
                <span className="price">${product.price.toFixed(2)}</span>
                <span className="rating">{renderStars(product.rating)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts

