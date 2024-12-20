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
            "https://images.g2a.com/uiadminimages/1920x570/1x1x1/e9d7afdd4545/9ff1a60c656040309fa6a65f"
          }
          alt=""
        />
      </div>
     
       {/* holiday vouchers */}
       <section className=" bg-black">
        <div className="max-w-7xl mx-auto  h-[70vh] bg-random_bg  pb-20">
        <div className=" relative">
            <div className=" left-36 top-8 absolute">
            <img src="https://images.g2a.com/uiadminimages/380x380/1x1x1/7573479365a3/47d7f6d302924530afa6c538" alt="" />

            </div>
           <div className=" absolute top-8 left-36">
           <svg width={380} height={380} viewBox="0 0 380 380">
  <g>
    <circle cx={190} cy={190} r={190} fill="#fff" />
    <path
      strokeWidth={0}
      fill="#C91800"
      transform="rotate(0, 190, 190)"
      d="M373.525906994923,143.32438143052107 373.525906994923,236.67561856947893 225,196.8782217350893 Q 208 190 225 183.1217782649107 z"
      style={{ transition: "0.5s" }}
    />
    <path
      strokeWidth={0}
      fill="#2F82FB"
      transform="rotate(30, 190, 190)"
      d="M373.525906994923,143.32438143052107 373.525906994923,236.67561856947893 225,196.8782217350893 Q 208 190 225 183.1217782649107 z"
      style={{ transition: "0.5s" }}
    />
    <path
      strokeWidth={0}
      fill="#41C303"
      transform="rotate(60, 190, 190)"
      d="M373.525906994923,143.32438143052107 373.525906994923,236.67561856947893 225,196.8782217350893 Q 208 190 225 183.1217782649107 z"
      style={{ transition: "0.5s" }}
    />
    <path
      strokeWidth={0}
      fill="#FFB400"
      transform="rotate(90, 190, 190)"
      d="M373.525906994923,143.32438143052107 373.525906994923,236.67561856947893 225,196.8782217350893 Q 208 190 225 183.1217782649107 z"
      style={{ transition: "0.5s" }}
    />
    <path
      strokeWidth={0}
      fill="#DD301C"
      transform="rotate(120, 190, 190)"
      d="M373.525906994923,143.32438143052107 373.525906994923,236.67561856947893 225,196.8782217350893 Q 208 190 225 183.1217782649107 z"
      style={{ transition: "0.5s" }}
    />
    <path
      strokeWidth={0}
      fill="#6202EA"
      transform="rotate(150, 190, 190)"
      d="M373.525906994923,143.32438143052107 373.525906994923,236.67561856947893 225,196.8782217350893 Q 208 190 225 183.1217782649107 z"
      style={{ transition: "0.5s" }}
    />
    <path
      strokeWidth={0}
      fill="#212121"
      transform="rotate(180, 190, 190)"
      d="M373.525906994923,143.32438143052107 373.525906994923,236.67561856947893 225,196.8782217350893 Q 208 190 225 183.1217782649107 z"
      style={{ transition: "0.5s" }}
    />
    <path
      strokeWidth={0}
      fill="#F05F00"
      transform="rotate(210, 190, 190)"
      d="M373.525906994923,143.32438143052107 373.525906994923,236.67561856947893 225,196.8782217350893 Q 208 190 225 183.1217782649107 z"
      style={{ transition: "0.5s" }}
    />
    <path
      strokeWidth={0}
      fill="#5100C4"
      transform="rotate(240, 190, 190)"
      d="M373.525906994923,143.32438143052107 373.525906994923,236.67561856947893 225,196.8782217350893 Q 208 190 225 183.1217782649107 z"
      style={{ transition: "0.5s" }}
    />
    <path
      strokeWidth={0}
      fill="#FFB400"
      transform="rotate(270, 190, 190)"
      d="M373.525906994923,143.32438143052107 373.525906994923,236.67561856947893 225,196.8782217350893 Q 208 190 225 183.1217782649107 z"
      style={{ transition: "0.5s" }}
    />
    <path
      strokeWidth={0}
      fill="#2F82FB"
      transform="rotate(300, 190, 190)"
      d="M373.525906994923,143.32438143052107 373.525906994923,236.67561856947893 225,196.8782217350893 Q 208 190 225 183.1217782649107 z"
      style={{ transition: "0.5s" }}
    />
    <path
      strokeWidth={0}
      fill="#6A6A6A"
      transform="rotate(330, 190, 190)"
      d="M373.525906994923,143.32438143052107 373.525906994923,236.67561856947893 225,196.8782217350893 Q 208 190 225 183.1217782649107 z"
      style={{ transition: "0.5s" }}
    />
    <text
      fill="#fff"
      transform="rotate(0, 190, 190)"
      fontFamily="Roboto"
      fontWeight={700}
      fontStyle="normal"
      fontSize="26px"
      x="296.2310883939076"
      y={190}
      dominantBaseline="middle"
    >
      -25%
    </text>
    <text
      fill="#fff"
      transform="rotate(30, 190, 190)"
      fontFamily="Roboto"
      fontWeight={700}
      fontStyle="normal"
      fontSize="26px"
      x="296.2310883939076"
      y={190}
      dominantBaseline="middle"
    >
      -17%
    </text>
    <text
      fill="#fff"
      transform="rotate(60, 190, 190)"
      fontFamily="Roboto"
      fontWeight={700}
      fontStyle="normal"
      fontSize="26px"
      x="296.2310883939076"
      y={190}
      dominantBaseline="middle"
    >
      -15%
    </text>
    <text
      fill="#fff"
      transform="rotate(90, 190, 190)"
      fontFamily="Roboto"
      fontWeight={700}
      fontStyle="normal"
      fontSize="26px"
      x="296.2310883939076"
      y={190}
      dominantBaseline="middle"
    >
      -13%
    </text>
    <text
      fill="#fff"
      transform="rotate(120, 190, 190)"
      fontFamily="Roboto"
      fontWeight={700}
      fontStyle="normal"
      fontSize="26px"
      x="296.2310883939076"
      y={190}
      dominantBaseline="middle"
    >
      -13%
    </text>
    <text
      fill="#fff"
      transform="rotate(150, 190, 190)"
      fontFamily="Roboto"
      fontWeight={700}
      fontStyle="normal"
      fontSize="26px"
      x="296.2310883939076"
      y={190}
      dominantBaseline="middle"
    >
      -8%
    </text>
    <text
      fill="#fff"
      transform="rotate(180, 190, 190)"
      fontFamily="Roboto"
      fontWeight={700}
      fontStyle="normal"
      fontSize="26px"
      x="296.2310883939076"
      y={190}
      dominantBaseline="middle"
    >
      -8%
    </text>
    <text
      fill="#fff"
      transform="rotate(210, 190, 190)"
      fontFamily="Roboto"
      fontWeight={700}
      fontStyle="normal"
      fontSize="26px"
      x="296.2310883939076"
      y={190}
      dominantBaseline="middle"
    >
      -8%
    </text>
    <text
      fill="#fff"
      transform="rotate(240, 190, 190)"
      fontFamily="Roboto"
      fontWeight={700}
      fontStyle="normal"
      fontSize="26px"
      x="296.2310883939076"
      y={190}
      dominantBaseline="middle"
    >
      -5%
    </text>
    <text
      fill="#fff"
      transform="rotate(270, 190, 190)"
      fontFamily="Roboto"
      fontWeight={700}
      fontStyle="normal"
      fontSize="26px"
      x="296.2310883939076"
      y={190}
      dominantBaseline="middle"
    >
      -5%
    </text>
    <text
      fill="#fff"
      transform="rotate(300, 190, 190)"
      fontFamily="Roboto"
      fontWeight={700}
      fontStyle="normal"
      fontSize="26px"
      x="296.2310883939076"
      y={190}
      dominantBaseline="middle"
    >
      -3%
    </text>
    <text
      fill="#fff"
      transform="rotate(330, 190, 190)"
      fontFamily="Roboto"
      fontWeight={700}
      fontStyle="normal"
      fontSize="26px"
      x="296.2310883939076"
      y={190}
      dominantBaseline="middle"
    >
      -3%
    </text>
    <circle
      cx={190}
      cy={190}
      fill="transparent"
      r={18}
      strokeDasharray={3}
      stroke="#B8B8B8"
      strokeWidth={1}
    />
    <circle
      cx={190}
      cy={190}
      r="186.7629534974615"
      fill="transparent"
      strokeWidth="6.474093005077009"
      stroke="#fff"
    />
  </g>
  <image
    href="https://images.g2a.com/uiadminimages/380x380/1x1x1/7573479365a3/47d7f6d302924530afa6c538"
    width={380}
    height={380}
  />
</svg>

           </div>
        </div>
        </div>
      </section>
      <div>
        <img
          src={
            "https://images.g2a.com/uiadminimages/1920x226/1x1x1/944f9a430980/fa14f663a55149a7b6aac0f5"
          }
          alt=""
        />
      </div>

      {/* holiday vouchers */}
      <section className=" pb-10 bg-random_bg1 bg-cover   bg-center">
        <div className="max-w-7xl mx-auto px-4">
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
        <div className="max-w-7xl mx-auto px-4">
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
        <div className="max-w-7xl mx-auto px-4">
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
        <div className="max-w-7xl mx-auto px-4">
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
