import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import BottomHeader from "../../components/Header/BottomHeader";
import ProductCard from "../../components/Cards/ProductCard";
import { H3 } from "../../components/common/Heading";
import Subscription from "../../components/Subscription";
import Gather from "../../components/Gather/Gather";
import ProductSlider from "../../components/common/ProductSlider";
import CategoryCard from "../../components/Cards/CategoryCard";
import GameAccountCard from "../../components/Cards/GameAccountCard";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";

const SoftwareDealers = () => {

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

   const Spark = [
        {
           id:1,
            title: "Sports",
           
            image:
                "https://images.g2a.com/uiadminimages/170x170/1x1x1/e867c8223d35/ba11b22ca23f4ea8bd796736", // Replace with the actual image
        },
        {
            id: 2,
            title: "Traveling",
         
            image:
                "https://images.g2a.com/uiadminimages/170x170/1x1x1/cbf92964b16c/fd295691ebbc4f6a8c0a286a",
        },
        {
            id: 3,
            title: "Health and Beauty",
           
            image:
                "https://images.g2a.com/uiadminimages/170x170/1x1x1/53a8b6babe34/a3b46a759cbf4594a4782964",
        },
        {
            id: 4,
            title: "Entertainment",
           
            image:
                "https://images.g2a.com/uiadminimages/170x170/1x1x1/c4ab452fb83b/1cce9d4c7c4d4374ae7c8ed8",
        },
        {
            id: 5,
            title: "Shopping",
           
            image:
                "https://images.g2a.com/uiadminimages/170x170/1x1x1/2f2f57e4a51c/7da4aa360ee84e2c88bde7ec",
        },
        {
            id: 6,
            title: "VOD",
           
            image:
                "https://images.g2a.com/uiadminimages/170x170/1x1x1/fe0ee7be825f/0b18023115e3471394dfc451",
        }
    ];

    const gameAccounts = [
        {
          image: "https://images.g2a.com/uiadminimages/270x185/1x1x1/0343f6e4608e/f7eccc679d9b462282cb167e",
          title: "Buying an Account: Why is it Worth Your Consideration?",
          description: "",
          buttonText: "Learn more",
          badge: null,
        },
        {
          image: "https://images.g2a.com/uiadminimages/270x400/1x1x1/0f410cb4a386/f6276251e6e642f29b3dc89f",
          title: "Minecraft Java & Bedrock",
          description: "GAME ACCOUNT",
          buttonText: "Check details",
          badge: "GAME ACCOUNT",
        },
        {
          image: "https://images.g2a.com/uiadminimages/570x400/1x1x1/5b41c9442029/fb75e1c77d474a1585b142c2",
          title: "Baldur's Gate: Digital Deluxe Upgrade",
          description: "",
          buttonText: "Check details",
          badge: "GAME ACCOUNT",
        },
      ];
      

  return (
    <>
      <Navbar />
      <BottomHeader />
      
      <div>
        <img
          src={
            "https://images.g2a.com/uiadminimages/1920x162/1x1x1/9cc9487df66d/d4a6ae0341dc41a0954cccda"
          }
          alt=""
        />
      </div>
     
   
    <section className=" bg-software_bg1 bg-cover">
                <div className="max-w-[1170px] mx-auto pb-4 overflow-hidden px-4">

                    <div className=" py-6">
                        <H3 className=''>Microsoft products</H3>
                        <p className="text-gray-500">
                       Get Windows and Office much cheaper - breeze through daily work with an updated system!




                        </p>
                    </div>
                   
                 
                </div>
                <ProductSlider/> 
            </section>


            <section className="  bg-software_bg2 py-10">
      <div className="max-w-[1170px] mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-2">
Utilities</h2>
        <p className="text-sm text-white mb-6">
        Support and optimize the functioning of your rig and its components.

        </p>
       
      </div>
    </section>

                {/* ideal for: */}
                {/* <section className=" py-10">
                <div className="max-w-[1170px] mx-auto px-4">

                    <div className=" py-6">
                        <H3 className=''>
                        Security</H3>
                        <p>Keep all your devices clean and safe with the selection of security solutions.
                        </p>
                        
                    </div>
                    <div className="  grid md:grid-cols-6 sm:grid-cols-4 gap-5 grid-cols-2">
                        {Spark.map((product, index) => (

                            <CategoryCard image={product?.image} title={product?.title} price={product?.price} />

                        ))}
                    </div>

                </div>
            </section> */}

      {/* holiday vouchers */}
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
              <button className="py-1 px-6 bg-blue transition duration-300 ease-in-out text-white font-semibold text-[12px] rounded-md hover:bg-secondary">
                Discover all
              </button>
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
      <div className=" bg-[#880103]">
        <img src="https://images.g2a.com/uiadminimages/1170x200/1x1x1/771db5899f95/b30db0f9a38c4137871b85eb" className=" mx-auto" alt="" />
      </div>
      
      <Subscription/>
  <Gather/>
      <Footer />
    </>
  );
};

export default SoftwareDealers;
