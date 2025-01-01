
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import A1 from "../assets/images/A1.png"
import A2 from "../assets/images/A2.png"
import A3 from "../assets/images/A3.png"
import A4 from "../assets/images/A4.png"
import A5 from "../assets/images/A5.png"
import A6 from "../assets/images/A6.png"


const Slider4 = () => {

    
 const Slider4Data = [
    {
      img : A1 ,
      heading : "Best Marketplace"
    },
    {
      img : A2 ,
      heading : "Best Digital Marketing Campaign - Gold"
    },
    {
      img : A3 ,
      heading : "Payment Innovation of the Year - Bronze"
    },
    {
      img : A4 ,
      heading : "Company of the Year | Retail"
    },
    {
      img : A5 ,
      heading : "Cross-Border Pitch Arena Winner"
    },
    {
      img : A6 ,
      heading : "Merchant of the Year"
    }
  ]
  return (
    <div  >
      <Swiper

        className="mySwiper"
      >
        {Slider4Data.map((data, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex items-center justify-center gap-[3rem] ">
              <img src={data.img} alt="" className="max-h-[12rem]  " />

              <h4 className="text-[#fff] uppercase  text-3xl font-black leading-[3rem] max-w-[45rem] ">
                {data.heading}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider4;