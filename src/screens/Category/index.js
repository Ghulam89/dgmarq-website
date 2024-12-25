import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { MdClose } from "react-icons/md";
import ProductCard from "../../components/Cards/ProductCard";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";
import Subscription from "../../components/Subscription";
import Gather from "../../components/Gather/Gather";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { FaListUl } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";
const Category = () => {
    const {id} = useParams();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [products,setProducts] = useState([])
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const [layout, setLayout] = useState('listing');

    // const products = [
    //     {   id:1,
    //         image: "https://images.g2a.com/170x228/1x1x0/webroot-secureanywhere-antivirus-1-device-global-key-pc-1-year/1a398a92a262426f8b24f8f8",
    //         title: "Webroot SecureAnywhere AntiVirus 1 Device",
    //         price: "1.95",
    //         originalPrice: "37.00",
    //         discount: "95",
    //         offerLabel: "OFFER FROM 6 SELLERS",
    //         isSponsored: false,
    //     },
    //     {   id:2,
    //         image: "https://images.g2a.com/170x228/1x1x0/call-of-duty-modern-warfare-ii-burger-king-operator-skin-1-hour-2xp-call-of-duty-official-key-global/8c00f53c7bda42c587cb94bb",
    //         title: "Call of Duty: Modern Warfare II - Burger King Operator Skin",
    //         price: "0.50",
    //         originalPrice: "42.39",
    //         discount: "99",
    //         offerLabel: "OFFER FROM 26 SELLERS",
    //         isSponsored: false,
    //     },
    //     {   id:3, 
    //         image: "https://images.g2a.com/170x228/1x1x0/coreldraw-2021-standard-1-pc-lifetime-corel-key-global/d5b7a4406aed49ec8c308045",
    //         title: "CorelDRAW 2021 Standard (1 PC, Lifetime)",
    //         price: "1.66",
    //         originalPrice: "375.43",
    //         discount: "99",
    //         offerLabel: "OFFER FROM 14 SELLERS",
    //         isSponsored: false,
    //     },
    //     {  id:4,
    //         image: "https://images.g2a.com/170x228/1x1x0/steam-gift-card-10-usd-steam-key-global/5911ec005bafe3cffe1bad14",
    //         title: "Steam Gift Card 10 USD - Steam Key",
    //         price: "12.23",
    //         originalPrice: "0",
    //         discount: "0",
    //         offerLabel: "",
    //         isSponsored: true,
    //     },
    //     {   id:5,
    //         image: "https://images.g2a.com/170x228/1x1x0/playstation-network-gift-card-10-usd-psn-key-united-states/8d1b0a14cb3442be8979328e",
    //         title: "PlayStation Network Gift Card 10 USD",
    //         price: "11.08",
    //         originalPrice: "21.14",
    //         discount: "47",
    //         offerLabel: "",
    //         isSponsored: true,
    //     },
    //     {    id:6,
    //         image: "https://images.g2a.com/170x228/1x1x0/infraspace-pc-steam-key-global/ce1430957c934b7a8c858cbb",
    //         title: "InfraSpace (PC) - Steam Key - GLOBAL",
    //         price: "0.62",
    //         originalPrice: "21.14",
    //         discount: "97",
    //         offerLabel: "OFFER FROM 15 SELLERS",
    //         isSponsored: false,
    //     },
    // ];


    useEffect(()=>{
      axios.get(`${Base_url}/products/subcategory/${id}`).then((res)=>{
      console.log(res);
      setProducts(res?.data?.data)
      }).catch((error)=>{
        console.log(error);
        
      })  

    },[])

    return (
        <>
            <Navbar />
            <div className=" container  md:px-5  px-3 mx-auto pb-10">
                <div className=" bg-white  py-3 z-40 sticky top-0 flex justify-between items-center">
                    <div>
                        <h1 className=" text-black font-semibold text-2xl  pb-2">Top Up Mobile Games</h1>
                        <h6 className="h6">306,182 listings</h6>
                    </div>

                    <div className=" flex items-center gap-2">

                        <div className=" md:block hidden ">
                            <div className=" flex gap-4 items-center">
                                <div>
                                    <FaListUl className=" cursor-pointer" onClick={() => setLayout('listing')} size={25} />
                                </div>
                                <div>
                                    <TfiLayoutGrid3 onClick={() => setLayout('grid')} className=" text-secondary" size={25} />
                                </div>

                                <div className=" flex gap-3  items-center">
                                    <p className=" m-0 font-semibold text-black">Sort by</p>
                                    <select className="  border py-1  bg-lightGray   rounded-md p-2.5  text-primary placeholder:text-primary ">
                                        <option className="">Best match</option>
                                        <option>Bestsellers</option>
                                        <option>Release date-oldest</option>
                                        <option>Release date-newest</option>
                                        <option>Sort by: new</option>
                                        <option>Sort by: popular</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <Button
                            label={"filter"}
                            onClick={toggleMenu}
                            className={
                                "bg-black  block md:hidden uppercase text-xs py-1 font-bold  text-white"
                            }
                        />
                    </div>
                </div>

                <div className=" flex  pt-4 gap-12">
                    <div
                        className={` sm:w-3/12 w-8/12    bg-white ${isMenuOpen
                            ? "block  fixed  text-center lg:p-5 p-0 top-0 right-0  z-50 left-0 w-[70%] h-full bg-white"
                            : "w-[20%] hidden lg:block  bg-white"
                            }`}
                    >
                        <div className=" p-2 border-t lg:hidden block border-b flex justify-between  items-center">
                            <MdClose
                                size={20}
                                className=" cursor-pointer"
                                onClick={() => setMenuOpen(false)}
                            />
                            <p className="h5">filter</p>
                            <span className=" text-gray-500 border-b">Clear All</span>
                        </div>

                        <div className="h-full pb-12  px-4 sm:overflow-y-hidden overflow-y-scroll">

                            <h1 className=" text-black font-bold  text-lg pb-4">Categories</h1>

                            <ul className=" leading-7">
                                <li className=" flex justify-between">
                                    <span className="">Super SuS</span>
                                    <span>6</span>
                                </li>
                                <li className=" flex justify-between">
                                    <span className="">Hago</span>
                                    <span>6</span>
                                </li>
                                <li className=" flex justify-between">
                                    <span className="">Farlight 84</span>
                                    <span>29</span>
                                </li>
                                <li className=" flex justify-between">
                                    <span className="">Mobile Legends: Bang Bang</span>
                                    <span>29</span>
                                </li>
                            </ul>

                            <div className=" pt-3">
                                <h1 className=" text-black font-bold    text-lg pb-4">Price <span className=" font-normal">(USD)</span></h1>
                                <div className="  grid grid-cols-2 gap-2 items-center">
                                    <input placeholder="From" className=" border border-gray-200 p-2 outline-none  focus:border-secondary rounded-sm bg-white" />
                                    <input placeholder="From" className=" border border-gray-200 p-2 outline-none  focus:border-secondary rounded-sm bg-white" />
                                </div>
                            </div>

                            <div className=" pt-5">
                                <h1 className=" text-black font-bold    text-lg pb-4">Availability</h1>
                                <ul className=" flex gap-3 flex-col">
                                    <li className=" flex gap-2 items-center">
                                        <input placeholder="From" type="checkbox" className=" border-2 w-5  h-5 border-gray-200 p-2 outline-none  focus:border-secondary rounded-sm bg-white" />
                                        <span>Items available in Pakistan</span>
                                    </li>
                                    <li className=" justify-between flex gap-2 items-center">
                                        <div className=" flex gap-2 items-center">
                                            <input placeholder="From" type="checkbox" className=" border-2 w-5  h-5 border-gray-200 p-2 outline-none  focus:border-secondary rounded-sm bg-white" />
                                            <span>Items in stock</span>
                                        </div>
                                        <span>65</span>
                                    </li>
                                </ul>


                            </div>

                            <div className=" pt-5">
                                <h1 className=" text-black font-bold    text-lg pb-4">Platform</h1>
                                <ul className=" flex gap-3 flex-col">

                                    <li className=" justify-between flex gap-2 items-center">
                                        <div className=" flex gap-2 items-center">
                                            <input placeholder="From" type="checkbox" className=" border-2 w-5  h-5 border-gray-200 p-2 outline-none  focus:border-secondary rounded-sm bg-white" />
                                            <span>Epic Games</span>
                                        </div>
                                        <span>65</span>
                                    </li>
                                    <li className=" justify-between flex gap-2 items-center">
                                        <div className=" flex gap-2 items-center">
                                            <input placeholder="From" type="checkbox" className=" border-2 w-5  h-5 border-gray-200 p-2 outline-none  focus:border-secondary rounded-sm bg-white" />
                                            <span>In App</span>
                                        </div>
                                        <span>65</span>
                                    </li>
                                    <li className=" justify-between flex gap-2 items-center">
                                        <div className=" flex gap-2 items-center">
                                            <input placeholder="From" type="checkbox" className=" border-2 w-5  h-5 border-gray-200 p-2 outline-none  focus:border-secondary rounded-sm bg-white" />
                                            <span>EA Sports FC Mobile</span>
                                        </div>
                                        <span>65</span>
                                    </li>
                                </ul>


                            </div>
                            <hr className="  mt-4" />


                        </div>



                    </div>
                    <div className=" sm:w-9/12 w-12/12">
                        {layout === 'listing' ?

                            products?.map((item, index) => {
                                return (
                                    <Link to={`/product-details/${item?._id}`} className=" border flex  gap-4   p-3">

                                        <div className=" w-2/12">
                                            <img src={item?.images[0]} className=" w-full h-auto" alt="" />
                                        </div>

                                        <div className=" w-10/12">
                                            <h4 className="  font-semibold">{item?.title}</h4>

                                            <div className=" flex w-full flex-col pt-4">
                                                <div className=" flex items-center justify-between">
                                                    <span className=" text-sm text-gray-400">Platform: <b>ReidosCoins</b></span>
                                                    <p className=" font-semibold text-lg">$ 57.85</p>
                                                </div>
                                                <span className=" text-sm text-gray-400">Type: <b>Key</b></span>
                                                <span className=" text-sm text-gray-400">Region: <b>GLOBAL</b></span>
                                                <span className=" text-sm text-gray-400">Can activate in: <b>Pakistan</b></span>
                                            </div>
                                        </div>

                                    </Link>
                                )
                            })
                            :
                            <div className="grid item1 mx-auto col-span-2  mt-3  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-8">
                                {products?.map((item, index) => {
                                    return (
                                        <>
                                            <ProductCard image={item?.image} title={item?.title} price={item?.price} url={`/product-details/${item?.id}`} />
                                        </>
                                    );
                                })}
                            </div>

                        }


                    </div>
                </div>
            </div>
            <Gather />
            <Subscription />
            <Footer />
        </>
    );
};

export default Category;
