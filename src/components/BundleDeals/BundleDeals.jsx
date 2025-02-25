import React, { useEffect, useState } from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BundleDeals = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const [sliders, setSliders] = useState([]);
  const [curr, setCurr] = useState(0);
  const dispatch = useDispatch();

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

  useEffect(() => {
    axios
      .get(`${Base_url}/bundleDeals/getAll`)
      .then((res) => {
        const approvedProducts = res?.data?.data.filter(
          (product) => product.status === "approved"
        );
        setSliders(approvedProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const calculateTotalDiscountPrice = (products) => {
    return products.reduce((total, product) => total + parseFloat(product.discountPrice), 0);
  };

  const handleAddToCart = (products) => {
    products.forEach((product) => {
      dispatch(
        addToCart({
          _id: product._id,
          image: product.images[0],
          description: product.description,
          title: product.title,
          quantity: 1,
          price: product.discountPrice,
        })
      );
    });
    toast.success("Items added to cart successfully!");
  };

  return (
    <div className="p-6 bg-[#F9F9F9] sm:block hidden">
      <div className="max-w-[1170px] flex px-3 justify-between items-center mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Exclusive bundle deals</h2>
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
      <div className="max-w-[1170px] mx-auto border bg-white p-4 overflow-x-hidden">
        <div
          className="flex h-auto gap-4 w-full transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {sliders?.map((slide, index) => {
            const totalDiscountPrice = calculateTotalDiscountPrice(slide.productId);
            return (
              <div
                style={{ minWidth: '100%' }}
                key={index}
                className="flex items-center w-full space-x-3"
              >
                <div className="flex space-x-3 w-10/12">
                  {slide.productId.map((item) => (
                    <Link
                      to={`/product-details/${item?._id}`}
                      key={item._id}
                      className="flex sm:flex-row flex-col w-6/12 border rounded"
                    >
                      <div className="w-4/12  h-48">
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="w-6/12 flex flex-col p-3 justify-between">
                        <h3 className="text-sm font-medium">{item.title}</h3>
                        <div>
                          <p className="text-lg font-bold text-gray-900">
                            {item.discountPrice}
                          </p>
                          <p className="text-sm line-through text-gray-500">
                            {item.actualPrice}
                          </p>
                          <p className="w-10 text-[12px] rounded-md text-red-500 text-center bg-[#FAE9E7] border border-red-500">
                            {item.gst}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="w-3/12 border flex flex-col justify-between p-4 h-full rounded text-center">
                  <h3 className="text-[12px] font-medium text-end text-gray-500">
                    YOUR PRICE
                  </h3>
                  <div>
                    <p className="text-3xl font-bold text-end text-gray-900">
                      ${totalDiscountPrice.toFixed(2)}
                    </p>
                    <p className="text-sm text-green-500 text-end">
                      You save: ${(totalDiscountPrice * 0.5).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleAddToCart(slide.productId)}
                      className="mt-2 bg-blue w-full hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BundleDeals;