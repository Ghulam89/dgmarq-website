import React, { useEffect, useState } from 'react'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import HorizontalCard from '../Cards/HorizontalCard';

const ProductSlider = ({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
    price,
    qty,
    setQty,
}) => {




    const sliders = [
        {
            id: 1,
            title: "Call of Duty: Modern Warfare III",
            subtitle: "(PC) - Steam Account",
            price: "$34.35",
            oldPrice: "$39.99",
            tag: "SPONSORED",
            image:
                "https://images.g2a.com/170x228/1x1x0/random-vip-5-keys-steam-key-global/ea23eaead2c04b2d8744893e", // Replace with the actual image
        },
        {
            id: 2,
            title: "Random Black Friday 1 Key",
            subtitle: "(PC) - Steam Key - GLOBAL",
            price: "$5.87",
            tag: "SPONSORED",
            image:
                "https://images.g2a.com/170x228/1x1x0/random-vip-5-keys-steam-key-global/ea23eaead2c04b2d8744893e",
        },
        {
            id: 3,
            title: "Battlefield 2042",
            subtitle: "(Xbox Series X/S) - Xbox Live Key",
            price: "$12.06",
            tag: "OFFER FROM 6 SELLERS",
            image:
                "https://images.g2a.com/170x228/1x1x0/random-vip-5-keys-steam-key-global/ea23eaead2c04b2d8744893e",
        },
        {
            id: 4,
            title: "Max Payne (PC)",
            subtitle: "Steam Key - GLOBAL",
            price: "$4.77",
            tag: "OFFER FROM 23 SELLERS",
            image:
                "https://images.g2a.com/170x228/1x1x0/random-vip-5-keys-steam-key-global/ea23eaead2c04b2d8744893e",
        },
        {
            id: 4,
            title: "Max Payne (PC)",
            subtitle: "Steam Key - GLOBAL",
            price: "$4.77",
            tag: "OFFER FROM 23 SELLERS",
            image:
                "https://images.g2a.com/170x228/1x1x0/random-vip-5-keys-steam-key-global/ea23eaead2c04b2d8744893e",
        }, {
            id: 4,
            title: "Max Payne (PC)",
            subtitle: "Steam Key - GLOBAL",
            price: "$4.77",
            tag: "OFFER FROM 23 SELLERS",
            image:
                "https://images.g2a.com/170x228/1x1x0/random-vip-5-keys-steam-key-global/ea23eaead2c04b2d8744893e",
        }
    ];



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
        <>
            <div className=' relative '>
                <div className='max-w-7xl overflow-hidden mx-auto'>
                    <div
                        className="flex  sm:h-[55vh] h-auto transition-transform ease-out duration-500"
                        style={{ transform: `translateX(-${curr * 100}%)` }}
                    >
                        {sliders?.map((s) => (
                            <>
                                <div className="  px-2  flex-none  w-full h-full">
                                    <div className="  grid  gap-5 sm:grid-cols-3 grid-cols-2">
                                        {sliders?.map((product, index) => (

                                            <HorizontalCard image={product?.image} title={product?.title} price={product?.price} />

                                        ))}
                                    </div>
                                </div>


                            </>
                        ))}
                    </div>
                </div>


                <button
                    onClick={prev}
                    className=" w-12 h-12 rounded-full shadow  absolute sm:top-[25%]   sm:left-32 left-5 border  flex  hover:bg-secondary hover:text-white  justify-center items-center bg-white/80 text-gray-800"
                >
                    <TfiAngleLeft size={20} className="" />
                </button>
                <button
                    onClick={next}
                    className=" w-12 h-12  rounded-full   border  absolute sm:top-[25%]  sm:right-32 right-5  hover:bg-secondary hover:text-white flex justify-center items-center shadow bg-white/80 text-gray-800"
                >
                    <TfiAngleRight size={20} />
                </button>

            </div>

            <div className="flex items-center justify-center pt-6 gap-2">
                {sliders?.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`
transition-all w-4 h-4 rounded-full   cursor-pointer overflow-hidden  
${curr === i ? " bg-secondary" : "   bg-gray-300 bg-opacity-50"}
`}
                    >
                      
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductSlider
