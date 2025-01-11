import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const HomeCard = ({item}) => {
  return (
    <Link to={"#"} className=" w-64 hover:transform hover:translate-y-[-2px]  relative">
      <div className=" ">
      <img src={item?.slider} className="  w-full h-full" alt="" />
      <div className=" absolute flex justify-end  rounded-md items-end h-full hover:bg-[rgba(0,0,0,0.2)] bottom-0 w-full">
        <div className=" mx-auto w-[65%]">
        <Button
          label={"Explore the deals"}
          className="bg-blue hover:bg-secondary mb-6 w-full mx-auto rounded-sm text-sm transition duration-300 ease-in-out"
          />
        </div>
        
      </div>
      </div>
     
    </Link>
  );
};

export default HomeCard;
