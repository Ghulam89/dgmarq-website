import React from "react";
import ProductCard from "../Cards/ProductCard";

const products = [
  {
    id: 1,
    discount:'4%',
    title: "Call of Duty: Modern Warfare III",
    subtitle: "(PC) - Steam Account",
    price: "$34.35",
    oldPrice: "$39.99",
    tag: "SPONSORED",
    image:
      "https://images.g2a.com/170x228/1x1x0/playstation-network-gift-card-110-usd-psn-key-united-states/a474e71e754c47c891d9ce58", // Replace with the actual image
  },
  {
    id: 2,
    
    discount:'8%',
    title: "Random Black Friday 1 Key",
    subtitle: "(PC) - Steam Key - GLOBAL",
    price: "$5.87",
    tag: "SPONSORED",
    image:
      "https://images.g2a.com/170x228/1x1x0/random-black-friday-1-key-pc-steam-key-global/999a67334db34f62879f2b78",
  },
  {
    id: 3,
    
    discount:'9%',
    title: "Battlefield 2042",
    subtitle: "(Xbox Series X/S) - Xbox Live Key",
    price: "$12.06",
    tag: "OFFER FROM 6 SELLERS",
    image:
      "https://images.g2a.com/170x228/1x1x0/playstation-network-gift-card-110-usd-psn-key-united-states/a474e71e754c47c891d9ce58",
  },
  {
    id: 4,
    
    discount:'2%',
    title: "Max Payne (PC)",
    subtitle: "Steam Key - GLOBAL",
    price: "$4.77",
    tag: "OFFER FROM 23 SELLERS",
    image:
      "https://images.g2a.com/170x228/1x1x0/playstation-network-gift-card-110-usd-psn-key-united-states/a474e71e754c47c891d9ce58",
  },
  {
    id: 5,
    
    discount:'8%',
    title: "Grand Theft Auto V (PC)",
    subtitle: "Rockstar Key - GLOBAL",
    price: "$12.22",
    tag: "SPONSORED",
    image:
      "https://images.g2a.com/170x228/1x1x0/grand-theft-auto-v-rockstar-key-global/59e5efeb5bafe304c4426c47",
  },
  {
    id: 6,
    
    discount:'5%',
    title: "Darktide",
    subtitle: "(PC)",
    price: "$11.41",
    tag: "SPONSORED",
    image:
      "https://images.g2a.com/170x228/1x1x0/playstation-network-gift-card-110-usd-psn-key-united-states/a474e71e754c47c891d9ce58",
  },
];

const GameAccountsSection = () => {
  return (
    <div className=" ">
     

      {/* Header */}
    

      <section className=" py-10">
      <div className="max-w-7xl mx-auto px-4">
      
      <div className=" py-6 flex  justify-between">
       <div>
       <h2 className="text-2xl font-bold">Top up your gaming account</h2>
        <p className="text-gray-500">
        Add some funds in a flash and enjoy new games, DLC, and more!


        </p>
       </div>

       <div>
       <button className="py-1.5 px-6 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600">
          Discover all
        </button>
       </div>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product, index) => (
            
            <ProductCard image={product?.image} discount={product?.discount}  originalPrice={product?.price}  title={product?.title} price={product?.price}  />

          ))}
        </div>
        <div className="text-center mt-6">
          <button className="text-blue-600 font-medium hover:underline">
            Discover all
          </button>
        </div>
      </div>
    </section>
     
    </div>



  );
};

export default GameAccountsSection;
