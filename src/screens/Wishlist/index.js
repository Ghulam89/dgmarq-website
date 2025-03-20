import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import BottomHeader from '../../components/Header/BottomHeader'
import axios from 'axios'
import { Base_url } from '../../utils/Base_url'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/productSlice'
import { toast, ToastContainer } from 'react-toastify'
import SideDrawer from '../../components/Header/SideDrawer'

const Wishlist = () => {


    const dispatch = useDispatch();


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



    const removeFunction = (user, product) => {

        console.log(user, product);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#A47ABF",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {

                axios
                    .post(`${Base_url}/wishlist/remove`, {
                        productId:product,
                        userId:userInfo?._id,
                    })
                    .then((res) => {

                        console.log(res);
                        if (res.status === 200) {
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                            axios.get(`${Base_url}/wishlist/get/${userInfo?._id}`).then((res) => {

                                console.log(res);


                                setWishList(res?.data)

                            }).catch((error) => {


                                console.log(error);


                            })

                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        });
    };
     const [openSide,setOpenSide] = useState(false);
    
    return (
        <>
            <Navbar />
            <BottomHeader />
            <ToastContainer/>
            <SideDrawer  setIsOpen={setOpenSide} isOpen={openSide} />
            <div className="bg-gray-100 py-8 px-4 lg:px-16">
                <div className=' w-9/12 mx-auto'>
                    {/* Wishlist Header */}
                    <div className="mb-6">
                        <p className="text-sm text-gray-500 mt-1">G2A › Wishlist</p>
                        <h1 className="text-2xl font-bold text-black pt-4">Wishlist ({wishList?.length} item)</h1>

                    </div>
                    {wishList?.map((item, index) => {
                        return (

                            < div className="bg-white border-b h-56 gap-12 rounded-lg shadow-sm flex items-center justify-between p-4" >
                                {/* Item Details */}
                                < Link to={`/product-details/${item?._id}`} className="flex h-full w-2/12 items-center space-x-4" >
                                    {/* Thumbnail */}
                                    < img
                                        src={item?.images[0]}
                                        alt="Game Thumbnail"
                                        className=" w-full  h-full rounded-md object-cover object-center"
                                    />


                                </Link>

                                {/* Item Actions */}
                                <div className=" items-center flex flex-col justify-between  h-full w-10/12">
                                    <div className=' flex w-full justify-between'>
                                        <h2 className="text-lg font-bold text-black">
                                            {item?.title}
                                        </h2>
                                        <p className="text-lg font-bold text-black">{item?.discountPrice} USD</p>

                                    </div>
                                    <div className=' flex w-full justify-between items-center'>
                                        <span className=' text-gray-500'>
                                            OFFERS FROM 31 SELLERS
                                        </span>
                                        <div className=' flex items-center'>
                                            <button onClick={() => {
                                                            setOpenSide(true)
                                                            dispatch(
                                                              addToCart({
                                                                
                                                                _id: item?._id,
                                                                image: item?.images[0],
                                                                description: item?.description,
                                                                title: item?.title,
                                                                quantity: 1,
                                                                price: item?.discountPrice,
                                                                gst:item?.gst,
                                                                actualPrice:item?.actualPrice
                                                              })
                                                            )
                                            
                                                            toast.success('Product add to cart successfuly!')
                                                          }} className=" text-white text-sm px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-600">
                                                <span className=' text-black text-lg font-semibold'>Add to cart</span>
                                                <div className=' bg-secondary w-12 h-12 rounded-full flex justify-center items-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" font-size="20"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"><circle cx="6" cy="22" r="1" stroke="none"></circle><circle cx="20" cy="22" r="1" stroke="none"></circle><circle cx="6" cy="22" r="1" fill="none" stroke-miterlimit="10"></circle><circle cx="20" cy="22" r="1" fill="none" stroke-miterlimit="10"></circle><path fill="none" stroke-miterlimit="10" d="M4.8 7H22l-2 10H6L4 2H1"></path></g></svg>

                                                </div>
                                            </button>


                                            <button onClick={() => removeFunction(item?.userId, item?._id)} className="bg-gray-200 text-gray-500 text-sm  w-12 h-12 flex justify-center  items-center rounded-full hover:bg-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" color="gray" class="text-sky-950" font-size="20px"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" stroke-miterlimit="10"><path d="M20 9v12a2 2 0 01-2 2H6a2 2 0 01-2-2V9M1 5h22M12 12v6M8 12v6M16 12v6M8 5V1h8v4"></path></g></svg>
                                            </button>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        )
                    })}

                </div >
            </div >
            <Footer />
        </>
    )
}

export default Wishlist
