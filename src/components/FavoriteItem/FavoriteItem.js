import React, { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";

const products = [
  {
    image: "https://images.g2a.com/170x228/1x1x0/webroot-secureanywhere-antivirus-1-device-global-key-pc-1-year/1a398a92a262426f8b24f8f8",
    title: "Webroot SecureAnywhere AntiVirus 1 Device",
    price: "1.95",
    originalPrice: "37.00",
    discount: "95",
    offerLabel: "OFFER FROM 6 SELLERS",
    isSponsored: false,
  },
  {
    image: "https://images.g2a.com/170x228/1x1x0/call-of-duty-modern-warfare-ii-burger-king-operator-skin-1-hour-2xp-call-of-duty-official-key-global/8c00f53c7bda42c587cb94bb",
    title: "Call of Duty: Modern Warfare II - Burger King Operator Skin",
    price: "0.50",
    originalPrice: "42.39",
    discount: "99",
    offerLabel: "OFFER FROM 26 SELLERS",
    isSponsored: false,
  },
  {
    image: "https://images.g2a.com/170x228/1x1x0/coreldraw-2021-standard-1-pc-lifetime-corel-key-global/d5b7a4406aed49ec8c308045",
    title: "CorelDRAW 2021 Standard (1 PC, Lifetime)",
    price: "1.66",
    originalPrice: "375.43",
    discount: "99",
    offerLabel: "OFFER FROM 14 SELLERS",
    isSponsored: false,
  },
  {
    image: "https://images.g2a.com/170x228/1x1x0/steam-gift-card-10-usd-steam-key-global/5911ec005bafe3cffe1bad14",
    title: "Steam Gift Card 10 USD - Steam Key",
    price: "12.23",
    originalPrice: "0",
    discount: "0",
    offerLabel: "",
    isSponsored: true,
  },
  {
    image: "https://images.g2a.com/170x228/1x1x0/playstation-network-gift-card-10-usd-psn-key-united-states/8d1b0a14cb3442be8979328e",
    title: "PlayStation Network Gift Card 10 USD",
    price: "11.08",
    originalPrice: "21.14",
    discount: "47",
    offerLabel: "",
    isSponsored: true,
  },
  {
    image: "https://images.g2a.com/170x228/1x1x0/infraspace-pc-steam-key-global/ce1430957c934b7a8c858cbb",
    title: "InfraSpace (PC) - Steam Key - GLOBAL",
    price: "0.62",
    originalPrice: "21.14",
    discount: "97",
    offerLabel: "OFFER FROM 15 SELLERS",
    isSponsored: false,
  },
];




const FavoriteItem = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`${Base_url}/products/getAll?page=1`)
  //     .then((res) => {
  //       console.log(res);

  //       setProducts(res?.data?.data?.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });


  // }, []);
   


  return (
    <section className=" py-10">
      <div className="max-w-[1170px] mx-auto px-4">
       <div className=" flex  justify-between items-center">
       <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Our customers' favorite items
        </h2>
        <button className="py-1 px-6 bg-blue-500 bg-blue transition duration-300 ease-in-out text-white font-semibold text-[12px] rounded-md  hover:bg-secondary">
          Discover all
        </button>
       </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product, index) => (
            
            <ProductCard image={product?.image}  title={product?.title} price={product?.price}  />

          ))}
        </div>
        <div className="text-center mt-6">
        
        <div className="text-center mt-6">
          <button className="text-blue-600 mb-3 text-sm text-blue font-medium hover:underline">
            Show more
          </button>
          <hr/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteItem;
