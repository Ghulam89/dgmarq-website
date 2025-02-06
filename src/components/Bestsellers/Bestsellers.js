import React, { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";




const Bestsellers = () => {

  
const [products,setProducts] = useState([]);



  useEffect(() => {
    axios
      .get(`${Base_url}/products/getBestSellers`)
      .then((res) => {
        console.log(res);

        setProducts(res?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });





  }, []);


  return (
    <div className="py-8  bg-gray-50">
     

      {/* Header */}
    

      <section className=" py-10">
      <div className="max-w-[1170px] mx-auto px-4">
         {/* Categories */}
      <div className="flex overflow-x-auto  nav_item">
  {[
    "Bestsellers",
    "Gaming gift cards",
    "Upcoming games",
    "Trending categories",
    "Software",
    "Cryptocurrencies",
    "Random Keys",
    "Game Accounts",
  ].map((category) => (
    <button
      key={category}
      className="py-3.5 px-6 bg-white border  text-sm font-semibold shadow-sm text-gray-700 whitespace-nowrap hover:bg-gray-100"
    >
      {category}
    </button>
  ))}
</div>
      <div className=" py-6 flex  justify-between">
       <div>
       <h2 className="text-2xl font-bold">Bestsellers</h2>
        <p className=" text-sm pt-1">
          The hottest items on our marketplace – discover what captured our
          users' hearts!
        </p>
       </div>

       <div>
       <button className="py-1 px-6 bg-blue-500 bg-blue transition duration-300 ease-in-out text-white font-semibold text-[12px] rounded-md  hover:bg-secondary">
          Discover all
        </button>
       </div>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product, index) => (
            
            
            <ProductCard url={`/product-details/${product?.productDetails?._id}`} image={product?.productDetails?.images?.[0]} title={product?.productDetails?.title} discount={product?.productDetails?.gst}
               price={product?.productDetails?.discountPrice} originalPrice={product?.productDetails?.actualPrice} />
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="mb-3 text-sm text-blue font-medium  hover:text-secondary hover:underline">
            Show more
          </button>
          <hr/>
        </div>
      </div>
    </section>
     
    </div>



  );
};

export default Bestsellers;
