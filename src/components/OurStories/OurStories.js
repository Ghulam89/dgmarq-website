
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurStories = () => {
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsAutoPlay(scrollPosition <= 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="flex bg-[#f4f4f4] flex-col gap-4 sm:flex-row items-center justify-between px-4 sm:px-8 py-6">
            {/* Social Media Icons */}
            <div className="flex sm:flex-col gap-4 sm:gap-6 items-center sm:items-start">

            </div>

            {/* Swiper Section */}
            <div className="w-full sm:w-8/12 lg:w-8/12">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={
                        isAutoPlay ? { delay: 3000, disableOnInteraction: false } : false
                    }
                    loop={true}
                    pagination={{ clickable: true }}
                    className="h-auto  sm:h-[70vh]"
                >
                   

                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div className="flex  sm:flex-row flex-col gap-4 justify-center items-center h-full">
                            <div className="text-center sm:w-6/12 w-12/12">
                                <img
                                    src={"https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2022/08/success_stories_g2a_1.png"}

                                    alt="Quran Image"
                                    className="mx-auto"
                                />

                            </div>
                            <div className="  sm:w-6/12 w-12/12">
                                <h1 className=" text-black  font-extrabold mb-4 sm:text-6xl text-4xl">OUR STORIES</h1>
                                <p>My adventure at G2A.COM as a Data Industry Analyst allows me to excel in various areas that I love.</p>
                                <p>I start the week by analyzing Web3, the gaming industry, and my themed feed on X. In the middle of the week, I conduct industry brainstorming sessions with our business partners. Fridays are dedicated to deepening my knowledge and catching up on newsletters.</p>
                                <p>Every day, I use Miro and Figma, my favorite tools, which help me transform acquired knowledge into insights and reports for our company. With up-to-date market data, making precise decisions becomes much easier.</p>
                                <p>In my free time, I co-create the podcast “Nordic Walking through Rotterdam,” and spend my evenings glued to my Nintendo Switch or reading gaming biographies, or something equally fascinating.</p>

                                <div className=" pt-5">
                                    <span className=" font-medium">Konrad Rudy</span>
                                    <p className=" text-gray-400">Head of Technology</p>
                                    <p className=" text-gray-400">G2A'nian since 2016</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                       
                       {/* Slide 1 */}
                       <SwiperSlide>
                        <div className="flex  sm:flex-row flex-col gap-4 justify-center items-center h-full">
                            <div className="text-center sm:w-6/12 w-12/12">
                                <img
                                    src={"https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2022/08/success_stories_g2a_3.png"}

                                    alt="Quran Image"
                                    className="mx-auto"
                                />

                            </div>
                            <div className="  sm:w-6/12 w-12/12">
                                <h1 className=" text-black  font-extrabold mb-4 sm:text-6xl text-4xl">OUR STORIES</h1>
                                <p>My adventure at G2A.COM as a Data Industry Analyst allows me to excel in various areas that I love.</p>
                                <p>I start the week by analyzing Web3, the gaming industry, and my themed feed on X. In the middle of the week, I conduct industry brainstorming sessions with our business partners. Fridays are dedicated to deepening my knowledge and catching up on newsletters.</p>
                                <p>Every day, I use Miro and Figma, my favorite tools, which help me transform acquired knowledge into insights and reports for our company. With up-to-date market data, making precise decisions becomes much easier.</p>
                                <p>In my free time, I co-create the podcast “Nordic Walking through Rotterdam,” and spend my evenings glued to my Nintendo Switch or reading gaming biographies, or something equally fascinating.</p>

                                <div className=" pt-5">
                                    <span className=" font-medium">Konrad Rudy</span>
                                    <p className=" text-gray-400">Head of Technology</p>
                                    <p className=" text-gray-400">G2A'nian since 2016</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>



                      {/* Slide 1 */}
                      <SwiperSlide>
                        <div className="flex  sm:flex-row flex-col gap-4 justify-center items-center h-full">
                            <div className="text-center sm:w-6/12 w-12/12">
                                <img
                                    src={"https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2022/08/success_stories_g2a_4.png"}

                                    alt="Quran Image"
                                    className="mx-auto"
                                />

                            </div>
                            <div className="  sm:w-6/12 w-12/12">
                                <h1 className=" text-black  font-extrabold mb-4 sm:text-6xl text-4xl">OUR STORIES</h1>
                                <p>My adventure at G2A.COM as a Data Industry Analyst allows me to excel in various areas that I love.</p>
                                <p>I start the week by analyzing Web3, the gaming industry, and my themed feed on X. In the middle of the week, I conduct industry brainstorming sessions with our business partners. Fridays are dedicated to deepening my knowledge and catching up on newsletters.</p>
                                <p>Every day, I use Miro and Figma, my favorite tools, which help me transform acquired knowledge into insights and reports for our company. With up-to-date market data, making precise decisions becomes much easier.</p>
                                <p>In my free time, I co-create the podcast “Nordic Walking through Rotterdam,” and spend my evenings glued to my Nintendo Switch or reading gaming biographies, or something equally fascinating.</p>

                                <div className=" pt-5">
                                    <span className=" font-medium">Konrad Rudy</span>
                                    <p className=" text-gray-400">Head of Technology</p>
                                    <p className=" text-gray-400">G2A'nian since 2016</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                      {/* Slide 1 */}
                      <SwiperSlide>
                        <div className="flex  sm:flex-row flex-col gap-4 justify-center items-center h-full">
                            <div className="text-center sm:w-6/12 w-12/12">
                                <img
                                    src={"https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2023/07/GD-20095_Edycja_grafiki_na_strone_karier_g2a_com2.png"}

                                    alt="Quran Image"
                                    className="mx-auto"
                                />

                            </div>
                            <div className="  sm:w-6/12 w-12/12">
                                <h1 className=" text-black  font-extrabold mb-4 sm:text-6xl text-4xl">OUR STORIES</h1>
                                <p>My adventure at G2A.COM as a Data Industry Analyst allows me to excel in various areas that I love.</p>
                                <p>I start the week by analyzing Web3, the gaming industry, and my themed feed on X. In the middle of the week, I conduct industry brainstorming sessions with our business partners. Fridays are dedicated to deepening my knowledge and catching up on newsletters.</p>
                                <p>Every day, I use Miro and Figma, my favorite tools, which help me transform acquired knowledge into insights and reports for our company. With up-to-date market data, making precise decisions becomes much easier.</p>
                                <p>In my free time, I co-create the podcast “Nordic Walking through Rotterdam,” and spend my evenings glued to my Nintendo Switch or reading gaming biographies, or something equally fascinating.</p>

                                <div className=" pt-5">
                                    <span className=" font-medium">Konrad Rudy</span>
                                    <p className=" text-gray-400">Head of Technology</p>
                                    <p className=" text-gray-400">G2A'nian since 2016</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                   
                </Swiper>
            </div>
            <div></div>
        </div>
    );
};

export default OurStories;