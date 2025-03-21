import React from "react";
import { FaTag, FaPaperPlane, FaPercentage } from "react-icons/fa";

const G2AFeatures = () => {
  return (
    <div className="bg-[#212121] text-white py-8">
      <div className=" max-w-[1170px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          {/* QR Code */}
          <div className="w-36 h-32 bg-white rounded-md overflow-hidden flex items-center justify-center">
            {/* Replace this with an actual QR code image */}
            <img
              src={require('../../assets/images/qrcode.webp')}
              alt="QR Code"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Features Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 w-full">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4 hover:bg-[#3b3b3b] rounded-md p-4 transition duration-300 ease-in-out w-full md:w-auto">
              <div>
                <FaTag className="text-orange-500 text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Unlock even better deals with the</h3>
                <p className="text-white pt-2">Download now and browse the enhanced offer</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4 hover:bg-[#3b3b3b] rounded-md p-4 transition duration-300 ease-in-out w-full md:w-auto">
              <div>
                <FaPaperPlane className="text-orange-500 text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Subscribe to our newsletter</h3>
                <p className="text-white pt-2">
                  Spend <span className="font-bold">10 EUR</span>, and get 10% off your next buy
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4 hover:bg-[#3b3b3b] rounded-md p-4 transition duration-300 ease-in-out w-full md:w-auto">
              <div>
                <FaPercentage className="text-orange-500 text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Save more with Dgmarq</h3>
                <p className="text-gray-400 pt-2">Discover all the special benefits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default G2AFeatures;