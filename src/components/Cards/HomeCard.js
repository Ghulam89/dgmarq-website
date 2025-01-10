import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const HomeCard = ({item}) => {
  return (
    <Link to={"#"} className=" w-64 hover:transform hover:translate-y-[-2px]  relative">
      <div className=" ">
      <img src={item?.slider} className="  w-full h-full" alt="" />
      <div className=" absolute flex justify-end  rounded-md items-end h-full hover:bg-[rgba(0,0,0,0.2)] bottom-0 w-full">
        <div>

        </div>
        <Button
          label={"Explore the deals"}
          className={" bg-secondary px-12 mb-6  mx-auto rounded-md text-sm"}
        />
      </div>
      </div>
     
    </Link>
  );
};

export default HomeCard;
