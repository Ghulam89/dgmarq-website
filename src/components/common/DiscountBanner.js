import React from 'react';
import { H2 } from './Heading';

const DiscountBanner = () => {
  return (
  
    <div className=" border bg-discount_bg border-gray-200 my-12 py-14  bg-cover bg-center p-6 mx-auto flex sm:flex-row flex-col items-center space-x-6">
       <div className="flex-shrink-0">
        <img
          src="https://images.g2a.com/uiadminimages/200x200/1x1x1/403edfe91781/86eba8b5cfbd490aa1f4701a" 
          alt="Email Icon"
          className=""
        />
      </div>
      {/* Middle Section: Content */}
      <div className=" sm:w-7/12 w-12/12">
        <H2 className="text-2xl font-bold text-gray-900 mb-2">
          Grab a 10% discount code for your next purchase
        </H2>
        <p className="text-gray-600 mb-4">
          Just subscribe to our newsletter and place an order of at least 10 Euro
        </p>
        <div className="flex sm:flex-row flex-col items-center space-x-4 sm:gap-0  gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border w-full border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="bg-blue-500 text-white  sm:w-32 w-full px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200">
            Subscribe
          </button>
        </div>

        <p className=' text-sm pt-4'>By selecting Subscribe you give G2A.COM Limited consent to sending to your email commercial communication, including the one suited to you, about products and services offered on the G2A Marketplace.
        </p>
      </div>

      
    </div>
  );
};

export default DiscountBanner;
