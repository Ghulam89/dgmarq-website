import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HorizontalCard from "../Cards/HorizontalCard";

const SideDrawer = ({ isOpen, setIsOpen }) => {
    const productData = useSelector((state) => state?.next?.productData);

    console.log("Product Data:", productData);
    const dispatch = useDispatch();
  
  
  
  
    const productPrice = productData?.map((item) => item?.price * item?.quantity);
    console.log(productPrice);
  
    const totalPriceAfterDiscount = productPrice?.reduce((acc, price) => acc + price, 0);
  
    console.log("Total Price After Discount:", totalPriceAfterDiscount);
  
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      
      <div
        className="absolute inset-0 bg-black bg-opacity-30"
        onClick={() => setIsOpen(false)}
      ></div>

      
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        <div className="flex items-center justify-between p-4 border-b">
        <div className=" flex items-center gap-2">
        <IoMdCheckmarkCircleOutline size={30} className=" text-green-600" />
        <h2 className="text-lg font-semibold">Added to the cart</h2>
        </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4 space-y-4">
          {productData?.map((item,index)=>{
            return (
                <HorizontalCard   key={index}
                url={`/product-details/${item?._id}`}
                image={item?.image}
                title={item?.title}
                discount={item?.gst}
                price={item?.discountPrice}
                originalPrice={item?.actualPrice}
                 />
            )
          })}
          <div>
            <h2 className="text-2xl font-semibold text-black">You may also like</h2>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 absolute bottom-0 w-full border-t flex gap-2">
          <Link
            to="/"
            className="flex w-full items-center justify-center rounded-md text-secondary border border-secondary py-2.5 text-sm font-medium hover:bg-secondary hover:text-white focus:outline-none"

          >
            Continue shopping
          </Link>
          <Link
            to="/cart"
            className="flex w-full items-center justify-center rounded-md bg-blue py-2.5 text-sm font-medium text-white   hover:bg-secondary focus:outline-none"
          >
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
