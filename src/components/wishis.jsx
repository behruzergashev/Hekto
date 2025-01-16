import React, { useEffect, useState } from 'react';

const LikedProductsReceiver = () => {
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const handleLikedProductsUpdate = (event) => {
      setLikedProducts(event.detail);
    };

    window.addEventListener('likedProductsUpdated', handleLikedProductsUpdate);

    return () => {
      window.removeEventListener('likedProductsUpdated', handleLikedProductsUpdate);
    };
  }, []);

  return (
    <div>
      <h2>Liked Products:</h2>
      <ul>
        {likedProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LikedProductsReceiver;