import React, { useEffect, useState } from 'react';
import Button from '../Button';
import ProductCard from '../Cards/ProductCard';
import { Base_url } from '../../utils/Base_url';
import axios from 'axios';
import { H2 } from '../common/Heading';
import { Link } from 'react-router-dom';
const Crypto = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  const getCategoryProduct = (page = 1)=>{
    axios
      .get(`${Base_url}/products/productByCategory?productPage=${page}&productLimit=${limit}`)
      .then((res) => {
        console.log(res);
        const newFavorites = res?.data?.data || [];

        setProducts((prevFavorites) => {

          if (page === 1) {
            return newFavorites;
          }

          return [...prevFavorites, ...newFavorites];
        });
        console.log('====================================');
        console.log(res?.data?.data);
        console.log('====================================');
        setProducts(res?.data?.data);
        res?.data?.data?.map((item,index)=>{
          setTotalPages(item?.totalProductPages || 1);
        })
        
      })
      .catch((error) => {
        console.log(error);
      });


  }


  useEffect(() => {
    getCategoryProduct(currentPage);
  }, [currentPage]);
  const handleSeeMore = () => {
    // if (currentPage < totalPages) {
    
      setCurrentPage((prevPage) => prevPage + 1);
    // }
  };


  return (

    <>

      {products?.map((ImInsertTemplate, index) => {

const categoryId = ImInsertTemplate?.brandName
?.toLowerCase()
.replace(/\s+/g, "-")
.replace(/[^a-z0-9-]/g, "");


console.log('====================================');
console.log(categoryId);
console.log('====================================');

        return (
          <section  id={categoryId} className=" py-10">
            <div className="max-w-[1170px] mx-auto px-4">
              <div className=" flex  justify-between items-center">
                <div className=" pb-7">
                  <H2 className="text-2xl font-bold text-gray-800 mb-2">
                    {ImInsertTemplate?.brandName}
                  </H2>
                  <p className="text-gray-500">
                    Get Windows and Office much cheaper - breeze through daily work with an updated system!
                  </p>
                </div>
                <Link to={`/category/${ImInsertTemplate?._id}`} className="py-1 px-6 bg-blue-500 bg-blue transition duration-300 ease-in-out text-white font-semibold text-[12px] rounded-md  hover:bg-secondary">
                  Discover all
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {ImInsertTemplate?.products?.map((product, index) => (

                  <ProductCard url={`/product-details/${product?._id}`} image={product?.images?.[0]} title={product?.title} discount={product?.gst} price={product?.discountPrice} originalPrice={product?.actualPrice} />

                ))}
              </div>
              <div className="text-center mt-6">

                <div className="text-center mt-10 ">
                  {/* "See More" Button */}
                  {/* {currentPage < totalPages && ( */}

                  <button
                    onClick={handleSeeMore}
                    className="mb-3 text-sm text-blue font-medium hover:text-secondary py-2 px-4  rounded-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Show more
                  </button>

                  {/* )} */}
                  <hr />
                </div>
              </div>
            </div>
          </section>
        )
      })}


    
    </>


  );
};

export default Crypto;
