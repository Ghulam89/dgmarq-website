import React, { useEffect, useState } from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const BundleDeals = ({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
    price,
    qty,
    setQty,
}) => {
    

    const sliders = [
        {
            sliderData :[
                { 
                    
                    id:1,
                    image:'https://images.g2a.com/newlayoutwp/147x198/1x1x0/call-of-duty-black-ops-6-pc-steam-account-global-i10000505991013/01e16181c8dd4119a8ea9603',
        

                }
            ]
           
        }
    ]
       const [curr, setCurr] = useState(0);
        const prev = () =>
            setCurr((curr) => (curr === 0 ? sliders - 1 : curr - 1));
        const next = () =>
            setCurr((curr) => (curr === sliders - 1 ? 0 : curr + 1));
    
        useEffect(() => {
            if (!autoSlide) return;
            const slideInterval = setInterval(next, autoSlideInterval);
            return () => clearInterval(slideInterval);
        }, []);
    
    
    
        const goToSlide = (index) => {
            setCurr(index);
          };




        
    

  return (
    <div className="p-6 bg-[#F9F9F9]  sm:block hidden">
        <div  className=" max-w-[1170px] flex px-3 justify-between items-center mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Exclusive bundle deals</h2>
       {/* Pagination */}
       <div className="flex justify-between gap-2 items-center mb-4">
          <p className="text-[12px] text-gray-500">Bundle 1 of 6</p>
          <div className="space-x-3">
            <button  onClick={prev} className="bg-blue  w-8 h-8   hover:bg-secondary text-white py-1 px-3 rounded">
              <TfiAngleLeft size={10} className="" />
            </button>
            <button onClick={next} className=" bg-blue w-8 h-8 hover:bg-secondary text-white py-1 px-3 rounded">
              <TfiAngleRight  size={10} />
            </button>
          </div>
        </div>
      </div>
      <div className=" max-w-[1170px] mx-auto  px-3 ">
      <div
                        className="flex   w-full h-auto  p-4 border bg-white transition-transform ease-out duration-500"
                        style={{ transform: `translateX(-${curr * 100}%)` }}
                    >

<div className="flex items-center w-full space-x-3">
         <div className=" flex space-x-3 w-10/12">
             {/* First Item */}
          <div className="flex sm:flex-row flex-col  w-6/12 border  rounded">
            <div className=" w-4/12">
            <img
              src="https://images.g2a.com/newlayoutwp/147x198/1x1x0/call-of-duty-black-ops-6-pc-steam-account-global-i10000505991013/01e16181c8dd4119a8ea9603"
              alt="Game 1"
              className="w-full"
            />
            </div>
            <div className=" w-6/12 flex flex-col p-3   justify-between">
            <h3 className="text-sm font-medium">
              Call of Duty: Black Ops 6 (PC) - Steam Account - GLOBAL
            </h3>
            <div>
            <p className="text-lg font-bold text-gray-900">$48.63</p>
            <p className="text-sm line-through text-gray-500">$92.04</p>
            <p className=" w-10 text-[12px] rounded-md  text-red-500 text-center bg-[#FAE9E7] border border-red-500">-41%</p>
            </div>
            </div>
          </div>

    
          {/* Plus Icon */}
          {/* <div className="text-center text-xl font-bold">+</div> */}

          {/* First Item */}
          <div className="flex sm:flex-row flex-col  w-6/12 border  rounded">
            <div className=" w-4/12">
            <img
              src="https://images.g2a.com/newlayoutwp/147x198/1x1x0/call-of-duty-black-ops-6-pc-steam-account-global-i10000505991013/01e16181c8dd4119a8ea9603"
              alt="Game 1"
              className="w-full"
            />
            </div>

            <div className=" w-6/12 flex flex-col p-3   justify-between">
            <h3 className="text-sm font-medium">
              Call of Duty: Black Ops 6 (PC) - Steam Account - GLOBAL
            </h3>
            <div>
            <p className="text-lg font-bold text-gray-900">$48.63</p>
            <p className="text-sm line-through text-gray-500">$92.04</p>
            <p className=" w-10 text-[12px] rounded-md  text-red-500 text-center bg-[#FAE9E7] border border-red-500">-41%</p>
            </div>
            </div>
            
          </div>
         </div>
          

          {/* Equals Icon */}
          {/* <div className="text-center text-xl font-bold">=</div> */}

          {/* Total Price */}
          <div className=" w-3/12 border flex flex-col justify-between p-4 h-full rounded text-center">
          <h3 className="text-[12px] font-medium text-end text-gray-500">YOUR PRICE</h3>
           <div  className="">
           
            <p className="text-3xl font-bold text-end text-gray-900">$51.13</p>
            <p className="text-sm text-green-500 text-end">You save: $33.54</p>
            <button className="mt-2 bg-blue w-full hover:bg-blue-600 text-white py-2 px-4 rounded">
              Add to cart
            </button>
           </div>
          
          </div>
        </div>

        
                        </div>

       

      </div>
    </div>
  );
};

export default BundleDeals;
