import React, { useState } from "react";
import { Link } from "react-router-dom";
import { H6 } from "../common/Heading";

const HorizontalCard = ({ image, title, price, originalPrice, discount, offerLabel, isSponsored, url }) => {

  const [isHovered, setIsHovered] = useState(false);

  // Box shadow styles
  const defaultBoxShadow =
    "";
  const hoverBoxShadow =
    "rgba(0, 0, 0, 0.1) 0px 3px 8px, rgba(0, 0, 0, 0.1) 0px 5px 10px, rgba(0, 0, 0, 0.3) 0px 5px 10px";

  return (
    <Link to={url}  >
      <p className=" uppercase text-[12px] text-gray-500 pb-1">OFFER from 1 seller</p>
      <div style={{
        boxShadow: isHovered ? hoverBoxShadow : defaultBoxShadow,
      }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} className="border rounded-sm bg-white  overflow-hidden hover:transform  sm:h-48 h-auto hover:translate-y-[-2px]  flex  sm:flex-row flex-col   hover:border-[#e0e0e0] transition-shadow">

       <div className=" sm:w-5/12 w-12/12">
       <img src={image} alt={title} className="w-full h-full  object-center" />
       </div>
        <div className="p-4  flex flex-col justify-between  items-start">
          
          <H6>{title}</H6>
          <div className="flex flex-col  justify-between items-center gap-1 mt-2">
            <p className="text-xl font-bold text-black">{price}</p>
            {originalPrice ?
              <p className="text-sm text-gray-500 line-through">{`$ ${originalPrice}`}</p> : null
            }

          </div>
          {discount?
             <button className=" w-10 text-[12px] rounded-md  text-red-500 bg-[#FAE9E7] border border-red-500">{discount}</button>:null
             }

          



        </div>
      </div>

    </Link>
  );
};

export default HorizontalCard;
