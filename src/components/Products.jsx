import React from 'react'
import { Link } from "react-router-dom";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'

import ProductDetails from "../components/ProductDetalitiys"
import Resultcard from '../components/resultcard'
import Footer from '../Footer';
// import Never from '../components/almash'
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


{/* <Never /> */}
      <ProductDetails />
< Resultcard />
<Footer />
    </div>
  )
}

export default Products