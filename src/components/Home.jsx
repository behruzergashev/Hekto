import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../Footer";
import Carusel from "../Carusel";
import Caruselcard from './Caruselcard';
import cashbak from '../assets/cashback.png';
import group from '../assets/24.png';
import moshin from '../assets/moshin.png';
import tanga from '../assets/tanga.png';
import './Home.css';
import headerstol from '../assets/headerstol.png';
import cardstol1 from '../assets/cardstol1.png';
import cardstol2 from '../assets/cardstol2.png';
import cardstol3 from '../assets/cardstol3.png';
import cardstol4 from '../assets/cardstol4.png';
import '../components/GridCard';
import rasmcbhebc from '../assets/soatcard.png';
import rasmcbhebc1 from '../assets/stolparta.png';
import gridstol from '../assets/gridstol.png';
import gridstol2 from '../assets/gridstol2.png';
import gridstol3 from '../assets/gridstol3.png';
import headerdescor from '../assets/destoc.png';
import cssrasm from '../assets/cssrasm.png';
import Read from '../components/readmore';
import Header9 from "../components/header9";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Carusel />
      <Caruselcard />

      <div className="cardlar">
        <h1>{t("what_shopex_offer")}</h1>
        <div className="cardlarmain">
          <div className="cardbir">
            <div className='ortalatgich'><img src={moshin} alt="" /></div>
            <h1>{t("free_delivery")}</h1>
            <p>{t("free_delivery_desc")}</p>
          </div>
          <div className="cardbir">
            <div className='ortalatgich'>
              <img src={cashbak} alt="" />
            </div>
            <h1>{t("cashback")}</h1>
            <p>{t("cashback_desc")}</p>
          </div>
          <div className="cardbir">
            <div className='ortalatgich'>
              <img src={tanga} alt="" />
            </div>
            <h1>{t("quality_product")}</h1>
            <p>{t("quality_product_desc")}</p>
          </div>
          <div className="cardbir">
            <div className='ortalatgich'>
              <img src={group} alt="" />
            </div>
            <h1>{t("support")}</h1>
            <p>{t("support_desc")}</p>
          </div>
        </div>
      </div>
      <Header9 />

      <div className="stolcarlar">
        <div className="stolmain">
          <h1 className="stolmainh1">{t("trending_products")}</h1>
          <div className="tortcatt">
            <div className="stolcard1">
              <div className="tepa">
                <img src={cardstol1} alt="" />
              </div>
              <h1>{t("cantilever_chair")}</h1>
              <div className="flex">
                <p>{t("price", { value: 42 })}</p>
                <p>{t("discounted_price", { value: 26 })}</p>
              </div>
            </div>
            <div className="stolcard1">
              <div className="tepa">
                <img src={cardstol2} alt="" />
              </div>
              <h1>{t("cantilever_chair")}</h1>
              <div className="flex">
                <p>{t("price", { value: 42 })}</p>
                <p>{t("discounted_price", { value: 26 })}</p>
              </div>
            </div>
            <div className="stolcard1">
              <div className="tepa">
                <img src={cardstol3} alt="" />
              </div>
              <h1>{t("cantilever_chair")}</h1>
              <div className="flex">
                <p>{t("price", { value: 42 })}</p>
                <p>{t("discounted_price", { value: 26 })}</p>
              </div>
            </div>
            <div className="stolcard1">
              <div className="tepa">
                <img src={cardstol4} alt="" />
              </div>
              <h1>{t("cantilever_chair")}</h1>
              <div className="flex">
                <p>{t("price", { value: 42 })}</p>
                <p>{t("discounted_price", { value: 26 })}</p>
              </div>
            </div>
          </div>
          <div className="uchcard">
            <div className="carduzun">
              <h1>{t("discount_all_products")}</h1>
              <div className="gvddbce">
                <div className="whqvqvjqw">
                  <p>{t("shop_now")}</p>
                </div>
                <div className="rasmhe">
                  <img src={rasmcbhebc} alt="" className="imgssls" />
                </div>
              </div>
            </div>
            <div className="carduzun2">
              <h1>{t("discount_all_products")}</h1>
              <p className="pcha">{t("view_collection")}</p>
              <div className="gvddbce">
                <div className="whqvqvjqw1"></div>
                <div className="rasmhe">
                  <img src={rasmcbhebc1} alt="" className="imgssls1" />
                </div>
              </div>
            </div>
            <div className="carduzun1">
              <div className="divgrid">
                <img src={gridstol} alt="" />
                <div>
                  <h1>{t("executive_seat_chair")}</h1>
                  <p>{t("price", { value: 32 })}</p>
                </div>
              </div>
              <div className="divgrid">
                <img src={gridstol2} alt="" />
                <div>
                  <h1>{t("executive_seat_chair")}</h1>
                  <p>{t("price", { value: 32 })}</p>
                </div>
              </div>
              <div className="divgrid">
                <img src={gridstol3} alt="" />
                <div>
                  <h1>{t("executive_seat_chair")}</h1>
                  <p>{t("price", { value: 32 })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="discort2">
        <div className="discort">
          <h1 className="center">{t("discount_item")}</h1>
          <div className="itemflex">
            <p>{t("wood_chair")}</p>
            <p>{t("plastic_chair")}</p>
            <p>{t("sofa_collection")}</p>
          </div>
          <div className="discortmain">
            <div className="discorleft">
              <h1>{t("discount_all_products")}</h1>
              <h5>{t("eams_sofa_compact")}</h5>
              <p className="discopp">{t("discount_desc")}</p>
              <div className="lalalaal">
                <div className="wqjncmakwevjnwj">
                  <p>✔️</p>
                  <p>{t("material_expose")}</p>
                </div>
                <div className="wqjncmakwevjnwj">
                  <p>✔️</p>
                  <p>{t("clear_lines_figures")}</p>
                </div>
              </div>
              <div className="lalalaal1">
                <div className="wqjncmakwevjnwj">
                  <p>✔️</p>
                  <p>{t("simple_colors")}</p>
                </div>
                <div className="wqjncmakwevjnwj">
                  <p>✔️</p>
                  <p>{t("material_expose")}</p>
                </div>
              </div>
              <button className="discorbtn">
                {t("shop_now")}
              </button>
            </div>
            <div className="discorright">
              <img src={headerdescor} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="csssssss"
        style={{ backgroundImage: `url(${cssrasm})` }}
      >
        <div className="getmain">
          <h1>{t("subscribe_update")}</h1>
          <button className="ccssssbtn">
            {t("shop_now")}
          </button>
        </div>
      </div>
      <Read />
      <Footer />
    </div>
  );
};

export default Home;
