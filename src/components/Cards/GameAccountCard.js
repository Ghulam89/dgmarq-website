import React from "react";

const GameAccountCard = ({ image, title, description, buttonText, badge }) => {
  return (
    <div className="relative  rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {badge && (
        <span className="absolute top-3 right-3 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          {badge}
        </span>
      )}
      <img src={image} alt={title} className="w-full h-80  object-cover" />
       <div  className=" flex justify-center items-center">
       <button className="  absolute bottom-3  w-56  bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-700">
          {buttonText}
        </button>
       </div>
      
    </div>
  );
};

export default GameAccountCard;
