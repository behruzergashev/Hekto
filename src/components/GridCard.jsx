import React from 'react';
import './ProductGrid.css';

const ProductGrid = () => {
  return (
    <div className="container">
      <div className="grid">
        {/* Left Product Card */}
        <div className="product-card">
          <h2 className="title">23% off in all products</h2>
          <a href="#" className="link">Shop Now</a>
          <div className="image-wrapper">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PX4Sd1kIkVdEaljQI0cy6IRtstTD3O.png"
              alt="Black clock device"
              className="image"
            />
          </div>
        </div>

        {/* Middle Product Card */}
        <div className="product-card purple-card">
          <h2 className="title">23% off in all products</h2>
          <a href="#" className="link">View Collection</a>
          <div className="image-wrapper">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PX4Sd1kIkVdEaljQI0cy6IRtstTD3O.png"
              alt="Yellow and brown shelf"
              className="image"
            />
          </div>
        </div>

        {/* Right Product List */}
        <div className="product-list">
          {[1, 2, 3].map((item) => (
            <div key={item} className="product-item">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PX4Sd1kIkVdEaljQI0cy6IRtstTD3O.png"
                alt="Executive chair"
                className="product-image"
              />
              <div>
                <h3 className="product-title">Executive Seat chair</h3>
                <p className="price">$32.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;

