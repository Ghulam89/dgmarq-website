import React, { useState, useEffect } from "react";
import HorizontalCard from "../Cards/HorizontalCard";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";

const FlashDeals = () => {
  const [products, setProducts] = useState({});
  const flashDealStartDate = products?.[0]?.startDate
    ? new Date(products[0].startDate).getTime()
    : null;

  const flashDealEndDate = products?.[0]?.endDate
    ? new Date(products[0].endDate).getTime()
    : null;

  const calculateTimeLeft = () => {
    const now = new Date().getTime();

    if (flashDealStartDate && now < flashDealStartDate) {
      const difference = flashDealStartDate - now;
      return {
        status: "Coming Soon",
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else if (
      flashDealStartDate &&
      flashDealEndDate &&
      now >= flashDealStartDate &&
      now <= flashDealEndDate
    ) {
      const difference = flashDealEndDate - now;
      return {
        status: "Active",
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { status: "Ended", days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [flashDealStartDate, flashDealEndDate]);

  useEffect(() => {
    axios
      .get(`${Base_url}/flashDeals/getAll`)
      .then((res) => {
        console.log(res,'flash deals===>>>');


        const approvedProducts = res?.data?.data.filter(
          (product) => product.status === "approved"
        );

        if (approvedProducts.length > 0) {
          setProducts([approvedProducts[0]]);
        } else {
          setProducts([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });


  }, []);

  return (
    <>
    {products?.[0]?.status==='approved'?
    <div className="bg-Flash_bg hidden sm:block py-14 w-full h-auto relative bg-cover bg-center">
    <div className="flex max-w-[1170px] items-center gap-12 mx-auto justify-center">
      {/* Flash Deal Section */}
      <div className="w-4/12 rounded-lg relative text-white">
        <div className="absolute -top-[235px] w-72 right-8">
          <h2 className="text-xl font-bold text-center mb-4">Flash Deal -
            {timeLeft.status === "Coming Soon"
              ? "Starts in"
              : timeLeft.status === "Active"
                ? "Ends in"
                : "Deal Ended"}
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
            src={products?.[0]?.image}
            alt="ExpressVPN"
            className="w-full rounded-lg mb-4"
          />
          <p>
            {products?.[0]?.title}
          </p>
          <div className="flex justify-between text-sm mt-4">
            <span>Left: 0</span>
            <span>Sold: 50</span>
          </div>
          <div className="h-2 bg-gray-700 mt-2 rounded">
            <div className="bg-blue-500 h-full w-1/2 rounded"></div>
          </div>

          <div className=" pt-4 px-2">
            <p className=" text-2xl m-0 ">${products?.[0]?.actualPrice}</p>
            <p className="   line-through text-gray-500 m-0 ">${products?.[0]?.discountPrice}
            {/* <button className=" w-10 text-[12px] rounded-md  text-red-500 bg-[#FAE9E7] border border-red-500">${products?.[0]?.gst}</button>  */}
       </p>
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
          {products?.[0]?.productId?.map((product, index) => (
            <HorizontalCard
              key={index}
              image={product?.images?.[0]}
              originalPrice={product?.actualPrice}
              discount={product?.gst}
              title={product?.title}
              url={`/product-details/${product?._id}`}
              price={product?.discountPrice}
            />
          ))}
        </div>
      </div>
    </div>
  </div>:null
    }
    </>
    
  );
};

export default FlashDeals;
