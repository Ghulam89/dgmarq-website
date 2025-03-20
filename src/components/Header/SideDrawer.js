import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HorizontalCard from "../Cards/HorizontalCard";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import { H6 } from "../common/Heading";
import { toast } from "react-toastify";
import { addToCart } from "../../store/productSlice";

const SideDrawer = ({ isOpen, setIsOpen }) => {
    const productData = useSelector((state) => state?.next?.productData);

    console.log("Product Data:", productData);
    const dispatch = useDispatch();

    const productPrice = productData?.map((item) => item?.price * item?.quantity);
    console.log(productPrice);

    const totalPriceAfterDiscount = productPrice?.reduce((acc, price) => acc + price, 0);

    console.log("Total Price After Discount:", totalPriceAfterDiscount);

      const [isHovered, setIsHovered] = useState(false);
    
      // Box shadow styles
      const defaultBoxShadow =
        "";
      const hoverBoxShadow =
        "rgba(0, 0, 0, 0.1) 0px 3px 8px, rgba(0, 0, 0, 0.1) 0px 5px 10px, rgba(0, 0, 0, 0.3) 0px 5px 10px";
    


    const [wishList, setWishList] = useState([]);

    const { userInfo } = useSelector((state) => state.next);
    console.log(userInfo);

    useEffect(() => {

        axios.get(`${Base_url}/wishlist/get/${userInfo?._id}`).then((res) => {

            console.log(res);


            setWishList(res?.data)

        }).catch((error) => {


            console.log(error);


        })

    }, [])




    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black bg-opacity-30"
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline size={30} className="text-green-600" />
                        <h2 className="text-lg font-semibold">Added to the cart</h2>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>

                {/* Drawer Content */}
                <div className="p-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
                    {productData?.map((item, index) => (
                       <div className="">
                         <HorizontalCard
                            key={index}
                            url={`/product-details/${item?._id}`}
                            image={item?.image}
                            title={item?.title}
                            discount={item?.gst}
                            price={item?.price}
                            originalPrice={item?.actualPrice}
                        />
                       </div>
                    ))}
                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-black">You may also like</h2>
                        {wishList?.map((item, index) => (
                         <Link to={`/product-details/${item?._id}`}  className=" " >
                             {/* <p className=" uppercase text-[12px] text-gray-500 pb-1">OFFER from 1 seller</p> */}
                             <div style={{
                               boxShadow: isHovered ? hoverBoxShadow : defaultBoxShadow,
                             }}
                               onMouseEnter={() => setIsHovered(true)}
                               onMouseLeave={() => setIsHovered(false)} className="border group rounded-sm mb-2 bg-white  overflow-hidden hover:transform  sm:h-48 h-auto hover:translate-y-[-2px]  flex  flex-row    hover:border-[#e0e0e0] transition-shadow">
                       
                              <div className=" sm:w-4/12 w-12/12 relative">
                              <img src={item?.images[0]} alt={item?.title} className="w-full h-full  object-center" />
                              <div className=" absolute  bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.1)] top-0  w-full h-full">
                       
                       </div>
                              </div>
                               <div className="p-4 sm:w-7/12 w-12/12  flex flex-col justify-between  items-start">
                                 
                               <H6>
  {item?.title
    .split(" ")
    .slice(0, 10) 
    .join(" ")}
  {item?.title.split(" ").length > 10 ? "..." : ""}
</H6>
                               <div className=" flex justify-between w-full pt-4 items-center">
                              <div>
                              <div className="flex flex-col  justify-between items-center gap-1">
                                   <p className="text-xl font-bold text-black">{item?.discountPrice}</p>
                                   {item?.originalPrice ?
                                     <p className="text-sm text-gray-500 line-through">{`$ ${item?.originalPrice}`}</p> : null
                                   }
                       
                                 </div>
                                 {item?.gst?
                                    <button className=" w-10 text-[12px] rounded-md  text-red-500 bg-[#FAE9E7] border border-red-500">{item?.gst}%</button>:null
                                    }
                              </div>


                                    
                       <div onClick={() => {
                                      
                                       dispatch(
                                         addToCart({
                                           _id: item?._id,
                                           image: item?.images[0],
                                           description: item?.description,
                                           title: item?.title,
                                           quantity: 1,
                                           price: item?.discountPrice
                                         })
                                       )
                       
                                       toast.success('Product add to cart successfuly!')
                                     }} className=' bg-secondary text-white w-12 h-12 rounded-full flex justify-center items-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" font-size="20"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"><circle cx="6" cy="22" r="1" stroke="none"></circle><circle cx="20" cy="22" r="1" stroke="none"></circle><circle cx="6" cy="22" r="1" fill="none" stroke-miterlimit="10"></circle><circle cx="20" cy="22" r="1" fill="none" stroke-miterlimit="10"></circle><path fill="none" stroke-miterlimit="10" d="M4.8 7H22l-2 10H6L4 2H1"></path></g></svg>

                                                </div>
                               </div>
                       

                                 
                       
                       
                       
                               </div>
                             </div>
                       
                           </Link>
                    ))}
                    </div>
                </div>

                {/* Drawer Footer */}
                <div className="p-4 absolute bottom-0 w-full border-t flex gap-2">
                    <Link
                        to="/"
                        className="flex w-full items-center justify-center rounded-md text-secondary border border-secondary py-2.5 text-sm font-medium hover:bg-secondary hover:text-white focus:outline-none"
                    >
                        Continue shopping
                    </Link>
                    <Link
                        to="/cart"
                        className="flex w-full items-center justify-center rounded-md bg-blue py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none"
                    >
                        Go to Cart
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideDrawer;