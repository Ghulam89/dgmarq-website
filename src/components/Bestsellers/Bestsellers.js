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
      "https://images.g2a.com/170x228/1x1x0/call-of-duty-modern-warfare-iii-pc-steam-account-global/2f43247ed73c4f05ae9139bc", // Replace with the actual image
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
      "https://images.g2a.com/170x228/1x1x0/battlefield-2042-xbox-series-x-s-xbox-live-key-global/3e8c0e6bb7f543dca6744e91",
  },
  {
    id: 4,
    
    discount:'2%',
    title: "Max Payne (PC)",
    subtitle: "Steam Key - GLOBAL",
    price: "$4.77",
    tag: "OFFER FROM 23 SELLERS",
    image:
      "https://images.g2a.com/170x228/1x1x0/max-payne-pc-steam-key-global/5910dfe6ae653a5436160135",
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
      "https://images.g2a.com/170x228/1x1x0/warhammer-40000-darktide-pc-steam-key-global/59ba02c95c434f6da1267962",
  },
];

const Bestsellers = () => {
  return (
    <div className="py-8  bg-gray-50">
     

      {/* Header */}
    

      <section className=" py-10">
      <div className="max-w-7xl mx-auto px-4">
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
      className="py-3 px-5 bg-white border  font-semibold shadow-sm text-gray-700 whitespace-nowrap hover:bg-gray-100"
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
       <button className="py-1.5 px-6 bg-blue-500 text-white font-semibold text-sm rounded-md hover:bg-blue-600">
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

export default Bestsellers;
