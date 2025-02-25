
import { useEffect, useState } from 'react';
import Bestsellers from '../../components/Bestsellers/Bestsellers';
import BundleDeals from '../../components/BundleDeals/BundleDeals';
import Button from '../../components/Button';
import Crypto from '../../components/Crypto/Crypto';
import FavoriteItem from '../../components/FavoriteItem/FavoriteItem';
import FlashDeals from '../../components/FlashDeals';
import Footer from '../../components/Footer/Footer';
import G2AFeatures from '../../components/G2AFeatures/G2AFeatures';
import GameAccountsSection from '../../components/GameAccountsSection/GameAccountsSection';
import Gather from '../../components/Gather/Gather';
import BottomHeader from '../../components/Header/BottomHeader';
import Navbar from '../../components/Header/Navbar';
import Hero from '../../components/Hero/Hero';
import Subscription from '../../components/Subscription';
import Upcoming from '../../components/Upcoming/Upcoming';
import WhyG2A from '../../components/WhyG2A/WhyG2A';
import { Base_url } from '../../utils/Base_url';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {

  const [account, setAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 4;

  const GetProductByAccount = (page = 1) => {
    axios
      .get(`${Base_url}/products/getProductByAccount?page=${page}&limit=${limit}`)
      .then((res) => {
        const newFavorites = res?.data?.data || [];

        setAccounts((prevFavorites) => {

          if (page === 1) {
            return newFavorites;
          }

          return [...prevFavorites, ...newFavorites];
        });


        setTotalPages(res?.data?.pagination?.totalPages || 1);
      })
      .catch((error) => {
        console.error("Error fetching favorites:", error);
      });
  };

  useEffect(() => {
    GetProductByAccount(currentPage);
  }, [currentPage]);
  const handleSeeMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <>
      <Navbar />
      <BottomHeader />
      <Hero />
      <G2AFeatures />
      <div className='max-w-[1170px] mt-8 sticky z-30 top-0 mx-auto'>
        <div className="flex overflow-x-auto justify-between bg-white nav_item">
          {[
            { name: "Bestsellers", id: "bestSellers" },
            { name: "Gaming gift cards", id: "gift" },
            { name: "Upcoming games", id: "upcoming-games" },
            { name: "Favorites ", id: "favorites" },
            { name: "Software", id: "software" },
            { name: "Cryptocurrencies", id: "cryptocurrencies" },
            { name: "Random Keys", id: "random-keys" },
            { name: "Game Accounts", id: "bg-game_bg" },
          ].map(({ name, id }) => (
            <button
              key={id}
              className="py-3.5 px-6 bg-white border text-sm font-semibold shadow-sm text-gray-700 whitespace-nowrap hover:bg-gray-100"
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <Bestsellers />
      <FlashDeals />
      <GameAccountsSection />
      <Upcoming />
      <BundleDeals />
      <Crypto />
      <WhyG2A />
      
      <section id='bg-game_bg' className="bg-game_bg py-12 bg-cover bg-center">
        <div className="max-w-[1170px] mx-auto px-4">
          <h2 className="text-2xl font-bold">Game accounts</h2>
          <p className="text-gray-500 pb-5">
            Experience the latest gaming releases with brand-new accounts.

          </p>
          <div className="grid gap-6 sm:grid-cols-[1fr,2fr,1fr] grid-cols-1">

            {/* First Column */}
            <div className="flex flex-col gap-3">
              {account.slice(0, 2).map((product, index) => (
                <Link to={`/product-details/${product?._id}`} key={index} className="relative w-full   h-[50%]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-5 w-full flex flex-col pl-3  justify-start items-start">

                    <h6 className=' text-white text-xl'>{product?.title?.split(" ")?.slice(0, 5)?.join(" ")}</h6>

                    <div className="flex  gap-3 flex-row items-center">
                      <div>
                        <p className="text-xl font-bold m-0 text-white">{product?.discountPrice}</p>
                        {product?.actualPrice ?
                          <p className="text-sm text-gray-200 m-0 line-through">{`$ ${product?.actualPrice}`}</p> : null
                        }
                      </div>
                      {product?.gst ?
                        <button className=" w-10 text-[12px] rounded-md  text-red-500 bg-[#FAE9E7] border border-red-500">${product?.gst}</button> : null
                      }


                    </div>

                  </div>
                </Link>
              ))}
            </div>

            {/* Second Column (Main Large Image) */}
            {account[2] && (
              <Link to={`/product-details/${account[2]?._id}`} className="relative w-full h-[400px] sm:h-[482px]">
                <img
                  src={account[2].images[0]}
                  alt={account[2].name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-5 w-full flex justify-center items-center">
                  <div className="absolute bottom-5 w-full flex flex-col pl-3  justify-start items-start">

                    <h6 className=' text-white text-xl'>{account[2]?.title?.split(" ")?.slice(0, 5)?.join(" ")}</h6>

                    <div className="flex  gap-3 flex-row items-center">
                      <div>
                        <p className="text-xl font-bold m-0 text-white">{account[2]?.discountPrice}</p>
                        {account[2]?.actualPrice ?
                          <p className="text-sm text-gray-200 m-0 line-through">{`$ ${account[2]?.actualPrice}`}</p> : null
                        }
                      </div>
                      {account[2]?.gst ?
                        <button className=" w-10 text-[12px] rounded-md  text-red-500 bg-[#FAE9E7] border border-red-500">${account[2]?.gst}</button> : null
                      }


                    </div>

                  </div>
                </div>
              </Link>
            )}

            {/* Third Column */}
            {account[3] && (
              <Link to={`/product-details/${account[3]?._id}`} className="relative w-full  h-full">
                <img
                  src={account[3].images[0]}
                  alt={account[3].name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-5 w-full flex justify-center items-center">
                  <div className="absolute bottom-5 w-full flex flex-col pl-3  justify-start items-start">

                    <h6 className=' text-white text-xl'>{account[3]?.title?.split(" ")?.slice(0, 5)?.join(" ")}</h6>

                    <div className="flex  gap-3 flex-row items-center">
                      <div>
                        <p className="text-xl font-bold m-0 text-white">{account[3]?.discountPrice}</p>
                        {account[3]?.actualPrice ?
                          <p className="text-sm text-gray-200 m-0 line-through">{`$ ${account[3]?.actualPrice}`}</p> : null
                        }
                      </div>
                      {account[3]?.gst ?
                        <button className=" w-10 text-[12px] rounded-md  text-red-500 bg-[#FAE9E7] border border-red-500">${account[3]?.gst}</button> : null
                      }


                    </div>

                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>


      <FavoriteItem />
      <Gather />
      <Subscription />
      <Footer />
    </>
  )
}

export default Home
