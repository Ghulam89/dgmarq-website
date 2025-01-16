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
import BottomHeader from "../../components/Header/BottomHeader";
const SubSubCategory = () => {
    const {id} = useParams();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [products,setProducts] = useState([])
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const [layout, setLayout] = useState('listing');

 
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
            <BottomHeader/>

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
                                            <img src={item?.images[0]} className=" w-full h-44" alt="" />
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

export default SubSubCategory;
