import React, { useEffect, useState } from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const BundleDeals = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const sliders = [
    {
      sliderData: [
        {
          id: 1,
          image:
            "https://images.g2a.com/newlayoutwp/147x198/1x1x0/call-of-duty-black-ops-6-pc-steam-account-global-i10000505991013/01e16181c8dd4119a8ea9603",
          title: "Call of Duty: Black Ops 6 (PC) - Steam Account - GLOBAL",
          price: "$48.63",
          oldPrice: "$92.04",
          discount: "-41%",
        },
        {
          id: 2,
          image:
            "https://images.g2a.com/newlayoutwp/147x198/1x1x0/assassins-creed-valhalla-pc-ubisoft-connect-key-global-i10000273183001/01e16181c8dd4119a8ea9603",
          title: "Assassin's Creed Valhalla (PC) - Ubisoft Connect - GLOBAL",
          price: "$35.99",
          oldPrice: "$59.99",
          discount: "-40%",
        },
      ],
    },
    {
      sliderData: [
        {
          id: 3,
          image:
            "https://images.g2a.com/newlayoutwp/147x198/1x1x0/elden-ring-pc-steam-key-global-i10000388392004/01e16181c8dd4119a8ea9603",
          title: "Elden Ring (PC) - Steam Key - GLOBAL",
          price: "$45.00",
          oldPrice: "$69.99",
          discount: "-36%",
        },
        {
          id: 4,
          image:
            "https://images.g2a.com/newlayoutwp/147x198/1x1x0/god-of-war-pc-steam-key-global-i10000321569002/01e16181c8dd4119a8ea9603",
          title: "God of War (PC) - Steam Key - GLOBAL",
          price: "$39.99",
          oldPrice: "$49.99",
          discount: "-20%",
        },
      ],
    },
  ];

  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((prevCurr) => (prevCurr > 0 ? prevCurr - 1 : sliders.length - 1));
  };

  const next = () => {
    setCurr((prevCurr) => (prevCurr < sliders.length - 1 ? prevCurr + 1 : 0));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="p-6 bg-[#F9F9F9] sm:block hidden">
      <div className="max-w-[1170px] flex px-3 justify-between items-center mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Exclusive bundle deals</h2>
        {/* Pagination */}
        <div className="flex justify-between gap-2 items-center mb-4">
          <p className="text-[12px] text-gray-500">
            Bundle {curr + 1} of {sliders.length}
          </p>
          <div className="space-x-3">
            <button
              onClick={prev}
              className={`w-8 h-8 hover:bg-secondary text-white py-1 px-3 rounded ${
                curr === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue"
              }`}
            >
              <TfiAngleLeft size={10} />
            </button>
            <button
              onClick={next}
              className={`w-8 h-8 hover:bg-secondary text-white py-1 px-3 rounded ${
                curr === sliders.length - 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue"
              }`}
            >
              <TfiAngleRight size={10} />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto border bg-white p-4  overflow-x-hidden">
        <div
    className="flex h-auto gap-4  w-full  transition-transform ease-out duration-500"
    style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {sliders.map((slide, index) => (
            <div
             style={{minWidth:'100%'}}
              key={index}
              className="flex  items-center w-full space-x-3"
            >
              <div className="flex space-x-3 w-10/12">
                {slide.sliderData.map((item) => (
                  <div
                    key={item.id}
                    className="flex sm:flex-row flex-col w-6/12 border rounded"
                  >
                    <div className="w-4/12">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full"
                      />
                    </div>
                    <div className="w-6/12 flex flex-col p-3 justify-between">
                      <h3 className="text-sm font-medium">{item.title}</h3>
                      <div>
                        <p className="text-lg font-bold text-gray-900">
                          {item.price}
                        </p>
                        <p className="text-sm line-through text-gray-500">
                          {item.oldPrice}
                        </p>
                        <p className="w-10 text-[12px] rounded-md text-red-500 text-center bg-[#FAE9E7] border border-red-500">
                          {item.discount}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Total Price */}
              <div className="w-3/12 border flex flex-col justify-between p-4 h-full rounded text-center">
                <h3 className="text-[12px] font-medium text-end text-gray-500">
                  YOUR PRICE
                </h3>
                <div>
                  <p className="text-3xl font-bold text-end text-gray-900">
                    $99.99
                  </p>
                  <p className="text-sm text-green-500 text-end">
                    You save: $50.00
                  </p>
                  <button className="mt-2 bg-blue w-full hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BundleDeals;
