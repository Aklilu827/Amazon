import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Ethiopian Kirare (Traditional Guitar) Hand Made Out of Genuine Goat skin and Polisshed Wood."
            price={123}
            rating={4}
            image="https://m.media-amazon.com/images/I/71SvTHmtdGL._AC_SL1500_.jpg"
          /> 

          <Product
          id="67899098"
          title="Ethiopian Christan art Christ in Gloory Ethioppian Cross Long Sleeve T-Shirt"
          price={30.65}
          rating={3}
          image="https://m.media-amazon.com/images/I/A1nYNISnPeL._CLa%7C2140%2C2000%7CB1nkamssyzS.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
          />

          
          <Product
            id="49538094"
            title="Ukrainian Embroiderefd Full Sleeve Shirt, Sorochka for Men, Ethnic New Traditional patritic"
            price={59}
            rating={3}
            image="https://m.media-amazon.com/images/I/91QfIx4WylL._AC_UY879_.jpg"
          />
        </div>

        <div className="home__row">
        
            <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            
          />



          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="Canon EOS Rebel t7 dslr Camera wthi 18-55mm Lens |Built -in wi-Fi |24.1 MP CMOS Sensor | DIGIC 4+Image processor and Full HD Videos"
            price={476}
            rating={5}
            image="https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SL1500_.jpg"
          />
             <Product
            id="3254354345"
            title="Camcorder 4K Video Camera 64MP 60FPS, HD Auto Focus Vlogging 4.0' Touch Screen 18x Zoom Digtal Camera with Wifi, Microphone, Handhold Stablizer, 64G SD Card, "
            price={245}
            rating={2}
            image="https://m.media-amazon.com/images/I/71vNyOZO-LL._AC_SL1500_.jpg"
            />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="91203531"
            title="Acer Nitro 5 AN5 15-57-79TD Gaming Laptop | intel Core i7-11800H | NVIDIA GeFore RTX 3050 Ti Laptop GGPU | 15.6' FHD 144Hz IPS Display  "
            price={773}
            rating={5}
            image="https://m.media-amazon.com/images/I/81lDOtJRTkL._AC_SL1500_.jpg"
          />

           <Product
            id="01602578"
            title="Wireless Car Charger, CHGeek 15w Fast Auuto Clamping Car Charger Phone Mount Windshield Air vent Phone Holder for iphone 14 13 12 "
            price={507}
            rating={3}
            image="https://m.media-amazon.com/images/I/71Ea681pSWL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
         <Product
            id="12321341"
            title="SanDisk 1TB Extreme PRO USB3.2 solid state Flash Driver- SDCZ880-1Too-GAM46"
            price={137}
            rating={4}
            image="https://m.media-amazon.com/images/I/71eKXcpG0vL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          /> 
        </div>
      </div>
    </div>
  );
}

export default Home;