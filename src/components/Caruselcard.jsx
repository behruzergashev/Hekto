import React, { useState } from 'react'
import stolcard from '../assets/stolcard.png'
import stolcard1 from '../assets/stolcard2.png'
import stolcard3 from '../assets/stolcard3.png'
import stolcard4 from '../assets/stolcard4.png'
import'./style.css'
const productsData = {
  "featuredProducts": [
    { "id": 1,
        Image:stolcard, "name": "Cantilever chair", "code": "Y523201", "price": "42.00" },
    { "id": 2, Image:stolcard1, "name": "Cantilever chair", "code": "Y523202", "price": "52.00" },
    { "id": 3, Image:stolcard3, "name": "Cantilever chair", "code": "Y523203", "price": "47.00" },
    { "id": 4, Image:stolcard4, "name": "Cantilever chair", "code": "Y523204", "price": "50.00" },
    { "id": 5, Image:stolcard4, "name": "Cantilever chair", "code": "Y523205", "price": "55.00" },
    { "id": 6, Image:stolcard3,"name": "Cantilever chair", "code": "Y523206", "price": "45.00" },
    { "id": 7,Image:stolcard1, "name": "Cantilever chair", "code": "Y523207", "price": "48.00" },
    { "id": 8,   Image:stolcard, "name": "Cantilever chair", "code": "Y523208", "price": "53.00" },
    { "id": 9,Image:stolcard3, "name": "Cantilever chair", "code": "Y523209", "price": "49.00" },
    { "id": 10,Image:stolcard4, "name": "Cantilever chair", "code": "Y523210", "price": "51.00" },
    { "id": 11,  Image:stolcard,"name": "Cantilever chair", "code": "Y523211", "price": "46.00" },
    { "id": 12,Image:stolcard1, "name": "Cantilever chair", "code": "Y523212", "price": "54.00" }
  ]
}

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
<div className="container11">
  <h2 className="section-title11">Featured Products</h2>

<div className="pro-main">
<div className="product-list11">
    <div className="product-grid11">
      {pages[currentPage].map((product) => (
        <div className="product-card11" key={product.id}>
          <div className="product-image11-wrapper">
            <img 
              src={product.Image} 
              alt={product.name} 
              className="product-image11" 
            />
          
          </div>
          <div className="product-info11">
            <h3 className="product-name11">{product.name}</h3>
            <p className="product-code11">Code - {product.code}</p>
            <p className="product-price11">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  <div className="pagination11">
    {pages.map((_, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(index)}
        className={`pagination-dot11 ${currentPage === index ? 'active' : ''}`}
        aria-label={`Go to page ${index + 1}`}
      />
    ))}
  </div>
</div>

  )
}

export default FeaturedProducts

