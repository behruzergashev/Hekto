import React, { useState } from "react"

import pinkChair from "../assets/kok.jpg"
import purpleChair from "../assets/headerstol.png"
import mintChair from "../assets/pushtih.png"

const ProductFeatures = () => {

  const images = {
    pink: pinkChair,
    purple: purpleChair,
    mint: mintChair,
  }

  const [activeColor, setActiveColor] = useState("pink")
  const [currentImage, setCurrentImage] = useState(images.pink)

  const handleColorClick = (color) => {
    setActiveColor(color)
    setCurrentImage(images[color])
  }

  return (
    <div className="header9">
      <div className="header9main">
        <div className="main9left">
          <img src={currentImage || "/placeholder.svg"} alt="Featured Chair" className="product-image" />
        </div>
        <div className="mainright9">
          <h1>Unique Features Of Latest & Trending Products</h1>
          <div className="radius" onClick={() => handleColorClick("pink")}>
            <div className={`yumoloq ${activeColor === "pink" ? "active" : ""}`}></div>
            <p>All frames constructed with hardwood solids and laminates</p>
          </div>
          <div className="radius" onClick={() => handleColorClick("purple")}>
            <div className={`yumoloq2 ${activeColor === "purple" ? "active" : ""}`}></div>
            <p>Reinforced with double wood dowels, glue, screw-nails corner blocks, and machine nails</p>
          </div>
          <div className="radius" onClick={() => handleColorClick("mint")}>
            <div className={`yumoloq3 ${activeColor === "mint" ? "active" : ""}`}></div>
            <p>Arms, backs and seats are structurally reinforced</p>
          </div>
          <button className="mainbtn">Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductFeatures

