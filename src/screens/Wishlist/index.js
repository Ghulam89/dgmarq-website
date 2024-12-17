import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import BottomHeader from '../../components/Header/BottomHeader'

const Wishlist = () => {
    return (
        <>
            <Navbar />
            <BottomHeader/>
            <div className="bg-gray-100 py-8 px-4 lg:px-16">
                <div className=' w-9/12 mx-auto'>
                    {/* Wishlist Header */}
                    <div className="mb-6">
                    <p className="text-sm text-gray-500 mt-1">G2A › Wishlist</p>
                        <h1 className="text-2xl font-bold text-black pt-4">Wishlist (1 item)</h1>
                        
                    </div>
                    
                    {/* Wishlist Item */}
                    <div className="bg-white h-56 gap-12 rounded-lg shadow-sm flex items-center justify-between p-4">
                        {/* Item Details */}
                        <div className="flex h-full w-2/12 items-center space-x-4">
                            {/* Thumbnail */}
                            <img
                                src="https://images.g2a.com/uiadminimages/170x227/1x1x0/grand-theft-auto-v-pc/59e5efeb5bafe304c4426c47"
                                alt="Game Thumbnail"
                                className=" w-full  h-full rounded-md object-cover object-center"
                            />


                        </div>

                        {/* Item Actions */}
                        <div className=" items-center flex flex-col justify-between  h-full w-10/12">
                            <div className=' flex w-full justify-between'>
                                <h2 className="text-lg font-bold text-black">
                                    Grand Theft Auto V PC
                                </h2>
                                <p className="text-lg font-bold text-black">11.68 USD</p>

                            </div>
                            <div className=' flex w-full justify-between items-center'>
                                <span className=' text-gray-500'>
                                    OFFERS FROM 31 SELLERS
                                </span>
                                <div className=' flex items-center'>
                                    <button className=" text-white text-sm px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-600">
                                        <span className=' text-black text-lg font-semibold'>Add to cart</span>
                                        <div className=' bg-secondary w-12 h-12 rounded-full flex justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" font-size="20"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"><circle cx="6" cy="22" r="1" stroke="none"></circle><circle cx="20" cy="22" r="1" stroke="none"></circle><circle cx="6" cy="22" r="1" fill="none" stroke-miterlimit="10"></circle><circle cx="20" cy="22" r="1" fill="none" stroke-miterlimit="10"></circle><path fill="none" stroke-miterlimit="10" d="M4.8 7H22l-2 10H6L4 2H1"></path></g></svg>

                                        </div>
                                    </button>


                                    <button className="bg-gray-200 text-gray-500 text-sm  w-12 h-12 flex justify-center  items-center rounded-full hover:bg-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" color="gray" class="text-sky-950" font-size="20px"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" stroke-miterlimit="10"><path d="M20 9v12a2 2 0 01-2 2H6a2 2 0 01-2-2V9M1 5h22M12 12v6M8 12v6M16 12v6M8 5V1h8v4"></path></g></svg>
                                    </button>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Wishlist