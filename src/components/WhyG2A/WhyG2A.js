import React from "react";
import { FaUsers } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const WhyG2A = () => {
  const features = [
    {
      icon:<IoMdPricetags color="#C3560F" size={30} />,
      title: "Vast selection in best prices",
      description: "Over 75K digital items",
      Url:'/reliability'
    },
    {
      icon:<MdLockOutline color="#C3560F" size={30} />,
      title: "Secured payments",
      description: "200+ payment methods",
        Url:'/reliability'
    },
    {
      icon:<FaUsers color="#C3560F" size={30} />,
      title: "Loyal users",
      description: "30M customers in 180 countries",
       Url:'/reliability'
    },
    {
        icon:<LiaBusinessTimeSolid size={30} color="#C3560F" />,
      title: "Only business sellers",
      description: "100 verification factors",
       Url:'/reliability'
    },
  ];

  return (
    <>
   
    <div className="bg-[#212121] text-white py-10">
      <div className="max-w-[1170px] mx-auto px-3">
     
        <div className=" flex md:flex-row flex-col gap-1">
          <div className=" p-4">
          <h2 className="text-2xl font-bold mb-6 whitespace-nowrap">Why G2A?</h2>
          </div>
          {features.map((feature, index) => (
                    <Link to={`${feature?.Url}`} className="flex border-r  border-[#3b3b3b] p-3 hover:bg-[#3b3b3b] items-start space-x-4  rounded-md">

              <div className="text-orange-500 text-2xl">{feature.icon}</div>
              <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default WhyG2A;
