
import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
import {Navigation, Pagination} from "swiper/modules";
import world from "../assets/images/world.png";
import eye from "../assets/images/eye.png";
import mobile from "../assets/images/mobile.png";
import buy from "../assets/images/buy.png";
import pc from "../assets/images/pc.png";
const Slider1 = () => {


 const Slider1Data = [
  {
    img: world,
    Million: "30M",
    text: "Users Worldwide"
  },
  {
    img: eye,
    Million: "250M",
    text: "Visits in 2023"
  },
  {
    img: mobile,
    Million: "3.7M",
    text: "Social Media Community"
  },
  {
    img: buy,
    Million: "105M",
    text: "digital items sold"
  },
  {
    img: pc,
    Million: "75K",
    text: "offers"
  }
]

  return (
    <div>
      <Swiper
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        
        modules={[Navigation]}
        className="mySwiper"
      >

{Slider1Data.map((data , idx )=>(
        <SwiperSlide key={idx} >
        <div className="flex ">
          <img src={data.img} alt="world" />
          <div>
            <p className="text-[#202020] text-[3.5rem] font-bold">{data.Million}</p>
            <p>{data.text} </p>
          </div>
        </div>
      </SwiperSlide>
))}

      </Swiper>
    </div>
  );
};

export default Slider1;