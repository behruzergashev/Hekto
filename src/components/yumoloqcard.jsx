import React, { useState } from 'react'
import '../components/Productcarusel.css'

function FeaturedProducts() {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = [
    productsData.featuredProducts.slice(0, 4),
    productsData.featuredProducts.slice(4, 8),
    productsData.featuredProducts.slice(8, 12)
  ]

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  return (
    <div className="container">
      <h2 className="title">Top Categories</h2>
      
      <div className="products-grid">
        {pages[currentPage].map((product, index) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <div className="image-wrapper">
                <img 
                  src={product.Image || "/placeholder.svg"} 
                  alt={product.name}
                  className="product-image"
                />
              </div>
              {index === 0 && (
                <button className="view-shop-button">
                  View Shop
                </button>
              )}
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`pagination-dot ${currentPage === index ? 'active' : ''}`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts

