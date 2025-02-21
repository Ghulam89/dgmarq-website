import React from "react";
import { FaTag, FaPaperPlane, FaPercentage } from "react-icons/fa";

const G2AFeatures = () => {
  return (
    <div className="bg-[#212121] text-white py-4 flex justify-center">
      <div className="flex  sm:flex-row flex-col justify-between w-full max-w-[1170px] mx-auto px-3 items-center space-x-6 ">
        {/* QR Code */}
        <div className="w-36 h-32 bg-white rounded-md overflow-hidden flex items-center justify-center">
          {/* Replace this with an actual QR code image */}
          <img
            src={require('../../assets/images/qrcode.webp')}
            alt="QR Code"
            className="w-full h-full"
          />
        </div>

        {/* Features Section */}
        <div className="flex sm:flex-row  flex-col items-center space-y-6 ">
          {/* Feature 1 */}
          <div className="flex border-r  border-[#3b3b3b] hover:bg-[#3b3b3b] items-start space-x-4  rounded-md p-4">
            <FaTag className="text-orange-500 text-2xl" />
            <div>
              <h3 className="font-bold text-lg">Unlock even better deals with the</h3>
              <p className="text-white pt-2">Download now and browse the enhanced offer</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex border-r  border-[#3b3b3b] hover:bg-[#3b3b3b] items-start space-x-4  rounded-md p-4">
            <FaPaperPlane className="text-orange-500 text-2xl" />
            <div>
              <h3 className="font-bold text-lg">Subscribe to our newsletter</h3>
              <p className="text-white pt-2">
                Spend <span className="font-bold ">10 EUR</span>, and get 10% off your next buy
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex border-r  border-[#3b3b3b] hover:bg-[#3b3b3b] items-start space-x-4  rounded-md p-4">
            <FaPercentage className="text-orange-500 text-2xl" />
            <div>
              <h3 className="font-bold text-lg">Save more with Dgmarq</h3>
              <p className="text-gray-400 pt-2">Discover all the special benefits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default G2AFeatures;
