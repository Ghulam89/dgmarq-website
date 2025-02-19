import React, { useEffect, useState } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import HorizontalCard from '../Cards/HorizontalCard';
import axios from 'axios';
import { Base_url } from '../../utils/Base_url';

const ProductSlider = ({
    autoSlide = false,
    autoSlideInterval = 3000,
}) => {
    const [sliders, setSliders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const limit = 6;

    const fetchSliders = (page = 1) => {
        axios
            .get(`${Base_url}/products/getProductByAccount?page=${page}&limit=${limit}`)
            .then((res) => {
                const newSliders = res?.data?.data || [];
                setSliders(newSliders);
                setTotalPages(res?.data?.totalPages || 1);
            })
            .catch((error) => {
                console.error("Error fetching sliders:", error);
            });
    };

    useEffect(() => {
        fetchSliders(currentPage);
    }, [currentPage]);

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const next = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [currentPage, autoSlide, autoSlideInterval]);

    return (
        <>
            <div className='relative'>
                <div className='max-w-6xl overflow-hidden mx-auto'>
                    <div className="flex sm:h-[50vh] h-auto transition-transform ease-out duration-500">
                        <div className="px-2 flex-none w-full h-full">
                            <div className="grid gap-5 sm:grid-cols-3 grid-cols-2">
                                {sliders.map((product, index) => (
                                    <HorizontalCard
                                        key={index}
                                        url={`/product-details/${product?._id}`}
                                        image={product?.images?.[0]}
                                        title={product?.title}
                                        discount={product?.gst}
                                        price={product?.discountPrice}
                                        originalPrice={product?.actualPrice}
                                        like={product?.likes}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full shadow absolute sm:top-[35%] sm:left-56 left-5 border flex hover:bg-secondary hover:text-white justify-center items-center bg-white/80 text-gray-800"
                >
                    <TfiAngleLeft size={20} />
                </button>
                <button
                    onClick={next}
                    className="w-12 h-12 rounded-full border absolute sm:top-[35%] sm:right-56 right-5 hover:bg-secondary hover:text-white flex justify-center items-center shadow bg-white/80 text-gray-800"
                >
                    <TfiAngleRight size={20} />
                </button>
            </div>

            <div className="flex items-center justify-center pt-6 pb-5 gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`transition-all w-3 h-3 rounded-full cursor-pointer overflow-hidden ${currentPage === i + 1 ? "bg-secondary" : "bg-gray-300 bg-opacity-50"
                            }`}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default ProductSlider;