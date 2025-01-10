import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import BottomHeader from '../../components/Header/BottomHeader'
import ProductCard from '../../components/Cards/ProductCard'
import { H2, H3 } from '../../components/common/Heading'
import CategoryCard from '../../components/Cards/CategoryCard'
import DiscountBanner from '../../components/common/DiscountBanner'
import ProductSlider from '../../components/common/ProductSlider'

const GiftIdeas = () => {
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
        }
    ];


    const Girftproducts = [
        {
            id: 1,
            title: "Call of Duty: Modern Warfare III",
            subtitle: "(PC) - Steam Account",
            // price: "$34.35",
            oldPrice: "$39.99",
            tag: "SPONSORED",
            image:
                "https://images.g2a.com/uiadminimages/170x259/1x1x1/853b3b57cf6c/9634b615792a4de9845f41a9",
        },
        {
            id: 2,
            title: "Random Black Friday 1 Key",
            subtitle: "(PC) - Steam Key - GLOBAL",
            // price: "$5.87",
            tag: "SPONSORED",
            image:
            "https://images.g2a.com/uiadminimages/170x259/1x1x1/853b3b57cf6c/9634b615792a4de9845f41a9",
        },
        {
            id: 3,
            title: "Battlefield 2042",
            subtitle: "(Xbox Series X/S) - Xbox Live Key",
            // price: "$12.06",
            tag: "OFFER FROM 6 SELLERS",
            image:
            "https://images.g2a.com/uiadminimages/170x259/1x1x1/853b3b57cf6c/9634b615792a4de9845f41a9",
        },
        {
            id: 4,
            title: "Max Payne (PC)",
            subtitle: "Steam Key - GLOBAL",
            // price: "$4.77",
            tag: "OFFER FROM 23 SELLERS",
            image:
            "https://images.g2a.com/uiadminimages/170x259/1x1x1/853b3b57cf6c/9634b615792a4de9845f41a9",
        }
    ];



    const ideas = [
        {
           id:1,
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
        }
    ];
    const Spark = [
        {
           id:1,
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
        }
    ];


    const Range = [
        {
           id:1,
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
        }
    ];

    return (
        <>
            <Navbar />
            <BottomHeader />
            {/* banner section */}
            <div>
                <img src={'https://images.g2a.com/uiadminimages/1920x600/1x1x1/899695fe3f89/1126cb945be24e71bba7b70f'} alt='' />
            </div>
            {/* holiday vouchers */}
            <section className=" py-10">
                <div className="max-w-[1170px] mx-auto px-4">

                    <div className=" py-6">
                        <H3 className=''>G2A Holiday Vouchers</H3>
                        <p className="text-gray-500">
                            Discover a gift that’s perfect for everyone.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {products.map((product, index) => (

                            <ProductCard image={product?.image} title={product?.title} price={product?.price} />

                        ))}
                    </div>

                </div>
            </section>



          

             {/* ideal for: */}
             <section className=" py-10">
                <div className="max-w-[1170px] mx-auto px-4">

                    <div className=" py-6">
                        <H3 className=''>IDEAL FOR:</H3>
                        
                    </div>
                    <div className="  grid md:grid-cols-6 sm:grid-cols-4 gap-5 grid-cols-2">
                        {ideas.map((product, index) => (

                            <CategoryCard image={product?.image} title={product?.title} price={product?.price} />

                        ))}
                    </div>

                </div>
            </section>


               {/* holiday vouchers */}
               <section className=" py-10">
                <div className="max-w-[1170px] mx-auto overflow-hidden px-4">

                    <div className=" py-6">
                        <H3 className=''>Choose our bestsellers!</H3>
                        <p className="text-gray-500">
                        These top items are trending now and make perfect gifts!


                        </p>
                    </div>
                   
                 
                </div>
                <ProductSlider/> 
            </section>



            
             {/* ideal for: */}
             <section className=" py-10">
                <div className="max-w-[1170px] mx-auto px-4">

                    <div className=" py-6">
                        <H3 className=''>Spark your inspiration!:</H3>
                        
                    </div>
                    <div className="  grid md:grid-cols-6 sm:grid-cols-4 gap-5 grid-cols-2">
                        {Spark.map((product, index) => (

                            <CategoryCard image={product?.image} title={product?.title} price={product?.price} />

                        ))}
                    </div>

                </div>
            </section>


              {/* ideal for: */}
              <section className=" py-10">
                <div className="max-w-[1170px] mx-auto px-4">

                    <div className=" py-6">
                        <H3 className=''>Select your price range!</H3>
                        <p className="text-gray-500">
                        Find the ideal gift for every occasion that matches your budget!
                        </p>
                    </div>
                    <div className="  grid md:grid-cols-6 sm:grid-cols-4 gap-5 grid-cols-2">
                        {Range.map((product, index) => (

                            <CategoryCard image={product?.image} title={product?.title} price={product?.price} />

                        ))}
                    </div>

                </div>
            </section>

             {/* holiday vouchers */}
             <section className=" pb-10 bg-gift_bg">
                <div className="max-w-[1170px] mx-auto px-4">

                    <div className=" py-6">
                        <H3 className=''>Most popular gift cards</H3>
                        <p className="text-gray-500">
                        Looking for a voucher? Explore our top picks!

                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {Girftproducts.map((product, index) => (

                            <ProductCard image={product?.image} title={product?.title} price={product?.price} />

                        ))}
                    </div>
                      <DiscountBanner/>

                </div>
              
            </section>

            <Footer />
        </>
    )
}

export default GiftIdeas
