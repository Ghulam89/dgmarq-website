import React, { useEffect, useState } from 'react'
import { H2, H3, H4 } from '../common/Heading'
import ProductCard from '../Cards/ProductCard'
import { Base_url } from '../../utils/Base_url';
import axios from 'axios';
import { Link } from 'react-router-dom';

const   Upcoming = () => {


  const [microsoft, setMicrosoft] = useState([]);

  const GetProductByAccount = (page = 1) => {
    axios
      .get(`${Base_url}/products/getProductByMicrosoft?page=${page}&limit=${limit}`)
      .then((res) => {
        const newFavorites = res?.data?.data || [];
        setMicrosoft(newFavorites)
      })
      .catch((error) => {
        console.error("Error fetching favorites:", error);
      });
  };

  useEffect(() => {
    GetProductByAccount();
  }, []);



  const [upcoming, setUpcoming] = useState([]);






  useEffect(() => {
    axios
      .get(`${Base_url}/upcoming/getAll`)
      .then((res) => {
        console.log(res);

        setUpcoming(res?.data?.data)

      })
      .catch((error) => {
        console.log(error);
      });


  }, []);


  const [allProductSecond, setProductSecond] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 6;

  const fetchFavorites = (page = 1) => {
    axios
      .get(`${Base_url}/products/getProductByAccount?page=${page}&limit=${limit}`)
      .then((res) => {
        const newFavorites = res?.data?.data || [];

        setProductSecond((prevFavorites) => {
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
    setProductSecond([]);
    setCurrentPage(1);
    fetchFavorites(1);
  };


  return (
    <>

     <div className=' sm:block hidden'>
     <div id='upcoming-games' className=' mt-3 max-w-[1170px] mx-auto mb-12 px-3'>
        <H2>New and upcoming releases
        </H2>

      </div>
      <div className='flex sm:flex-row flex-col sm:gap-0 gap-2 justify-between items-stretch w-full'>
  {upcoming?.map((item, index) => (
    <Link to={`/product-details/${item?.productId?._id}`} className='sm:w-6/12 w-12/12 flex' key={index}>
      <div className='relative h-96 flex-1'>
        <img src={item?.banner} className='w-full h-full' alt='' />
        <div className='absolute sm:w-96 w-[95%] sm:right-80 right-3 py-3 top-0 h-full flex justify-center items-center'>
          <div>
            <img src={item?.logo} alt='' />
            <H4 className='text-white pt-6'>{item?.productId?.title}</H4>
            <H3 className='text-white pt-2'>$ {item?.productId?.discountPrice}</H3>
            <div className='flex gap-3 justify-between items-center'>
              <div className='flex flex-col gap-1'>
                <p className="text-gray-500 line-through flex">$ {item?.productId?.actualPrice}</p>
                <button className="w-10 text-[12px] rounded-md text-red-500 bg-[#FAE9E7] border border-red-500">
                  {item?.productId?.gst}%
                </button>
              </div>
              <button type='button' className="text-blue-600 mb-3 text-sm bg-blue px-6 rounded-sm py-2.5 text-white font-medium hover:underline">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>
     </div>


      <div id="allProductSecond" className="py-8 bg-gray-50">
      <section className="pb-10">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="py-6 flex flex-wrap gap-2 justify-between">
          <div>
              <h2 className="text-2xl font-bold">Upcoming games</h2>
              <p className="text-gray-500">
                Can’t wait to play your game? Preorder the key now and experience it on day one!



              </p>
            </div>
            <div>
              <Link to={'/shop?type=Account'} className="py-1 px-6 bg-blue transition duration-300 ease-in-out text-white font-semibold text-[12px] rounded-md hover:bg-secondary">
                Discover all
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {allProductSecond.map((product, index) => (
              <ProductCard
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






      <section className="bg-deal_bg py-12 bg-cover bg-center">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-[1fr,2fr,1fr] grid-cols-1">

            {/* First Column */}
            <div className="flex flex-col gap-3 ">
              {microsoft.slice(0, 2).map((product, index) => (
                <Link to={`/product-details/${product?._id}`} key={index} className="relative w-full h-60">
                  <div className="relative w-full  h-full overflow-hidden rounded-lg">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-5 w-full flex flex-col pl-3 justify-start items-start">
                      <h6 className='text-white text-xl'>{product?.title?.split(" ")?.slice(0, 5)?.join(" ")}</h6>
                      <div className="flex gap-3 flex-row items-center">
                        <div>
                          <p className="text-xl font-bold m-0 text-white">{product?.discountPrice}</p>
                          {product?.actualPrice ? <p className="text-sm text-gray-200 m-0 line-through">{`$ ${product?.actualPrice}`}</p> : null}
                        </div>
                        {product?.gst ? <button className="w-10 text-[12px] rounded-md text-red-500 bg-[#FAE9E7] border border-red-500">${product?.gst}</button> : null}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Second Column (Main Large Image) */}
            {microsoft[2] && (
              <Link to={`/product-details/${microsoft[2]?._id}`} className="relative w-full  max-h-[500px]">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={microsoft[2].images[0]}
                    alt={microsoft[2].name}
                    className="w-full h-full object-cover object-center rounded-lg"
                  />
                  <div className="absolute bottom-5 w-full flex flex-col pl-3 justify-start items-start">
                    <h6 className='text-white text-xl'>{microsoft[2]?.title?.split(" ")?.slice(0, 5)?.join(" ")}</h6>
                    <div className="flex gap-3 flex-row items-center">
                      <div>
                        <p className="text-xl font-bold m-0 text-white">{microsoft[2]?.discountPrice}</p>
                        {microsoft[2]?.actualPrice ? <p className="text-sm text-gray-200 m-0 line-through">{`$ ${microsoft[2]?.actualPrice}`}</p> : null}
                      </div>
                      {microsoft[2]?.gst ? <button className="w-10 text-[12px] rounded-md text-red-500 bg-[#FAE9E7] border border-red-500">${microsoft[2]?.gst}</button> : null}
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Third Column */}
            {microsoft[3] && (
              <Link to={`/product-details/${microsoft[3]?._id}`} className="relative w-full max-h-[500px]">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={microsoft[3].images[0]}
                    alt={microsoft[3].name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-5 w-full flex flex-col pl-3 justify-start items-start">
                    <h6 className='text-white text-xl'>{microsoft[3]?.title?.split(" ")?.slice(0, 5)?.join(" ")}</h6>
                    <div className="flex gap-3 flex-row items-center">
                      <div>
                        <p className="text-xl font-bold m-0 text-white">{microsoft[3]?.discountPrice}</p>
                        {microsoft[3]?.actualPrice ? <p className="text-sm text-gray-200 m-0 line-through">{`$ ${microsoft[3]?.actualPrice}`}</p> : null}
                      </div>
                      {microsoft[3]?.gst ? <button className="w-10 text-[12px] rounded-md text-red-500 bg-[#FAE9E7] border border-red-500">${microsoft[3]?.gst}</button> : null}
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

    </>
  )
}

export default Upcoming
