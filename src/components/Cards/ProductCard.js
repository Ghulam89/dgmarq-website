import React, { useState } from "react";
import { Link } from "react-router-dom";
import { H6 } from "../common/Heading";
import { useSelector } from "react-redux";

const ProductCard = ({ image, title, price, originalPrice, discount, offerLabel, isSponsored, url,like }) => {

  const [isHovered, setIsHovered] = useState(false);

  const { userInfo } = useSelector((state) => state.next);
  console.log(userInfo);

  // Box shadow styles
  const defaultBoxShadow =
    "";
  const hoverBoxShadow =
    "rgba(0, 0, 0, 0.1) 0px 3px 8px, rgba(0, 0, 0, 0.1) 0px 5px 10px, rgba(0, 0, 0, 0.3) 0px 5px 10px";
    const [isLiked, setIsLiked] = useState(
      like?.includes(userInfo?._id?.toString())
    );


    

  return (
    <Link to={url}  >
      <p className=" uppercase text-[12px]  text-gray-500 pb-1">OFFER from 1 seller</p>
      <div style={{
        boxShadow: isHovered ? hoverBoxShadow : defaultBoxShadow,
      }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} className="  group  rounded-md bg-white  overflow-hidden hover:transform hover:translate-y-[-2px]     hover:border-[#e0e0e0] transition-shadow">

        <div className="">
          {offerLabel && (
            <p className="text-xs font-medium text-gray-500">{offerLabel}</p>
          )}
        </div>
        <div className=" relative  h-56 w-full">
          <img src={image} alt={title} className="w-full  h-full  object-cover" />
          <div className=" absolute  bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.1)] top-0  w-full h-full">
          
          </div>
          <div className=" absolute top-2 right-2">
            
          <div  className=' bg-gray-200 w-10 h-10 cursor-pointer rounded-full flex justify-center items-center'>
              <svg width="1.3em" height="1.3em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="indexes__StyledWishlistHeart-vomwzh-2 fUnRFQ"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.0521 3.05014C4.78562 0.316619 9.21779 0.316619 11.9513 3.05014C11.968 3.06688 11.9847 3.08369 12.0012 3.10055C12.0177 3.08369 12.0344 3.06689 12.0511 3.05014C14.7846 0.316619 19.2168 0.316619 21.9503 3.05014C24.6838 5.78367 24.6838 10.2158 21.9503 12.9494L12.7073 22.1924C12.5198 22.3799 12.2654 22.4853 12.0001 22.4853C11.7349 22.4852 11.4805 22.3799 11.293 22.1923L2.0521 12.9494C2.05207 12.9493 2.05205 12.9493 2.05202 12.9493C-0.681428 10.2158 -0.681402 5.78364 2.0521 3.05014ZM10.5371 4.46436C8.58462 2.51188 5.41879 2.51188 3.46631 4.46436C1.51383 6.41683 1.51383 9.58267 3.46631 11.5351L3.46639 11.5352L12.0003 20.071L20.5361 11.5351C22.4886 9.58267 22.4886 6.41683 20.5361 4.46436C18.5836 2.51188 15.4178 2.51188 13.4653 4.46436C13.2255 4.70415 13.0163 4.96306 12.8344 5.23719C12.6491 5.5164 12.3363 5.68425 12.0012 5.68425C11.6661 5.68425 11.3533 5.5164 11.168 5.23719C10.9861 4.96316 10.776 4.70323 10.5371 4.46436Z" fill="currentColor"></path></svg>
            </div>
          </div>
        </div>
        <div className="p-4  h-44 flex flex-col  border justify-between">
          {isSponsored && (
            <span className="text-xs text-white bg-blue-500 px-2 py-1 rounded-full mb-2 inline-block">
              SPONSORED
            </span>
          )}

          <h6>{title?.split(" ")?.slice(0, 5)?.join(" ")}</h6>

          <div className="flex  flex-col mt-2">
            <p className="text-xl font-bold m-0 text-black">{price}</p>
            {originalPrice ?
              <p className="text-sm text-gray-500 m-0 line-through">{`$ ${originalPrice}`}</p> : null
            }
            {discount ?
              <button className=" w-10 text-[12px] rounded-md  text-red-500 bg-[#FAE9E7] border border-red-500">${discount}</button> : null
            }


          </div>

        </div>
      </div>

    </Link>
  );
};

export default ProductCard;
