
import {NavLink} from "react-router-dom";
import {FaGreaterThan} from "react-icons/fa6";

import React, {useRef, useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import {Pagination} from "swiper/modules";


import M1 from "../assets/images/M1.png"
import M2 from "../assets/images/M2.jpg"
import M3 from "../assets/images/M3.png"
import M4 from "../assets/images/M4.jpg"
import M5 from "../assets/images/M5.png"
import M6 from "../assets/images/M6.png"
import M7 from "../assets/images/M7.png"
import M8 from "../assets/images/M8.png"
import M9 from "../assets/images/M9.png"
import M10 from "../assets/images/M10.png"
import M11 from "../assets/images/M11.png"
import M12 from "../assets/images/M12.png"

export const MediaCard = [
    {
      img: M1,
      paragraph: "In the dynamic world of digital commerce, Bartosz Skwarczek has carved out a formidable niche as the founder and President of the Supervisory Board G2A Capital Group, to which belongs G2A.COM,...",
      links: "https://europeanbusinessmagazine.com/business/interview-with-bartosz-skwarczek-founder-of-g2a-com/",
    },
    {
      img: M2,
      paragraph: " Mona Kinal is the Chief Marketing Officer (CMO) of G2A. She leads marketing strategies and growth initiatives for the global digital entertainment marketplace. With her help, G2A aims to democratize...",
      links: "https://www.robertplank.com/1076-digital-entertainment-g2a-mona-kinal/",
    },
    {
      img: M3,
      paragraph: "“So many different companies and their products today compete with each other for customers attention, trying to be their go-to choice of entertainment,” explains Dorota Wróbel from G2A.COM.",
      links: "https://www.destinationcrm.com/Articles/ReadArticle.aspx?ArticleID=163340",
    },
    {
      img: M4,
      paragraph: " G2A.COM has always been about gaming and entertainment. The company supports esports to this day, giving back to the community that made G2A Marketplace the world’s biggest platform of its...",
      links: "https://esports-news.co.uk/2024/03/28/how-g2a-com-and-esports-grew/",
    },
    {
      img: M5,
      paragraph: " In the fast-paced world of e-commerce, digital marketplaces are the central hubs for innovation and connection. Among these platforms, G2A stands out, reshaping how we buy and sell digital entertainment.",
      links: "https://integrated.finance/insights/podcast/how-g2a-leads-innovation-in-digital-marketplaces",
    },
    {
      img: M6,
      paragraph: " One of the key insights from Dorota Wróbel’s experience is the importance of diversity in cybersecurity teams. She emphasizes the need for interdisciplinary backgrounds, highlighting how women’s attention to detail...",
      links: "https://thecyberexpress.com/women-in-cybersecurity-dorota-wrobel-journey/",
    },
    {
      img: M7,
      paragraph: " The new communication platform Gate Ready is designed to introduce a cutting-edge brand positioning and brand purpose which is to open the Gate 2 Adventure into digital world and democratize...",
      links: "https://www.larazon.es/deportes/esports/entrevista-mona-kinal-cmo-g2acom-quotgate-readyquot-nueva-plataforma-comunicacion_2024031365f18cddab79d800019e4398.html",
    },
    {
      img: M8,
      paragraph: " “Apart from external challenges, male-dominated environment also often triggers internal, mental barriers for women, creating moments and situations where they are afraid to speak their mind, feeling overwhelmed and alienated...",
      links: "https://www.cityam.com/14-women-share-what-feminism-means-to-them-this-international-womens-day/",
    },
    {
      img: M9,
      paragraph: " How can businesses keep up without vastly increasing the amount of resources they expend on cybersecurity?&nbsp;At G2A.COM, we have relied on AI to help us answer this question. We treat...",
      links: "https://aithority.com/machine-learning/is-ai-the-solution-to-cyber-resilience/",
    },
    {
      img: M10,
      paragraph: " With users in 180 countries, we are constantly working on making our marketplace more accessible and secure for consumers—and local PSPs play a key role in our strategy. Partnering with...",
      links: "https://www.forbes.com/councils/forbestechcouncil/2024/02/26/how-digital-payments-can-take-a-global-business-to-a-local-level/",
    },
    {
      img: M11,
      paragraph: " We have actually announced this long-term partnership with Drift Masters as the series of events which will be happening in the next few years with our great support. We are...",
      links: "https://www.marca.com/videojuegos/juegos/2024/02/19/65d336c522601d80178b4599.html",
    },
    {
      img: M12,
      paragraph: " Meanwhile, there is another important aspect of Polish growth in this domain – G2A, one of the most important digital sales platforms in the world. Its purpose? To create a...",
      links: "https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2021/07/G2A_preview_print.pdf",
    },
  ]

const Slider3 = () => {
  return (
    <div className="pt-[3rem] pr-[2rem]  ">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
     
      >
        {MediaCard.map((data, idx) => (
          <SwiperSlide key={idx} className="max-w-[28rem] pr-[2rem]">
            <div  >
              <img src={data.img} alt="" className="h-[3.3rem]"/>

              <h5
                className="italic  mt-4 text-[#000000de] font-semibold"

              >
                {data.paragraph.slice(0, 110)}
              </h5>

              <div className="text-[#318fff]  flex items-center pt-3 gap-3">
                <NavLink to= {data.links} >Read More</NavLink>
                <div className="font-bold  ">
                  <FaGreaterThan />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider3;