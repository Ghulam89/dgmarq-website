import React, { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";


const GameAccountsSection = () => {

  const [products,setProducts] =useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;
  const fetchFavorites = (page = 1) => {
    axios
      .get(`${Base_url}/products/getProductByKey?page=${page}&limit=${limit}`)
      .then((res) => {
        const newFavorites = res?.data?.data || [];

        setProducts((prevFavorites) => {

          if (page === 1) {
            return newFavorites;
          }

          return [...prevFavorites, ...newFavorites];
        });


        setTotalPages(res?.data?.totalPages || 1);
      })
      .catch((error) => {
        console.error("Error fetching favorites:", error);
      });
  };


  useEffect(() => {
    fetchFavorites(currentPage);
  }, [currentPage]);
  const handleSeeMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className=" ">
     

      {/* Header */}
    

      <section id="gift-cards" className=" py-10">
      <div className="max-w-[1170px] mx-auto px-4">
      
      <div className=" py-6 flex  justify-between">
       <div>
       <h2 className="text-2xl font-bold">Top up your gaming account</h2>
        <p className="text-gray-500">
        Add some funds in a flash and enjoy new games, DLC, and more!


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
            

            <ProductCard url={`/product-details/${product?._id}`} image={product?.images?.[0]} title={product?.title} discount={product?.gst}
            price={product?.discountPrice} originalPrice={product?.actualPrice} />

          ))}
        </div>
        <div className="text-center mt-10 ">
            {currentPage < totalPages && (

              <button
                onClick={handleSeeMore}
                className="mb-3 text-sm text-blue font-medium hover:text-secondary py-2 px-4  rounded-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Show more
              </button>

            )}
            <hr />
          </div>
      </div>
    </section>
     
    </div>



  );
};

export default GameAccountsSection;
