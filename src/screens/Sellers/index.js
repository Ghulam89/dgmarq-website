import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import BottomHeader from '../../components/Header/BottomHeader'
import ProductCard from '../../components/Cards/ProductCard'
import Gather from '../../components/Gather/Gather'

const Sellers = () => {
    const products = [
        {
            id: 1,
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
            title: "Random Black Friday 1 Key",
            subtitle: "(PC) - Steam Key - GLOBAL",
            price: "$5.87",
            tag: "SPONSORED",
            image:
                "https://images.g2a.com/170x228/1x1x0/random-black-friday-1-key-pc-steam-key-global/999a67334db34f62879f2b78",
        },
        {
            id: 3,
            title: "Battlefield 2042",
            subtitle: "(Xbox Series X/S) - Xbox Live Key",
            price: "$12.06",
            tag: "OFFER FROM 6 SELLERS",
            image:
                "https://images.g2a.com/170x228/1x1x0/battlefield-2042-xbox-series-x-s-xbox-live-key-global/3e8c0e6bb7f543dca6744e91",
        },
        {
            id: 4,
            title: "Max Payne (PC)",
            subtitle: "Steam Key - GLOBAL",
            price: "$4.77",
            tag: "OFFER FROM 23 SELLERS",
            image:
                "https://images.g2a.com/170x228/1x1x0/max-payne-pc-steam-key-global/5910dfe6ae653a5436160135",
        },
        {
            id: 5,
            title: "Grand Theft Auto V (PC)",
            subtitle: "Rockstar Key - GLOBAL",
            price: "$12.22",
            tag: "SPONSORED",
            image:
                "https://images.g2a.com/170x228/1x1x0/grand-theft-auto-v-rockstar-key-global/59e5efeb5bafe304c4426c47",
        },
        {
            id: 6,
            title: "Darktide",
            subtitle: "(PC)",
            price: "$11.41",
            tag: "SPONSORED",
            image:
                "https://images.g2a.com/170x228/1x1x0/warhammer-40000-darktide-pc-steam-key-global/59ba02c95c434f6da1267962",
        },
    ];
    return (
        <>
            <Navbar />
            <BottomHeader />
            <div className=''>
                <img src={require('../../assets/images/seller-panel.jpg')} alt='' />
            </div>
            <section className='  bg-[#9cb6ad] py-12 bg-seller_bg bg-cover'>

                <div className="max-w-[1170px] mx-auto px-4">

                    <div className=" py-6">
                        <h2 className="text-2xl font-bold">Bestsellers</h2>
                        <p className="text-gray-500">
                            The hottest items on our marketplace – discover what captured our
                            users' hearts!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {products.map((product, index) => (

                            <ProductCard image={product?.image} title={product?.title} price={product?.price} />

                        ))}
                    </div>

                </div>

            </section>

            <section className='  bg-[#50727b] py-12 bg-key_bg bg-cover bg-center'>

                <div className="max-w-[1170px] mx-auto px-4">

                    <div className=" py-6">
                        <h2 className="text-2xl  pb-3 font-bold">Can't find anything you like? Try some random keys!</h2>

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {products.map((product, index) => (

                            <ProductCard image={product?.image} title={product?.title} price={product?.price} />

                        ))}
                    </div>

                </div>

            </section>

            <section className='  bg-[#50727b] py-12 bg-software_bg bg-cover bg-center'>

                <div className="max-w-[1170px] mx-auto px-4">

                    <div className=" py-6">
                        <h2 className="text-2xl text-white font-bold">Software Bestsellers</h2>

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {products.map((product, index) => (

                            <ProductCard image={product?.image} title={product?.title} price={product?.price} />

                        ))}
                    </div>

                </div>

            </section>
            <section className='bg-gray-100'>
            <Gather />
            <section className="max-w-[1170px] py-12 mx-auto px-4">

            <h2 className="text-2xl  pb-3 font-bold">Popular topics</h2>
            <ul className=' flex gap-3 flex-wrap items-center'>
                <li>
                    <button className=' border hover:bg-secondary text-secondary hover:text-white p-2 font-semibold bg-[#F9F9F9] border-secondary rounded-md'>
                        EA SPORTS FC 25 PC Key
                    </button>
                </li>
                <li>
                    <button className=' border hover:bg-secondary text-secondary hover:text-white p-2 font-semibold bg-[#F9F9F9] border-secondary rounded-md'>
                      NBA 2k25 PC Key
                    </button>
                </li>
                <li>
                    <button className=' border hover:bg-secondary text-secondary hover:text-white p-2 font-semibold bg-[#F9F9F9] border-secondary rounded-md'>
                     warhammer 40k  space Marine 2 PC Key
                    </button>
                </li>
                <li>
                    <button className=' border hover:bg-secondary text-secondary hover:text-white p-2 font-semibold bg-[#F9F9F9] border-secondary rounded-md'>
                     warhammer 40k  space Marine 2 PC Key
                    </button>
                </li>
                <li>
                    <button className=' border hover:bg-secondary text-secondary hover:text-white p-2 font-semibold bg-[#F9F9F9] border-secondary rounded-md'>
                    STALKER 2 Heart of Chornobyl PC Key
                    </button>
                </li>
                <li>
                    <button className=' border hover:bg-secondary text-secondary hover:text-white p-2 font-semibold bg-[#F9F9F9] border-secondary rounded-md'>
                    Farming Simulator 25 PC Key
                    </button>
                </li>
                <li>
                    <button className=' border hover:bg-secondary text-secondary hover:text-white p-2 font-semibold bg-[#F9F9F9] border-secondary rounded-md'>
                    Fallout Games
                    </button>
                </li>
                <li>
                    <button className=' border hover:bg-secondary text-secondary hover:text-white p-2 font-semibold bg-[#F9F9F9] border-secondary rounded-md'>
                    Steam Keys
                    </button>
                </li>
                <li>
                    <button className=' border hover:bg-secondary text-secondary hover:text-white p-2 font-semibold bg-[#F9F9F9] border-secondary rounded-md'>
                    VPN for Streaming
                    </button>
                </li>
                <li>
                    <button className=' border hover:bg-secondary text-secondary hover:text-white p-2 font-semibold bg-[#F9F9F9] border-secondary rounded-md'>
                    Steam Keys
                    </button>
                </li>
            </ul>


            </section>
            </section>
          
            <Footer />
        </>
    )
}

export default Sellers
