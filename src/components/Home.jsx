import React from "react";
import Footer from "../Footer";
import Carusel from "../Carusel"
import Caruselcard from './Caruselcard'
import cashbak from '../assets/cashback.png'
import group from '../assets/24.png'
import moshin from '../assets/moshin.png'
import tanga from '../assets/tanga.png'
import './Home.css'
import headerstol from '../assets/headerstol.png'
import cardstol1 from '../assets/cardstol1.png'
import cardstol2 from '../assets/cardstol2.png'
import cardstol3 from '../assets/cardstol3.png'
import cardstol4 from '../assets/cardstol4.png'

import '../components/GridCard'
import rasmcbhebc from '../assets/soatcard.png'
import rasmcbhebc1 from '../assets/stolparta.png'
import gridstol from '../assets/gridstol.png'
import gridstol2 from '../assets/gridstol2.png'
import gridstol3 from '../assets/gridstol3.png'
import headerdescor from '../assets/destoc.png'
// import Cardnom from'../components/yumoloqcard'
import cssrasm from '../assets/cssrasm.png'
import Read from '../components/readmore'


const Home = () => {
  return (
    <div>
    <Carusel />
 <Caruselcard />

      <div className="cardlar">
        <h1>What Shopex Offer!</h1>
        <div className="cardlarmain">
          <div className="cardbir">
         <div className='ortalatgich'>   <img src={moshin} alt="" /></div>
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
      {/* <div className="header9">
        <div className="header9main">
          <div className="main9left">
<img src={headerstol} alt="" />
          </div>
          <div className="mainright9">
            <h1>Unique Features Of leatest &
            Trending Poducts</h1>
            <div className="radius">
              <div className="yumoloq">

              </div>
              <p>All frames constructed with hardwood solids and laminates</p>
            </div>
            <div className="radius">
              <div className="yumoloq2">

              </div>
              <p>Reinforced with double wood dowels, glue, screw - nails corner 
              blocks and machine nails</p>
            </div>
            <div className="radius">
              <div className="yumoloq3">

              </div>
              <p>Arms, backs and seats are structurally reinforced</p>
            </div>
            <button 
            className="mainbtn
            ">
              Add To Cart
            </button>
          </div>
        </div>
      </div> */}
      
      <div className="stolcarlar">
        <h1></h1>
        <div className="stolmain">
          <h1 className="stolmainh1">Trending Products</h1>
          <div className="tortcatt">
            <div className="stolcard1">
              <div className="tepa">
                <img src={cardstol1} alt="" />
              </div>
              <h1>Cantilever chair</h1>
              <div className="flex">
                <p>$42.00</p>
                <p>$26.00 </p>
              </div>
            </div>
            <div className="stolcard1">
              <div className="tepa">
                <img src={cardstol2} alt="" />
              </div>
              <h1>Cantilever chair</h1>
              <div className="flex">
                <p>$42.00</p>
                <p>$26.00 </p>
              </div>
            </div>          <div className="stolcard1">
              <div className="tepa">
                <img src={cardstol3} alt="" />
              </div>
              <h1>Cantilever chair</h1>
              <div className="flex">
                <p>$42.00</p>
                <p>$26.00 </p>
              </div>
            </div>          <div className="stolcard1">
              <div className="tepa">
                <img src={cardstol4} alt="" />
              </div>
              <h1>Cantilever chair</h1>
              <div className="flex">
                <p>$42.00</p>
                <p>$26.00 </p>
              </div>
            </div>
          </div>
          <div className="uchcard">
        <div className="carduzun">
          <h1>23% off in all products</h1>
     <div className="gvddbce">
     <div className="whqvqvjqw">
          <p>Shop Now</p>
          </div>
       <div className="rasmhe">
       
       <img src={rasmcbhebc} alt=""  className="imgssls"/>
       </div>
     </div>

        </div>
        <div className="carduzun2">
          <h1>23% off in all products</h1>
          <p className="pcha">View Collection</p>
     <div className="gvddbce">
     <div className="whqvqvjqw1">
          </div>
       <div className="rasmhe">
       
       <img src={rasmcbhebc1} alt=""  className="imgssls1
       "/>
       </div>
     </div>

        </div>
            <div className="carduzun1">
         
<div className="divgrid">
  <img src={gridstol} alt="" />
<div>
<h1>Executive Seat chair</h1>
<p>$32.00</p>
</div>

</div>
<div className="divgrid">
  <img src={gridstol2} alt="" />
<div>
<h1>Executive Seat chair</h1>
<p>$32.00</p>
</div>

</div><div className="divgrid">
  <img src={gridstol3} alt="" />
<div>
<h1>Executive Seat chair</h1>
<p>$32.00</p>
</div>

</div>
    

        </div>
          </div>
        </div>
      </div>


{/* 
      <div className="bordercard">
<div className="bordermain">
  <div className="bordrr1">

  </div>
</div>
      </div> */}
  <div className="discort">
    <h1 className="center">Discount Item</h1>
    <div className="itemflex">
      <p>Wood Chair</p>
      <p>Plastic Chair</p>
      <p>Sofa Colletion</p>
    </div>
    <div className="discortmain">
      <div className="discorleft">
<h1>20% Discount Of All Products</h1>
<h5>Eams Sofa Compact</h5>
<p className="discopp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
    <div className="lalalaal">
    <div className="wqjncmakwevjnwj">
    <p>✔️</p>
    <p>Material expose like metals</p>
    </div>
    <div className="wqjncmakwevjnwj">
    <p>✔️</p>
    <p>Clear lines and geomatric figures</p>
    </div>
    </div>
    <div className="lalalaal1">
    <div className="wqjncmakwevjnwj">
    <p>✔️</p>
    <p>Simple neutral colours.</p>
    </div>
    <div className="wqjncmakwevjnwj">
    <p>✔️</p>
    <p>Material expose like metals</p>
    </div>
    </div>
    <button className="discorbtn">
    Shop Now
    </button>
      </div>
<div className="discorright">
<img src={headerdescor} alt="" />

</div>

    </div>
  </div>
<div className="csssssss"
style={{ backgroundImage: `url(${cssrasm})` }}>
  <div className="getmain"
  >
    <h1>Get Leatest Update By Subscribe
    0ur Newslater</h1>
    <button className="ccssssbtn
    "> Shop Now</button>

  </div>
</div>
    <Read />
      {/* <Cardnom /> */}
      <Footer />
    </div>
  );
};

export default Home;
