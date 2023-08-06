import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import SwiperCore from "swiper";

import Image_1 from "../images/Vayu.jpg";
import Image_2 from "../images/airsonic.jpeg";
import Image_3 from "../images/aircine.jpg"
import "./carousel.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const SwiperCoverflow = () => {
  return (
    <Fragment>
      <div className="App">
        
        <Swiper
          
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
            }}
          slidesPerView={1}
          style={{ height: "100%" }}
          loop={true} 
          initialSlide={0}
        >
          <SwiperSlide
            style={{
              backgroundImage: `url(${Image_1})`,
              backgroundPosition: "center bottom",
              backgroundSize: "cover",
            }}
          >
           <p className='Vayu'>Vayu</p>
           <p className='Vayu_desc'>Discover New Heights of Performance
            with Vayu, Your Aerial Protector</p>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${Image_2})`,
              backgroundPosition: "center bottom",
              backgroundSize: "cover",
            }}
          >
            <p className='Air'>Air SonicS</p>
            <p className='Air_desc'>Unleash the thrill of FPV Freedom </p>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${Image_3})`,
              backgroundPosition: "center bottom",
              backgroundSize: "cover",
              
            }}
          >
            <p className='AirCine'>AirCine</p>
            <p className='AirCine_desc'>Cinewhoop redifining aerial cinematography From tight spaces to Cinematic grace. </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  );
};

export default SwiperCoverflow;
