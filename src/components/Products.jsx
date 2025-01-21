import React from 'react'
import { Link } from "react-router-dom";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
import Productimge from '../assets/product1.png'
import Productimge1 from '../assets/product2.png'
import Productimge2 from '../assets/product3.png'
import Productimge3 from '../assets/product4.png'
import ProductDetails from "../components/ProductDetalitiys"
import Resultcard from '../components/resultcard'
import Footer from '../Footer';
const Products = () => {
  return (

    <div>

      <nav className='navbarbek'>
        <div className="navbaroy">
          <div className="divjcasca4">
            <h1>Product Details</h1>
        <ul>
        <li><Link to="/"  className="custom-link">Home</Link></li>
        
            <li><Link to="/pages"  className="custom-link">Pages</Link></li>
            
            <li><Link to="/products"  className="custom-link1">Products</Link></li>
        </ul>
          </div>
        </div>
      </nav>
      <div className="product">
        <div className="productcard">
          <div className="cardleft">
            <div className="rasmlar1">
              <img src={Productimge1} alt="" className='rasm3' />
              <img src={Productimge2} alt="" className='rasm2' />
              <img src={Productimge3} alt="" className='rasm1' />
            </div>
            <img src={Productimge} alt="" className='rasm' />


          </div>
          <div className="cardright">
            <h1>Playwood arm chair</h1>
            <div className="star">
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <p>(22)</p>
            </div>
            <div className="starpas">
              <h3>$32.00</h3>
              <h4>$32.00</h4>
            </div>
            <h2>Color</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

            <div className="btnora">
              <button className='cardbtn'>
                Add To cart
                <FontAwesomeIcon icon={faHeart} className="icon-style-small2" />
              </button>
            </div>
            <div className="h1lar">
              <h2>Categories:</h2>
              <h2>Tags</h2>
              <div className="instalar">
                <h2>Share</h2>

              </div>
            </div>

          </div>
        </div>
      </div>


      <ProductDetails />
< Resultcard />
<Footer />
    </div>
  )
}

export default Products