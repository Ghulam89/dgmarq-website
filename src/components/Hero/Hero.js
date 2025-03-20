import React, { useEffect, useState } from "react";
import HomeCard from "../Cards/HomeCard";
import { FaWindows, FaXbox, FaPlaystation, FaGamepad } from "react-icons/fa";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import Button from "../Button";
import { Link } from "react-router-dom";

const Hero = () => {
  const data = [
    {
      id: 1,
      image: require("../../assets/images/home-card1.avif"),
    },
    {
      id: 2,
      image: require("../../assets/images/home-card2.avif"),
    },
    {
      id: 3,
      image: require("../../assets/images/home-card3.avif"),
    },
    {
      id: 4,
      image: require("../../assets/images/home-card4.avif"),
    },
  ];


  const [slider, setSlider] = useState([]);
  useEffect(() => {
    axios
      .get(`${Base_url}/slider/getAll`)
      .then((res) => {
        console.log(res);

        setSlider(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const [allProductSecond, setProductSecond] = useState({})

  const [products, setProducts] = useState({});
  const [productKey, setProductKey] = useState({});
  const [upcoming, setUpcoming] = useState({});

  console.log('====================================');
  console.log(products, 'products');
  console.log('====================================');
  const fetchFavorites = () => {
    axios
      .get(`${Base_url}/products/getBestSellers`)
      .then((res) => {
        const newFavorites = res?.data?.data[0]?.productDetails;

        setProducts(newFavorites)
      })
      .catch((error) => {
        console.error("Error fetching bestsellers:", error);
      });
  };


  const fetchUpcoming = () => {
    axios
      .get(`${Base_url}/products/getProductByAccount`)
      .then((res) => {
        const newFavorites = res?.data?.data[0];

        setProductSecond(newFavorites);


      })
      .catch((error) => {
        console.error("Error fetching bestsellers:", error);
      });
  };

  const fetchKey = () => {
    axios
      .get(`${Base_url}/products/getProductByKey`)
      .then((res) => {
        const newFavorites = res?.data?.data?.[0] || [];

        setProductKey(newFavorites);

      })
      .catch((error) => {
        console.error("Error fetching bestsellers:", error);
      });
  };

  useEffect(() => {


    fetchFavorites();
    fetchUpcoming();
    fetchKey();

    axios
      .get(`${Base_url}/upcoming/getAll`)
      .then((res) => {
        console.log(res);

        setUpcoming(res?.data?.data?.[0])

      })
      .catch((error) => {
        console.log(error);
      });

  }, []);





  return (
    <>
      <div className="  flex justify-center  items-center bg-home bg-cover bg-center w-full py-8">
      <div className="flex flex-nowrap gap-5 px-3 max-w-[1170px] mx-auto overflow-x-auto w-full">
        
  {[products, allProductSecond, productKey, upcoming].map((product, index) => (
    <Link
      key={index}
      to={`/product-details/${product?._id || product?.productId?._id}`}
      className="flex-shrink-0 w-[250px] hover:transform hover:translate-y-[-2px] relative"
    >
      <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden h-full">
        {product?.images || product?.productId?.images ? (
          <img
            src={product?.images?.[0] || product?.productId?.images?.[0]}
            className="w-full h-full object-cover"
            alt=""
          />
        ) : null}
        <div className="absolute inset-0 flex justify-end items-end p-4 hover:bg-[rgba(0,0,0,0.2)] transition duration-300 ease-in-out">
          <div className="w-full sm:w-[70%] mx-auto">
            <Button
              label={"View Item"}
              className="bg-blue hover:bg-secondary whitespace-nowrap w-full px-3 mx-auto rounded-sm text-sm transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </Link>
  ))}

</div>

      </div>
      <div className="bg-gray-100 ">
        <div className="py-6   max-w-[1170px] mx-auto  px-3 flex sm:flex-row flex-col justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Choose your platform</h2>
          <div className="flex sm:flex-row flex-col sm:space-x-8 space-y-4 sm:space-y-0">
            {/* PC */}
            <Link to={`/shop?platform=${'PC'}`} className="flex sm:flex-row flex-col gap-3 px-2.5 py-1.5 rounded-md items-center cursor-pointer hover:bg-gray-200">
              <FaWindows className="text-3xl" />
              <span className="text-sm">PC</span>
            </Link>

            {/* Xbox */}
            <Link to={`/shop?platform=${'Xbox'}`} className="flex sm:flex-row flex-col gap-3 px-2.5 py-1.5 rounded-md items-center cursor-pointer hover:bg-gray-200">
              <FaXbox className="text-3xl" />
              <span className="text-sm">Xbox</span>
            </Link>

            {/* PlayStation */}
            <Link to={`/shop?platform=${'PlayStation'}`} className="flex sm:flex-row flex-col gap-3 px-2.5 py-1.5 rounded-md items-center cursor-pointer hover:bg-gray-200">
              <FaPlaystation className="text-3xl" />
              <span className="text-sm">PlayStation</span>
            </Link>

            {/* Nintendo */}
            <Link to={`/shop?platform=${'Nintendo'}`} className="flex sm:flex-row flex-col gap-3 px-2.5 py-1.5 rounded-md items-center cursor-pointer hover:bg-gray-200">
              <FaGamepad className="text-3xl" />
              <span className="text-sm">Nintendo</span>
            </Link>
          </div>
          <div>

          </div>
        </div>
      </div>


    </>
  );
};

export default Hero;
