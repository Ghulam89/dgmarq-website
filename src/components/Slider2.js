
import {NavLink} from "react-router-dom";
import {FaGreaterThan} from "react-icons/fa6";

import React, {useRef, useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import {Pagination} from "swiper/modules";



import G1 from "../assets/images/G1.png"
import G2 from "../assets/images/G2.jpg"
import G3 from "../assets/images/G3.jpg"
import G4 from "../assets/images/G4.png"
import G5 from "../assets/images/G5.png"
import G6 from "../assets/images/G6.png"
import G7 from "../assets/images/G7.png"
import G8 from "../assets/images/G8.jpg"
import G9 from "../assets/images/G9.jpg"
import G10 from "../assets/images/G10.jpg"
import G11 from "../assets/images/G11.png"
import G12 from "../assets/images/G12.jpg"
import G13 from "../assets/images/G13.png"
import G14 from "../assets/images/G14.png"
import G15 from "../assets/images/G15.png"
import G16 from "../assets/images/G16.png"
import G17 from "../assets/images/G17.png"
import G18 from "../assets/images/G18.png"
import G19 from "../assets/images/G19.png"
import G20 from "../assets/images/G20.png"
import G21 from "../assets/images/G21.png"
import G22 from "../assets/images/G22.jpg"

const Slider2 = () => {


    
 const G2ACards = [
    {
        img: G1,
        heading: "Black Week Game Deals on G2A: Don’t Miss These Must-Play Titles",
        paragraph: " Black Friday and Cyber Monday — two days when everybody indulges in their most impulsive purchasing instincts, held tightly in check throughout the year. And why wouldn’t they?  Brick-and-mortar and...",
        links: "https://www.g2a.co/black-week-game-deals-on-g2a-dont-miss-these-must-play-titles/"
    },
    {
        img: G2,
        heading: "Best Post-Apocalyptic Game Alternatives to the Stalker Series",
        paragraph: " Can’t get your hands on Stalker 2 yet? Need more fun ideas for similar games? You’ve come to the right place. This nifty little guide will get you started on... ",
        links: "https://www.g2a.co/best-post-apocalyptic-game-alternatives-to-the-stalker-series/"
    },
    {
        img: G3,
        heading: "G2A.COM Named 'Company of the Year: Retail' Award Winner at the 14th Annual 2024 Globee® Awards for Business (International)",
        paragraph: " AMSTERDAM,&nbsp;Oct. 31, 2024&nbsp;--&nbsp;G2A.COM, the world's leading marketplace for digital entertainment, has been named a Gold Winner of the Company of the Year: Retail award at the 14th Annual 2024 Globee®...",
        links: "https://www.g2a.co/g2a-com-named-company-of-the-year-retail-award-winner-at-the-14th-annual-2024-globee-awards-for-business-international/"
    },
    {
        img: G4,
        heading: "G2A.COM Deploys Forter to Block Fraud and Optimize Payments",
        paragraph: " G2A.COM is trusted by users from 180 countries, where visitors can choose from more than 75,000 digital offerings. The global nature of its business required G2A.COM to scale its fraud... ",
        links: "https://www.g2a.co/g2a-com-deploys-forter-to-block-fraud-and-optimize-payments/"
    },
    {
        img: G5,
        heading: "5 Best Remakes of Cult Horror Games",
        paragraph: " Horror is a diverse genre, just as happy to unsettle you deeply with subtle cues and uncanny atmosphere, as it is eager to unleash a creepy monster into an evocative...",
        links: "https://www.g2a.co/5-best-remakes-of-cult-horror-games/"
    },
    {
        img: G6,
        heading: "Call of Duty: Black Ops 6: from Cold War to future warfare – expanding the series’ universe",
        paragraph: "Originally a World War II-themed affair, the Call of Duty franchise evolved into a completely different beast over the last two decades. Today we’ll take a peek at the time...",
        links: "https://www.g2a.co/call-of-duty-black-ops-6-from-cold-war-to-future-warfare-expanding-the-series-universe/"
    },
    {
        img: G7,
        heading: "Three questions companies should ask when choosing an online marketplace",
        paragraph: " So, you sell products from your brand website, but do you have an online marketplace presence? If the answer is no, consider this: a survey by PYMNTS and Adobe found...",
        links: "https://www.g2a.co/three-questions-companies-should-ask-when-choosing-an-online-marketplace/"
    },
    {
        img: G8,
        heading: "G2A.COM EARNS MULTIPLE RECOGNITIONS 2024 eCOMMERCE AWARDS; FIRST PLACE IN BEST DIGITAL MARKETING CAMPAIGN CATEGORY",
        paragraph: " AMSTERDAM, September 25, 2024 - G2A.COM, the world’s leading marketplace for digital entertainment, today announced it has earned two distinguished recognitions at the 2024 eCommerce Awards, hosted by the UK...",
        links: "https://www.g2a.co/g2a-com-earns-multiple-recognitions-2024-ecommerce-awards-first-place-in-best-digital-marketing-campaign-category/"
    },
    {
        img: G9,
        heading: "The history of the EA Sports FC series: what happened to FIFA?",
        paragraph: " Ah, FIFA. Once pretty much the greatest soccer sim series of all time, now gone. Or is it? Despite the loss of this precious license, EA Sports didn’t give up....",
        links: "https://www.g2a.co/the-history-of-the-ea-sports-fc-series-what-happened-to-fifa/"
    },
    {
        img: G10,
        heading: "Drift Masters Grand Finale crowns a season full of sports adventure for G2A.COM",
        paragraph: " Drift Masters, celebrating its 10th anniversary this year, was hosted for the second time at the largest stadium in Poland and for the second time with a primary partner of...",
        links: "https://www.g2a.co/drift-masters-grand-finale-crowns-a-season-full-of-sports-adventure-for-g2a-com/"
    },
    {
        img: G11,
        heading: "A Journey Through Mythology and Adventure: An Overview of the God of War Series",
        paragraph: " It wouldn’t be unreasonable to think 2018’s God of War was the first title in the series, or that its direct sequel, GoW: Ragnarök was the second one. The mostly...",
        links: "https://www.g2a.co/a-journey-through-mythology-and-adventure-an-overview-of-the-god-of-war-series/"
    },
    {
        img: G12,
        heading: "Grow Gaming Through Sports For The Win",
        paragraph: " According to Anzu research, there are currently over 3.3 billion gamers worldwide—and 6 in 10 identify as sports enthusiasts. This isn't new; the worlds of sports and video gaming have...",
        links: "https://www.g2a.co/grow-gaming-through-sports-for-the-win/"
    },
    {
        img: G13,
        heading: "Mythologies in games - from Ancient Europe to Middle East and Asia",
        paragraph: " From paintings and novels, through movies and comic books, to even musicals, mythology has always been an endless source of inspiration. Stories of gods and heroes, hubris and punishment, universal...",
        links: "https://www.g2a.co/mythologies-in-games-from-ancient-europe-to-middle-east-and-asia/"
    },
    {
        img: G14,
        heading: "Hits and misses: a rocky decade of video game movies and shows",
        paragraph: " It’s never easy to adapt stories across different media. Something will always be lost in the translation, even between similar ones. Of course, something will also be gained, but it’s...",
        links: "https://www.g2a.co/hits-and-misses-a-rocky-decade-of-video-game-movies-and-shows/"
    },
    {
        img: G15,
        heading: "G2A.COM expands its PayPal integration to create seamless user experiences in the digital marketplace",
        paragraph: " G2A.COM, the world’s leading marketplace for digital entertainment, is thrilled to announce it has extended its PayPal integration to elevate the user checkout experience for visitors globally.&nbsp; In G2A.COM’s commitment...",
        links: "https://www.g2a.co/g2a-com-paypal-integration/"
    },
    {
        img: G16,
        heading: "Top Survival Base Building Games with Zombies – Now on G2A.COM",
        paragraph: " There are some things that just go together very well. Peanut butter and jelly. Salt and caramel. Books and comfortable armchair. Zombies and survival games. All natural companions, better together...",
        links: "https://www.g2a.co/top-survival-base-building-games-with-zombies-now-on-g2a-com/"
    },
    {
        img: G17,
        heading: "The TOP 5 Motorsport Video Games That You Can Find on G2A.COM",
        paragraph: " It’s not easy to participate in motorsport. If you are a drifting fan, you can do it by watching the Drift Masters season. Maybe one of the stars will inspire...",
        links: "https://www.g2a.co/the-top-5-motorsport-video-games-that-you-can-find-on-g2a-com/"
    },
    {
        img: G18,
        heading: "mpe 2024 - myth busters with Laura McCracken and Bartosz Skwarczek",
        paragraph: " With 18 years of experience, mpe is the leading conference in Europe’s merchant payments ecosystem, bringing together the brightest minds, groundbreaking innovations, and industry leaders to shape the future of...",
        links: "https://www.g2a.co/mpe-2024-myth-busters-with-laura-mccracken-and-bartosz-skwarczek/"
    },
    {
        img: G19,
        heading: "Play Along with Euro 2024: Best Football Games for Fans",
        paragraph: " Euro 2024, one of the best football tournaments, is here, and many fans wonder how to celebrate this widely anticipated event from the comfort of their homes. We may have...",
        links: "https://www.g2a.co/play-along-with-euro-2024-best-football-games-for-fans/"
    },
    {
        img: G20,
        heading: "G2A.COM awarded as Best Marketplace in the VII Edition of the 21st Century National Technology Awards 2024",
        paragraph: " The event, organized by El Suplemento, brought together leaders from the technology sector in an evening dedicated to celebrating the most significant achievements and advancements. The gala not only allowed...",
        links: "https://www.g2a.co/g2a-com-awarded-as-best-marketplace-in-the-vii-edition-of-the-21st-century-national-technology-awards-2024/"
    },
    {
        img: G21,
        heading: "G2A.COM joins forces with superstar striker Robert Lewandowski",
        paragraph: " The two-time FIFA Best Men’s Player, FC Barcelona striker, and the Polish National Team Captain is privately also a fan of the gaming world, making him the perfect G2A.COM ambassador to connect...",
        links: "https://www.g2a.co/g2a-com-joins-forces-with-superstar-striker-robert-lewandowski/"
    },
    {
        img: G22,
        heading: "G2A.COM Expands Global Reach, Diversifies Digital Entertainment Offerings With New NCAA Athlete Engagement Program",
        paragraph: " G2A.COM, the world's largest marketplace for digital entertainment, today announced its new NIL (Name, Image and Likeness) partnerships with 10 prominent student-athletes representing several prestigious universities across football, rugby, wrestling,...",
        links: "https://www.g2a.co/g2a-com-expands-global-reach-diversifies-digital-entertainment-offerings-with-new-ncaa-athlete-engagement-program/"
    },
]

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
        {G2ACards.map((data, idx) => (
          <SwiperSlide key={idx} className="max-w-[27rem]">
            <div  className=" w-full">
              <img src={data.img} className=" w-full" alt="" />

              <div className="">
              <h3 className=" pt-3  mb-3  text-2xl text-[#000000de] font-semibold	 ">
                {data.heading.slice(0,60 )}...
              </h3>
              <p className="">{data.paragraph.slice(0,160)} ... </p>
              <div className="text-[#318fff]  flex items-center gap-2">
                <NavLink to= {data.links} >Read More</NavLink>
                <div className="">
                  <FaGreaterThan />
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider2;