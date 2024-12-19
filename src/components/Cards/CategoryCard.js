import React, { useState } from "react";
import { Link } from "react-router-dom";
import { H3, H4, H5, H6 } from "../common/Heading";

const CategoryCard = ({ image, title,url }) => {

    const [isHovered, setIsHovered] = useState(false);

      // Box shadow styles
  const defaultBoxShadow =
  "rgba(0, 0, 0, 0.06) 0px 3.5px 5.1px, rgba(0, 0, 0, 0.106) 0px 4px 4.4px, rgba(0, 0, 0, 0.2) 0px 7px 17px";
const hoverBoxShadow =
  "rgba(0, 0, 0, 0.1) 0px 5px 10px, rgba(0, 0, 0, 0.2) 0px 10px 15px, rgba(0, 0, 0, 0.3) 0px 20px 25px";

  return (
    <Link to={url} >
      <div  style={{
          boxShadow: isHovered ? hoverBoxShadow : defaultBoxShadow,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} className="  h-[170px] mx-auto w-[170px] rounded-md relative hover:transform hover:translate-y-[-2px]   overflow-hidden  hover:border-[#e0e0e0] transition-shadow duration-300">

       
        <img src={image} alt={title} className="w-full h-full object-cover" />
      
         <div className=" absolute bottom-6 w-full">
         <H5 className=" text-white uppercase text-center">{title}</H5>
         </div>
         
      </div>

    </Link>
  );
};

export default CategoryCard;
