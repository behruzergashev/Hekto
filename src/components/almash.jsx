// "use client";

// import { useState } from "react";
// import { Heart } from "lucide-react";
// import "./Almash.css";
// import Productimge from '../assets/product1.png'
// import Productimge1 from '../assets/product2.png'
// import Productimge2 from '../assets/product3.png'
// import Productimge3 from '../assets/product4.png'
// interface Product {
//   id: number;
//   image: string;
//   title: string;
//   rating: number;
//   reviews: number;
//   price: number;
//   oldPrice: number;
//   color: string;
//   description: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     image: Productimge,
//     title: "Black Leather Handbag",
//     rating: 4,
//     reviews: 22,
//     price: 30.0,
//     oldPrice: 39.0,
//     color: "Black",
//     description: "Premium leather handbag with modern design. Perfect for everyday use.",
//   },
//   {
//     id: 2,
//     image: Productimge1,
//     title: "Shopping Tote Bag",
//     rating: 5,
//     reviews: 18,
//     price: 25.0,
//     oldPrice: 35.0,
//     color: "Black",
//     description: "Stylish and eco-friendly shopping bag for all your needs.",
//   },
//   {
//     id: 3,
//     image: Productimge2,
//     title: "Modern Desk Lamp",
//     rating: 4,
//     reviews: 15,
//     price: 45.0,
//     oldPrice: 59.0,
//     color: "Black",
//     description: "Adjustable desk lamp with contemporary design.",
//   },
//   {
//     id: 4,
//     image: Productimge3,
//     title: "Card Holder",
//     rating: 5,
//     reviews: 20,
//     price: 20.0,
//     oldPrice: 29.0,
//     color: "Green",
//     description: "Compact and stylish card holder for your essentials.",
//   },
// ];

// export default function ProductDetail() {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(products[0]);

//   if (!selectedProduct) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <div className="pd-container">
//       <div className="pd-grid">
//         {/* Image Gallery */}
//         <div className="pd-gallery">
//           <div className="pd-thumbnails">
//             {products.map((product) => (
//               <button
//                 key={product.id}
//                 onClick={() => setSelectedProduct(product)}
//                 className={`pd-thumbnail-btn ${
//                   selectedProduct.id === product.id ? "pd-thumbnail-btn-active" : ""
//                 }`}
//               >
//                 <img
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.title}
//                   className="w-full h-full object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//           <div className="pd-main-image">
//             <img
//               src={selectedProduct.image || "/placeholder.svg"}
//               alt={selectedProduct.title}
//               className="pd-main-image-img"
//             />
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="pd-details">
//           <h1 className="pd-title">{selectedProduct.title}</h1>
//           <div className="pd-rating">
//             <div className="pd-stars">
//               {"★".repeat(selectedProduct.rating)}
//               {"☆".repeat(5 - selectedProduct.rating)}
//             </div>
//             <span className="pd-review-count">({selectedProduct.reviews})</span>
//           </div>

//           <div className="pd-price">
//             <span className="pd-current-price">${selectedProduct.price.toFixed(2)}</span>
//             <span className="pd-old-price">${selectedProduct.oldPrice.toFixed(2)}</span>
//           </div>

//           <div className="pd-color-section">
//             <h2 className="pd-color-title">Color</h2>
//             <p className="pd-description">{selectedProduct.description}</p>
//           </div>

//           <div className="pd-buttons">
//             <button className="pd-add-to-cart">Add To Cart</button>
//             <button className="pd-wishlist">
//               <Heart className="h-4 w-4" />
//             </button>
//           </div>

//           <div className="pd-categories">
//             <h2 className="pd-section-title">Categories:</h2>
//             <div className="pd-tag-list">
//               <span className="pd-tag">Fashion</span>
//               <span className="pd-tag">Accessories</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
