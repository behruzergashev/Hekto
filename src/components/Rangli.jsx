// import React, { useState } from "react"
// import './Rangli.css'
// const colors = [
//   { Image , class: "bg-blue-500" },
//   { name: "Pink", class: "bg-pink-500" },
//   { name: "Green", class: "bg-green-500" },
// ]

// export default function ColorChangingProduct() {
//   const [currentColor, setCurrentColor] = useState(colors[0])

//   const handleColorChange = (color) => {
//     setCurrentColor(color)
//   }

//   return (
//     <div className="header9">
//       <div className="header9main">
//         <div className="main9left">
//           <img
//             src={`/placeholder.svg?height=400&width=400&text=${currentColor.name}`}
//             alt={`Product in ${currentColor.name}`}
//           />
//         </div>
//         <div className="mainright9">
//           <h1>Unique Features Of leatest & Trending Poducts</h1>
//           {[
//             "All frames constructed with hardwood solids and laminates",
//             "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
//             "Arms, backs and seats are structurally reinforced",
//           ].map((feature, index) => (
//             <div key={index} className="radius">
//               <div
//                 className={`yumoloq${index + 1} ${colors[index].class}`}
//                 onClick={() => handleColorChange(colors[index])}
//               ></div>
//               <p>{feature}</p>
//             </div>
//           ))}
//           <div className="color-buttons">
//             {colors.map((color) => (
//               <button
//                 key={color.name}
//                 className={`color-button ${color.class} ${currentColor.name === color.name ? "selected" : ""}`}
//                 onClick={() => handleColorChange(color)}
//               ></button>
//             ))}
//           </div>
//           <button className="mainbtn">Add To Cart</button>
//         </div>
//       </div>
//     </div>
//   )
// }

