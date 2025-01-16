import React, { useState, useEffect } from "react";
import HorizontalCard from "../Cards/HorizontalCard";

const FlashDeals = () => {
  // Calculate remaining time
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  const data = [
    {
      id: 1,
      title: "Call of Duty: Modern Warfare III",
      subtitle: "(PC) - Steam Account",
      price: "$34.35",
      oldPrice: "$39.99",
      discount: "4%",
      tag: "SPONSORED",
      image:
        "https://images.g2a.com/170x228/1x1x0/microsoft-windows-10-home-microsoft-key-global/5d6f6a617e696c531336afb2",
    },
    {
      id: 2,
      title: "Random Black Friday 1 Key",
      subtitle: "(PC) - Steam Key - GLOBAL",
      price: "$5.87",
      oldPrice: "$39.99",
      discount: "2%",
      tag: "SPONSORED",
      image:
        "https://images.g2a.com/170x228/1x1x0/kaspersky-standard-2024-1-device-1-year-kaspersky-key-global/1a800691e3034e2eb5e80bed",
    },
    {
      id: 3,
      title: "Battlefield 2042",
      subtitle: "(Xbox Series X/S) - Xbox Live Key",
      price: "$12.06",
      oldPrice: "$39.99",
      discount: "5%",
      tag: "OFFER FROM 6 SELLERS",
      image:
        "https://images.g2a.com/170x228/1x1x0/ccleaner-professional-pc-1-device-1-year-ccleaner-key-global/e68083bd3fc04656b9d7c8cc",
    },
    {
      id: 4,
      title: "Max Payne (PC)",
      subtitle: "Steam Key - GLOBAL",
      price: "$4.77",
      oldPrice: "$39.99",
      discount: "9%",
      tag: "OFFER FROM 23 SELLERS",
      image:
        "https://images.g2a.com/170x228/1x1x0/microsoft-office-2024-ltsc-standard-pc-microsoft-key-global/9773eb74c6e54720b8b5b0da",
    },
  ];

  return (
    <div className="bg-Flash_bg hidden sm:block py-10 w-full h-auto relative bg-cover bg-center">
      <div className="flex max-w-[1170px] items-center gap-12 mx-auto justify-center">
        {/* Flash Deal Section */}
        <div className="w-4/12 rounded-lg relative text-white">
          <div className="absolute -top-[214px] w-72 right-4">
            <h2 className="text-xl font-bold text-center mb-4">
              Flash Deal - Starts in
            </h2>
            <div className="flex justify-center items-center space-x-2 text-2xl mb-4">
              <div className="leading-5">
                <span className="text-black bg-white w-16 h-16 flex justify-center items-center rounded-sm">
                  <span className="text-4xl font-bold">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                </span>
                <p className="m-0 text-[11px] p-0 text-center">Hours</p>
              </div>
              <span>:</span>
              <div className="leading-5">
                <span className="text-black bg-white w-16 h-16 flex justify-center items-center rounded-sm">
                  <span className="text-4xl font-bold">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                </span>
                <p className="text-[11px] p-0 text-center">Minutes</p>
              </div>
              <span>:</span>
              <div className="leading-5">
                <span className="text-black bg-white w-16 h-16 flex justify-center items-center rounded-sm">
                  <span className="text-4xl font-bold">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                </span>
                <p className="text-[11px] p-0 text-center">Seconds</p>
              </div>
            </div>
            <img
              src={require("../../assets/images/flash-express.avif")}
              alt="ExpressVPN"
              className="w-full rounded-lg mb-4"
            />
            <p>
              Express VPN (PC, Mac) 1 Device, 1 Month - ExpressVPN Key - GLOBAL
            </p>
            <div className="flex justify-between text-sm mt-4">
              <span>Left: 0</span>
              <span>Sold: 50</span>
            </div>
            <div className="h-2 bg-gray-700 mt-2 rounded">
              <div className="bg-blue-500 h-full w-1/2 rounded"></div>
            </div>
          </div>
        </div>

        {/* Currently Trending Offers */}
        <div className="w-7/12">
          <h2 className="text-2xl font-bold text-white">
            More currently trending offers
          </h2>
          <p className="text-white">
            Don't miss out – grab them while you still have the chance!
          </p>
          <div className="grid grid-cols-2 gap-4">
            {data?.map((product, index) => (
              <HorizontalCard
                key={index}
                image={product?.image}
                originalPrice={product?.oldPrice}
                discount={product?.discount}
                title={product?.title}
                price={product?.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashDeals;
