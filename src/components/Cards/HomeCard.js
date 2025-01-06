import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const HomeCard = ({item}) => {
  return (
    <Link to={"#"} className=" w-72 hover:transform hover:translate-y-[-2px]  relative">
      <div className=" ">
      <img src={item?.slider} className="  w-full h-full" alt="" />

      </div>
      <div className=" absolute bottom-6 w-full">
        <Button
          label={"Explore the deals"}
          className={" bg-secondary px-12  mx-auto rounded-md text-sm"}
        />
      </div>
    </Link>
  );
};

export default HomeCard;
