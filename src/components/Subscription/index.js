import React from 'react';

const Subscription = () => {
  return (
    <div className="bg-blue-50 py-6">
      <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
        {/* Text Section */}
        <div className="lg:mr-4">
          <h2 className="text-lg font-bold text-black">
            Grab a 10% discount on your next purchase!
          </h2>
          <p className="text-sm text-gray-700 mt-1">
            Subscribe to our newsletter and confirm your subscription.
            <br />
            Then, buy something for 10 EUR or more to receive your discount code.
            <a href="#" className="text-blue-600 underline">
              Show more
            </a>
          </p>
        </div>

        {/* Input Section */}
        <div className="mt-4 border border-gray-300 lg:mt-0 p-1 bg-white rounded-md flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className=" rounded-l-md px-4 outline-none py-2 sm:w-64 w-full text-gray-700"
          />
          <button className="bg-blue-500 text-white px-6 py-2  hover:bg-blue-600 rounded-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
