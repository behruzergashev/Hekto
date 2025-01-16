import React, { useState } from 'react'
import stolcard from '../assets/stolcard.png'
import stolcard1 from '../assets/stolcard2.png'
import stolcard3 from '../assets/stolcard3.png'
import stolcard4 from '../assets/stolcard4.png'

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
    <div style={{width: '100%', maxWidth: '1152px', margin: '0 auto', padding: '32px 16px'}}>
      <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '32px'}}>Featured Products</h2>
      
      <div style={{marginBottom: '32px'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px'}}>
          {pages[currentPage].map((product) => (
            <div key={product.id} style={{border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflow: 'hidden', transition: 'box-shadow 0.3s', ':hover': {boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'}}}>
              <div style={{}}>
                <div style={{aspectRatio: '1 / 1', position: 'relative', marginBottom: '16px', backgroundColor: '#f3f4f6', borderRadius: '0.375rem', overflow: 'hidden'}}>
                <img 
                    src={product.Image} 
                    alt={product.name}
                    style={{
                      width: '80%',
                      height: '80%',
                      marginTop: '10%',
                      marginLeft:'10%',
                      objectFit: 'cover',
                      position: 'absolute',
                      
                      top: 0,
                      left: 0
                    }}
                  />
                  <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af'}}>
                    Image
                  </div>
                </div>
                <div style={{textAlign: 'center'}}>
                  <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#ec4899', marginBottom: '0.25rem'}}>{product.name}</h3>
                  <p style={{fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.5rem'}}>Code - {product.code}</p>
                  <p style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937'}}>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{display: 'flex', justifyContent: 'center', }}>
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            style={{
              width: '50px',
              height: '7px',
              
            //   borderRadius: '9999px',
              backgroundColor: currentPage === index ? '#ec4899' : '#d1d5db',
              border: 'none',
              cursor: 'pointer'
            }}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts

