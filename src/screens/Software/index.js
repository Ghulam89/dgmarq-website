import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import BottomHeader from "../../components/Header/BottomHeader";
import ProductCard from "../../components/Cards/ProductCard";
import { H2, H3 } from "../../components/common/Heading";
import Button from "../../components/Button";
import Subscription from "../../components/Subscription";
import Gather from "../../components/Gather/Gather";
import ProductSlider from "../../components/common/ProductSlider";
import CategoryCard from "../../components/Cards/CategoryCard";
import GameAccountCard from "../../components/Cards/GameAccountCard";

const SoftwareDealers = () => {

  const Girftproducts = [
    {
      id: 1,
      title: "Microsoft Windows 11 Pro (PC) - Microsoft Key -",
      subtitle: "(PC) - Steam Account",
      price: "$34.35",
      originalPrice:"$124",
      oldPrice: "$39.99",
      discount:"-84%",
      
      tag: "SPONSORED",
      image:
        "https://images.g2a.com/170x228/1x1x0/microsoft-windows-11-pro-pc-microsoft-key-global/f0fcf80e6cf84e518c39d5b6",
    },
    {
      id: 2,
      title: "Random Black Friday 1 Key",
      subtitle: "(PC) - Steam Key - GLOBAL",
      price: "$5.87",
      tag: "SPONSORED",
      image:
      "https://images.g2a.com/170x228/1x1x0/microsoft-windows-11-pro-pc-microsoft-key-global/f0fcf80e6cf84e518c39d5b6",
    },
    {
      id: 3,
      title: "Battlefield 2042",
      subtitle: "(Xbox Series X/S) - Xbox Live Key",
      price: "$12.06",
      tag: "OFFER FROM 6 SELLERS",
      image:
        "https://images.g2a.com/170x228/1x1x0/microsoft-windows-10-home-microsoft-key-global/5d6f6a617e696c531336afb2",
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
      {/* banner section */}
      <div>
        <img
          src={
            "https://images.g2a.com/uiadminimages/1920x162/1x1x1/9cc9487df66d/d4a6ae0341dc41a0954cccda"
          }
          alt=""
        />
      </div>
     
    {/* holiday vouchers */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gameAccounts.map((account, index) => (
            <GameAccountCard key={index} {...account} />
          ))}
        </div>
      </div>
    </section>

                {/* ideal for: */}
                <section className=" py-10">
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
            </section>

      {/* holiday vouchers */}
      <section className=" pb-10">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className=" py-6">
            <div className=" flex  justify-between items-center">
              <div>
                <H3 className=" ">Bestsellers</H3>
                <p className="">
                Explore the apps most commonly chosen by our customers!
                </p>
              </div>
              <div>
                
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {Girftproducts.map((product, index) => (
              <ProductCard
                image={product?.image}
                title={product?.title}
                price={product?.price}
                originalPrice={product?.oldPrice}
                discount={product?.discount}
              />
            ))}
          </div>
          <Button label={'Show more '}  className={' bg-secondary mx-auto mt-12'} />
        </div>
      </section>
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
