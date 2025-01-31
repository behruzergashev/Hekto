import './AboutPage.css';
import rasmcha from '../assets/group.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../Footer'


import cashbak from '../assets/cashback.png'
import group from '../assets/24.png'
import moshin from '../assets/moshin.png'
import tanga from '../assets/tanga.png'
import Footer from '../Footer';
import Outstyle from '../components/ourcauld'


const AboutPage = () => {
  return (
    <div className="container1">

      <nav className="breadcrumb">

      <h1 className="title">About Us</h1>
        <ul className="breadcrumb-list">
        <li><Link to="/">Home</Link></li>

          <li className="breadcrumb-separator">/</li>
           <li><Link to="/pages">Pages</Link></li>
          <li className="breadcrumb-separator">/</li>
          <li className="breadcrumb-active">About Us</li>
        </ul>
      </nav>


    
      <div className="content-grid">

      


        <div className="image-container">
          <img
            src={rasmcha}
            alt="Business meeting"
            className="image"
          />
        </div>


        <div className="content">
          <h2 >
            Know About Our Ecommerce Business, History
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus rhoncus 
            elit, vitae ornare ipsum elementum ut. Maecenas orci tristique amet sed vitae 
            non diam laoreet. Accumsan facilisis vitae lobortis quis bibendum quis.
          </p>
          <button className="contact-button">
       <li><Link to="/Contact" className='cooontact'>         Contact us  </Link></li>
          </button>
        </div>
      </div>


      <div className="cardlar">
        <h1>Our Features</h1>
        <div className="cardlarmain">
          <div className="cardbir">
        <div className='ortalatgich'>
        <img src={moshin} alt="" />
        </div>
            <h1>Free Delivery</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="cardbir">
            <div className='ortalatgich'>

            <img src={cashbak} alt="" />
            </div>
            <h1>100% Cash Back</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div> <div className="cardbir">
            <div className='ortalatgich'>

            <img src={tanga} alt="" />
            </div>
            <h1>Quality Product</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div> <div className="cardbir">
            <div className='ortalatgich'>

            <img src={group} alt="" />
            </div>
            <h1>24/7 Support</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>
      </div>
  <Outstyle />
      <Footer />
    </div>
    
  );
};

export default AboutPage;
