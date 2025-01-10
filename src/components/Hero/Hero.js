import React, { useEffect, useState } from "react";
import HomeCard from "../Cards/HomeCard";
import { FaWindows, FaXbox, FaPlaystation, FaGamepad } from "react-icons/fa";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";

const Hero = () => {
  const data = [
    {
      id: 1,
      image: require("../../assets/images/home-card1.avif"),
    },
    {
      id: 2,
      image: require("../../assets/images/home-card2.avif"),
    },
    {
      id: 3,
      image: require("../../assets/images/home-card3.avif"),
    },
    {
      id: 4,
      image: require("../../assets/images/home-card4.avif"),
    },
  ];


const [slider,setSlider] = useState([]);
  useEffect(() => {
    axios
      .get(`${Base_url}/slider/getAll`)
      .then((res) => {
        console.log(res);

        setSlider(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);





  return (
    <>
      <div className="  flex justify-center  items-center bg-home bg-cover bg-center w-full py-8">
        <div className=" flex gap-5  md:justify-between justify-center w-full px-3 max-w-[1170px] mx-auto flex-wrap">
          {slider?.map((item, index) => {
            return <HomeCard item={item} />;
          })}
        </div>
      </div>
      <div className="bg-gray-100 ">
        <div className="py-6   max-w-[1170px] mx-auto  px-3 flex sm:flex-row flex-col justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Choose your platform</h2>
          <div className="flex sm:flex-row flex-col space-x-8">
            {/* PC */}
            <div className="flex sm:flex-row flex-col gap-3 items-center cursor-pointer hover:text-blue-600">
              <FaWindows className="text-3xl mb-2" />
              <span className="text-sm">PC</span>
            </div>

            {/* Xbox */}
            <div className="flex flex-row gap-3 items-center cursor-pointer hover:text-green-600">
              <FaXbox className="text-3xl mb-2" />
              <span className="text-sm">Xbox</span>
            </div>

            {/* PlayStation */}
            <div className="flex flex-row gap-3 items-center cursor-pointer hover:text-blue-400">
              <FaPlaystation className="text-3xl mb-2" />
              <span className="text-sm">PlayStation</span>
            </div>

            {/* Nintendo */}
            <div className="flex flex-row gap-3 items-center cursor-pointer hover:text-red-600">
              <FaGamepad className="text-3xl mb-2" />
              <span className="text-sm">Nintendo</span>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Hero;
