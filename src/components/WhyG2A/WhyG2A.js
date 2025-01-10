import React from "react";
import { FaUsers } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { MdLockOutline } from "react-icons/md";

const WhyG2A = () => {
  const features = [
    {
      icon:<IoMdPricetags color="#C3560F" size={30} />,
      title: "Vast selection in best prices",
      description: "Over 75K digital items",
    },
    {
      icon:<MdLockOutline color="#C3560F" size={30} />,
      title: "Secured payments",
      description: "200+ payment methods",
    },
    {
      icon:<FaUsers color="#C3560F" size={30} />,
      title: "Loyal users",
      description: "30M customers in 180 countries",
    },
    {
        icon:<LiaBusinessTimeSolid size={30} color="#C3560F" />,
      title: "Only business sellers",
      description: "100 verification factors",
    },
  ];

  return (
    <>
   
    <div className="bg-[#212121] text-white py-10">
      <div className="max-w-[1170px] mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Why G2A?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-row gap-3 items-start space-y-2 border-l border-gray-700 pl-4"
            >
              <div className="text-orange-500 text-2xl">{feature.icon}</div>
              <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default WhyG2A;
