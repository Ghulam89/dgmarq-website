import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import BottomHeader from "../../components/Header/BottomHeader";
import ProductCard from "../../components/Cards/ProductCard";
import { H2, H3 } from "../../components/common/Heading";
import CategoryCard from "../../components/Cards/CategoryCard";
import DiscountBanner from "../../components/common/DiscountBanner";
import ProductSlider from "../../components/common/ProductSlider";
import Button from "../../components/Button";
import Subscription from "../../components/Subscription";
import Gather from "../../components/Gather/Gather";

const RandomKeys = () => {
  const products = [
    {
      id: 1,
      title: "Call of Duty: Modern Warfare III",
      subtitle: "(PC) - Steam Account",
      price: "$34.35",
      oldPrice: "$39.99",
      tag: "SPONSORED",
      image:
        "https://images.g2a.com/470x235/1x1x0/g2a-holiday-discount-card-20-usd/07f5d8f4322e48cea4d4969d", // Replace with the actual image
    },
    {
      id: 2,
      title: "Random Black Friday 1 Key",
      subtitle: "(PC) - Steam Key - GLOBAL",
      price: "$5.87",
      tag: "SPONSORED",
      image:
        "https://images.g2a.com/470x235/1x1x0/g2a-holiday-discount-card-20-usd/07f5d8f4322e48cea4d4969d",
    },
    {
      id: 3,
      title: "Battlefield 2042",
      subtitle: "(Xbox Series X/S) - Xbox Live Key",
      price: "$12.06",
      tag: "OFFER FROM 6 SELLERS",
      image:
        "https://images.g2a.com/470x235/1x1x0/g2a-holiday-discount-card-20-usd/07f5d8f4322e48cea4d4969d",
    },
    {
      id: 4,
      title: "Max Payne (PC)",
      subtitle: "Steam Key - GLOBAL",
      price: "$4.77",
      tag: "OFFER FROM 23 SELLERS",
      image:
        "https://images.g2a.com/470x235/1x1x0/g2a-holiday-discount-card-20-usd/07f5d8f4322e48cea4d4969d",
    },
  ];

  const Girftproducts = [
    {
      id: 1,
      title: "Counter Strike 2 RANDOM COVERT VS. KNIFE SKIN BY DROPLAND.NET",
      subtitle: "(PC) - Steam Account",
      price: "$34.35",
      oldPrice: "$39.99",
      tag: "SPONSORED",
      image:
        "https://images.g2a.com/170x228/1x1x0/counter-strike-2-random-covert-vs-knife-skin-by-droplandnet-key-global/b086eb65c6ed4014b6a67724",
    },
    {
      id: 2,
      title: "Random Black Friday 1 Key",
      subtitle: "(PC) - Steam Key - GLOBAL",
      price: "$5.87",
      tag: "SPONSORED",
      image:
        "https://images.g2a.com/uiadminimages/170x259/1x1x1/853b3b57cf6c/9634b615792a4de9845f41a9",
    },
    {
      id: 3,
      title: "Battlefield 2042",
      subtitle: "(Xbox Series X/S) - Xbox Live Key",
      price: "$12.06",
      tag: "OFFER FROM 6 SELLERS",
      image:
        "https://images.g2a.com/uiadminimages/170x259/1x1x1/853b3b57cf6c/9634b615792a4de9845f41a9",
    },
    {
      id: 4,
      title: "Max Payne (PC)",
      subtitle: "Steam Key - GLOBAL",
      price: "$4.77",
      tag: "OFFER FROM 23 SELLERS",
      image:
        "https://images.g2a.com/uiadminimages/170x259/1x1x1/853b3b57cf6c/9634b615792a4de9845f41a9",
    },
    {
      id: 4,
      title: "Max Payne (PC)",
      subtitle: "Steam Key - GLOBAL",
      price: "$4.77",
      tag: "OFFER FROM 23 SELLERS",
      image:
        "https://images.g2a.com/uiadminimages/170x259/1x1x1/853b3b57cf6c/9634b615792a4de9845f41a9",
    },
    {
      id: 6,
      title: "Max Payne (PC)",
      subtitle: "Steam Key - GLOBAL",
      price: "$4.77",
      tag: "OFFER FROM 23 SELLERS",
      image:
        "https://images.g2a.com/uiadminimages/170x259/1x1x1/853b3b57cf6c/9634b615792a4de9845f41a9",
    },
  ];

  const ideas = [
    {
      id: 1,
      title: "GAMES",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/e3733bba9ba5/e9dc316357a140b98b7ef07e",
    },
    {
      id: 2,
      title: "HER",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/073777b1da96/d78fc040f01446f092d0c1f2",
    },
    {
      id: 3,
      title: "HIM",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/d54cca65ce15/a61812baca2b4e7796abca2f",
    },
    {
      id: 4,
      title: "TEENAGERS",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/1c7f52088a2f/e59a6bd2d1504b8ab6e6430a",
    },
    {
      id: 5,
      title: "KIDS",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/3eaa3657fddc/608b8b76d49b4555aa83b1ee",
    },
    {
      id: 6,
      title: "COUPLES",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/d11d8367473b/34bca20d06f8448aab52e633",
    },
  ];
  const Spark = [
    {
      id: 1,
      title: "Sports",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/30facf4128e8/9d454fd5a76840ada52885d0", // Replace with the actual image
    },
    {
      id: 2,
      title: "Traveling",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/5953978442c9/3f424f167cc1485eafcc4ef2",
    },
    {
      id: 3,
      title: "Health and Beauty",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/0d2525d81faf/911368399e344d3db2993bff",
    },
    {
      id: 4,
      title: "Entertainment",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/bde6f2d1c1db/6c0246f44dbe4a4691b4698f",
    },
    {
      id: 5,
      title: "Shopping",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/e525ff43e19d/1abf87b2f6a1471c84c29f6c",
    },
    {
      id: 6,
      title: "VOD",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/be3ce7aac268/07165ff490b841c49c826376",
    },
  ];

  const Range = [
    {
      id: 1,
      // title: "Sports",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/cda86a48e143/9a13a5db27d44d79b4c9961d",
    },
    {
      id: 2,
      // title: "Traveling",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/cda86a48e143/9a13a5db27d44d79b4c9961d",
    },
    {
      id: 3,
      // title: "Health and Beauty",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/12d16a336ee5/f4be5694f954497ea8f1f4e3",
    },
    {
      id: 4,
      // title: "Entertainment",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/73dea574a117/917d216bc55c420981c30a06",
    },
    {
      id: 5,
      // title: "Shopping",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/417d8f884f83/9ce36126a450428abd4c332e",
    },
    {
      id: 6,
      // title: "VOD",

      image:
        "https://images.g2a.com/uiadminimages/170x170/1x1x1/417d8f884f83/9ce36126a450428abd4c332e",
    },
  ];



  const Pickup = [
    {
      id: 1,
      title: "Counter Strike 2 RANDOM COVERT VS. KNIFE SKIN BY DROPLAND.NET",
      subtitle: "(PC) - Steam Account",
      price: "$34.35",
      oldPrice: "$39.99",
      tag: "SPONSORED",
      image:
        "https://images.g2a.com/170x228/1x1x0/shooter-mystery-box-random-1-key-pc-steam-key-global/232ca4ea41b24d2483b3cc0d",
    },
    {
      id: 2,
      title: "Random Black Friday 1 Key",
      subtitle: "(PC) - Steam Key - GLOBAL",
      price: "$5.87",
      tag: "SPONSORED",
      image:
        "https://images.g2a.com/uiadminimages/170x259/1x1x1/853b3b57cf6c/9634b615792a4de9845f41a9",
    },
    {
      id: 3,
      title: "Battlefield 2042",
      subtitle: "(Xbox Series X/S) - Xbox Live Key",
      price: "$12.06",
      tag: "OFFER FROM 6 SELLERS",
      image:
        "https://images.g2a.com/170x228/1x1x0/simulator-random-pc-steam-key-global/032613ecfb99419298f93b7d",
    },
    {
      id: 4,
      title: "Max Payne (PC)",
      subtitle: "Steam Key - GLOBAL",
      price: "$4.77",
      tag: "OFFER FROM 23 SELLERS",
      image:
        "https://images.g2a.com/170x228/1x1x0/racing-random-pc-steam-key-global/ecae173b72624ac886b8930f",
    },
    {
      id: 4,
      title: "Max Payne (PC)",
      subtitle: "Steam Key - GLOBAL",
      price: "$4.77",
      tag: "OFFER FROM 23 SELLERS",
      image:
        "https://images.g2a.com/uiadminimages/170x259/1x1x1/853b3b57cf6c/9634b615792a4de9845f41a9",
    },
    {
      id: 6,
      title: "Max Payne (PC)",
      subtitle: "Steam Key - GLOBAL",
      price: "$4.77",
      tag: "OFFER FROM 23 SELLERS",
      image:
        "https://images.g2a.com/170x228/1x1x0/racing-mystery-box-random-1-key-pc-steam-key-global/2a43c013cdf14738a21a7ab7",
    },
  ];

  return (
    <>
      <Navbar />
      <BottomHeader />
      {/* banner section */}
      <div>
        <img
          src={
            "https://images.g2a.com/uiadminimages/1920x350/1x1x1/97c7af2065da/f75a226bce544c1fa083fe61"
          }
          alt=""
        />
      </div>
  

      <section className=" bg-random_key_bg py-12 bg-cover bg-center">
  <div className="max-w-[1170px] mx-auto px-4">
  <div className="grid gap-6 sm:grid-cols-[1fr,2fr,1fr] grid-cols-1">
  {/* First Column */}
  <div className="flex gap-3">
    <div className='  relative'>
    <img
      src="https://images.g2a.com/uiadminimages/360x512/1x1x1/c1641d039680/1ffbeea4deaf4f4691cde1c0"
      alt="First Image"
      className="w-full h-full rounded-lg"
    />
    <div className=' absolute bottom-5 w-full flex justify-center items-center'>
      <Button label={'Check details'} className={' bg-blue hover:bg-secondary rounded-md px-3'} />
    </div>
    </div>
  
   
  </div>

  {/* Second Column */}
  <div className="flex relative items-center">
    <img
      src="https://images.g2a.com/uiadminimages/570x464/1x1x1/8504ab895929/139c934c94a044cba5cda83c"
      alt="Main Large Image"
      className="w-full h-full rounded-lg"
    />
    <div className=' absolute bottom-5 w-full flex justify-center items-center'>
      <Button label={'Check details'} className={' bg-blue hover:bg-secondary rounded-md px-3'} />
    </div>
  </div>

  {/* Third Column */}
  <div className=' relative'>
    <img
      src="https://images.g2a.com/uiadminimages/360x512/1x1x1/e1b248721f3c/2290fcff768c4bf4b46cf543"
      alt="Third Image"
      className="w-full h-full rounded-lg"
    />
       <div className=' absolute bottom-5 w-full flex justify-center items-center'>
      <Button label={'Check details'} className={' bg-blue hover:bg-secondary rounded-md px-3'} />
    </div>
  </div>
</div>

  </div>
</section>

      {/* holiday vouchers */}
      <section className=" pb-10 bg-random_bg1 bg-cover   bg-center">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className=" py-6">
            <div className=" flex  justify-between items-center">
              <div>
                <H3 className=" text-white">Most popular gift cards</H3>
                <p className=" text-white">
                  Looking for a voucher? Explore our top picks!
                </p>
              </div>
              <div>
                <Button
                  className={" bg-secondary text-sm py-1"}
                  label={"Discover all"}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {Girftproducts.map((product, index) => (
              <ProductCard
                image={product?.image}
                title={product?.title}
                price={product?.price}
              />
            ))}
          </div>
          <Button label={'Show more '}  className={' bg-secondary mx-auto mt-12'} />
        </div>
      </section>

        {/* holiday vouchers */}
        <section className=" pb-10 bg-random_bg2 bg-cover   bg-center">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className=" py-6">
            <div className=" flex  justify-between items-center">
              <div>
                <H3 className=" text-white">Style up for Roblox and Fortnite!</H3>
                <p className=" text-white">
                 
Style up for Roblox and Fortnite!
This section is packed with awesome items for these two popular games - let's see what you'll get!
                </p>
              </div>
              <div>
                {/* <Button
                  className={" bg-secondary text-sm py-1"}
                  label={"Discover all"}
                /> */}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {Girftproducts.map((product, index) => (
              <ProductCard
                image={product?.image}
                title={product?.title}
                price={product?.price}
              />
            ))}
          </div>
          <Button label={'Show more '}  className={' bg-secondary mx-auto mt-12'} />
        </div>
      </section>

        {/* holiday vouchers */}
        <section className=" pb-10 bg-random_bg3 bg-cover   bg-center">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className=" py-6">
            <div className=" flex  justify-between items-center">
              <div>
                <H3 className=" text-white">
Go for 3 randoms!</H3>
                <p className=" text-white">
                 
                If five's too much, a pack of 3 fresh game keys seems like a perfectly balanced choice - grab it now!


                </p>
              </div>
              <div>
                <Button
                  className={" bg-secondary text-sm py-1"}
                  label={"Discover all"}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {Girftproducts.map((product, index) => (
              <ProductCard
                image={product?.image}
                title={product?.title}
                price={product?.price}
              />
            ))}
          </div>
          <Button label={'Show more '}  className={' bg-secondary mx-auto mt-12'} />
        </div>
      </section>

        {/* holiday vouchers */}
        <section className=" pb-10 bg-random_bg4 bg-cover   bg-center">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className=" py-6">
            <div className=" flex  justify-between items-center">
              <div>
                <H3 className=" text-white">

                Pick a genre that you love!</H3>
                <p className=" text-white">
                 
                What's your preferred game genre? You'll find plenty of options below!

                </p>
              </div>
              <div>
                <Button
                  className={" bg-secondary text-sm py-1"}
                  label={"Discover all"}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {Pickup?.map((product, index) => (
              <ProductCard
                image={product?.image}
                title={product?.title}
                price={product?.price}
              />
            ))}
          </div>
          <Button label={'Show more '}  className={' bg-secondary mx-auto mt-12'} />
        </div>
      </section>
    
      <Subscription/>
  <Gather/>
      <Footer />
    </>
  );
};

export default RandomKeys;
