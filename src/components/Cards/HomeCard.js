import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const HomeCard = ({item}) => {
  return (
    <Link to={"#"} className=" relative">
      <img src={item?.image} alt="" />
      <div className=" absolute bottom-6 w-full left-8">
        <Button
          label={"Explore the deals"}
          className={" bg-secondary px-10  rounded-md text-sm"}
        />
      </div>
    </Link>
  );
};

export default HomeCard;
