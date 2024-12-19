import React, { useState } from "react";
import { Link } from "react-router-dom";
import { H6 } from "../common/Heading";

const ProductCard = ({ image, title, price, originalPrice, discount, offerLabel, isSponsored, url }) => {

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
        onMouseLeave={() => setIsHovered(false)} className="border rounded-md bg-white  overflow-hidden hover:transform hover:translate-y-[-2px]     hover:border-[#e0e0e0] transition-shadow">

        <div className="">
          {offerLabel && (
            <p className="text-xs font-medium text-gray-500">{offerLabel}</p>
          )}
        </div>
        <img src={image} alt={title} className="w-full  object-contain" />
        <div className="p-4 h-40 flex flex-col justify-between">
          {isSponsored && (
            <span className="text-xs text-white bg-blue-500 px-2 py-1 rounded-full mb-2 inline-block">
              SPONSORED
            </span>
          )}

          <H6>{title}</H6>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-xl font-bold text-black">{price}</p>
            {originalPrice ?
              <p className="text-sm text-gray-500 line-through">{`$ ${originalPrice}`}</p> : null
            }

          </div>

        </div>
      </div>

    </Link>
  );
};

export default ProductCard;
