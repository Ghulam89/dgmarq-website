import React, { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import { Link } from "react-router-dom";

const Bestsellers = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 6;

  const fetchFavorites = (page = 1) => {
    axios
      .get(`${Base_url}/products/getBestSellers?page=${page}&limit=${limit}`)
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
        console.error("Error fetching bestsellers:", error);
      });
  };

  useEffect(() => {
    fetchFavorites(currentPage);
  }, [currentPage]);

  const handleReadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleReadLess = () => {
    setProducts([]);
    setCurrentPage(1);
    fetchFavorites(1);
  };

  return (
    <div id="bestSellers" className="py-8 bg-gray-50">
      <section className="pb-10">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="py-6 flex flex-wrap gap-2 justify-between">
            <div>
              <h2 className="text-2xl font-bold">Bestsellers</h2>
              <p className="text-sm pt-1">
                The hottest items on our marketplace – discover what captured our users' hearts!
              </p>
            </div>
            <div>
              <Link to="/shop" className="py-1 px-6 bg-blue transition duration-300 ease-in-out text-white font-semibold text-[12px] rounded-md hover:bg-secondary">
                Discover all
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                url={`/product-details/${product?.productDetails?._id}`}
                image={product?.productDetails?.images?.[0]}
                title={product?.productDetails?.title}
                discount={product?.productDetails?.gst}
                price={product?.productDetails?.discountPrice}
                originalPrice={product?.productDetails?.actualPrice}
                like={product?.productDetails?.likes}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex  justify-center items-center my-10">

              {currentPage>1 && (
                <button
                onClick={handleReadLess}
                className="text-sm text-blue font-medium hover:text-secondary py-2 px-4 rounded-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Read Less
              </button>
              )}
                 
              <button
                onClick={handleReadMore}
                className="text-sm text-blue font-medium hover:text-secondary py-2 px-4 rounded-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Read More
              </button>

           
            </div>
          )}
          <hr />
        </div>
      </section>
    </div>
  );
};

export default Bestsellers;
