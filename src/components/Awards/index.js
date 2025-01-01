import React from "react";
import { Link } from "react-router-dom";
import Slider4 from "../Slider4";

const Awards = () => {
  return (
    <div className="bg-[#2f82fb] px-[7%]  flex flex-col  py-[3rem]">
      <p className="text-[#212529] text-center text-sm tracking-[1rem] uppercase  mt-[2.5rem] lg:mt-0 ">
        AWARDS
      </p>
      <Slider4/>
      <div className=" text-[#fff] text-[1.6rem] mt-[3rem] text-center ">
        <Link
          to={"#"}
          className=" bg-[#fff] text-base px-10 py-3  text-[#000000] transition ease-in-out duration-500 "

        >
          See more awards
        </Link>
      </div>
    </div>
  );
};

export default Awards;