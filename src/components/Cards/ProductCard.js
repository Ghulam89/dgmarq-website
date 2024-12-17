import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, price, originalPrice, discount, offerLabel, isSponsored,url}) => {
  return (
    <Link to={url} className="border rounded-lg bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
        <h3 className=" font-bold text-gray-800 truncate">{title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-xl font-bold text-black">${price}</p>
          {originalPrice?
          <p className="text-sm text-gray-500 line-through">{`$ ${originalPrice}`}</p>:null
          }
          
        </div>
        {/* <p className="text-xs font-medium text-red-500">{discount}% OFF</p> */}
      </div>
    </Link>
  );
};

export default ProductCard;
