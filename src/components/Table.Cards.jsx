// import React, { useState } from 'react';
// import { Heart, ShoppingCart, RefreshCw } from 'lucide-react';
// import './Atable.css'
// const productsData = {
//   categories: [
//     { id: 1, name: "New Arrival", active: true },
//     { id: 2, name: "Best Seller", active: false },
//     { id: 3, name: "Featured", active: false },
//     { id: 4, name: "Special Offer", active: false },
//   ],
//   products: [
//     {
//       id: 1,
//       name: "Comfort Handy Craft",
//       price: 42.0,
//       salePrice: 65.0,
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jp1oq6rVuNUReAL7lD6ItT59i7tpcD.png",
//       onSale: false,
//     },
   
//   ],
// };

// function LatestProducts() {
//   const [activeCategory, setActiveCategory] = useState("New Arrival");

//   return (
//     <div className="latest-products-container">
//       <h2 className="latest-products-title">Latest Products</h2>

     
//       <div className="navigation-tabs">
//         {productsData.categories.map((category) => (
//           <button
//             key={category.id}
//             onClick={() => setActiveCategory(category.name)}
//             className={`tab-button ${activeCategory === category.name ? 'active' : ''}`}
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>

//       <div className="products-grid">
//         {productsData.products.map((product) => (
//           <div key={product.id} className="product-card">
//             {product.onSale && <div className="sale-badge">Sale</div>}

        
//             <div className="product-image-container">
//               <img src={product.image} alt={product.name} className="product-image" />
//               <div className="hover-actions">
//                 <button className="action-button">
//                   <ShoppingCart size={20} />
//                 </button>
//                 <button className="action-button">
//                   <Heart size={20} />
//                 </button>
//                 <button className="action-button">
//                   <RefreshCw size={20} />
//                 </button>
//               </div>
//             </div>

//             <div className="product-info">
//               <h3 className="product-name">{product.name}</h3>
//               <div className="price-info">
//                 <span className="current-price">${product.price.toFixed(2)}</span>
//                 <span className="sale-price">${product.salePrice.toFixed(2)}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default LatestProducts;
