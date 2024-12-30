import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion"; 
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeUser } from '../../store/productSlice';
import Button from '../Button';
import { TbLogout2 } from 'react-icons/tb';
import { FaFacebookF, FaGoogle, FaPaypal } from 'react-icons/fa';
import { IoKeyOutline, IoPersonOutline, IoReceiptOutline } from 'react-icons/io5';

const ProfilePopup = () => {
    const { userInfo } = useSelector((state) => state.next);
    console.log(userInfo);

    const dispatch = useDispatch();


    const [isOpen, setIsOpen] = useState(false);

    // Toggle the dropdown
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };


  const [openProfile,setOpenProfile] = useState(false);

  const openProfileFun = ()=>{
    setOpenProfile(!openProfile)
  }


  const removeFun = ()=>{

    dispatch(removeUser())
    toast.success('user sign out  successfuly!')
  

  }

  return (
    <>
       {userInfo ? (
                <>
                  <div onClick={openProfileFun} className=" w-12 h-12 rounded-full overflow-hidden">
                    <img src="https://static.g2a.com/bLfY1FzJVNuxU2nnuANiNK/avatar_15.svg" className="" />
                  </div>
                  <div onClick={openProfileFun} className=" relative sm:block hidden">
                    <div className="  flex flex-col items-center">
                      <span className=" text-white text-sm font-semibold">{userInfo?.username}</span>
                      <span className=" text-white text-[12px] font-semibold">{userInfo?.email}</span>
                    </div>

                     
                           {openProfile && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute right-0 z-40  mt-4 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className=" flex gap-2 p-2 items-center">
                      <div  className=" w-12 h-12 rounded-full overflow-hidden">
                    <img src="https://static.g2a.com/bLfY1FzJVNuxU2nnuANiNK/avatar_15.svg" className="" />
                  </div>
                  <div  className=" relative sm:block hidden">
                    <div className="  flex flex-col items-center">
                      <span className=" text-black text-sm font-semibold">{userInfo?.username}</span>
                      <span className=" text-black text-[12px] font-semibold">{userInfo?.email}</span>
                    </div>
                     
                  </div>

                      </div>
                      <hr/>
                       <div className=" p-2">
                       <Button label={'Sign out'} onClick={()=>removeFun()} className={' w-full bg-secondary my-2'}  IconRight={<TbLogout2 className="" size={24} />} />
                       </div>
                    </motion.div>
                  )}
                       
                     
                  </div>

                  
                </>
              ) :
                <>
                  <div
                       onClick={toggleDropdown}

                    className="flex text-white relative  bg-slate-800 rounded-full sm:w-12 w-10 sm:h-12 h-10 cursor-pointer flex-col items-center justify-center"
                  >
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" font-size="24"><path d="M20.417 23H3v-2.58c0-1.4.79-2.68 2.047-3.292 1.468-.715 3.707-1.461 6.661-1.461 2.955 0 5.194.746 6.662 1.46a3.655 3.655 0 012.047 3.293V23zM16.75 6.042c0 2.784-2.257 5.958-5.042 5.958-2.784 0-5.041-3.174-5.041-5.958a5.041 5.041 0 1110.083 0z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    
                    

                         {/* Dropdown Modal */}
      {isOpen && (
        <div className="absolute right-0  text-center mt-2 top-12 w-80 bg-white shadow-lg rounded-md p-5 z-50">
          {/* Header */}
          <h2 className="text-lg font-bold text-gray-800 mb-3">Welcome!</h2>

          {/* Sign-In Options */}
          <div className="space-y-3">
            {/* Google Sign-In */}
            <button className="w-full flex items-center  text-sm pr-7 font-semibold justify-between gap-2 p-3  border-blue-600 border rounded-sm  text-blue-600  hover:text-white  hover:bg-blue-600">
              <FaGoogle size={20} />
              Sign in With Google
            </button>
            {/* Facebook Sign-In */}
            <button className="w-full flex items-center  text-sm pr-7 font-semibold justify-between gap-2 p-3  border-blue-600 border rounded-sm  text-blue-600  hover:text-white  hover:bg-blue-600">
              <FaFacebookF size={20} />
              Sign in with Facebook
            </button>
            {/* PayPal Sign-In */}
            <button className="w-full flex items-center  text-sm pr-7 font-semibold justify-between gap-2 p-3  border-blue-600 border rounded-sm  text-blue-600  hover:text-white  hover:bg-blue-600">
              <FaPaypal size={20} />
              Sign in with PayPal
            </button>
            {/* Default Sign-In */}
            <button className="w-full flex items-center justify-center p-3 bg-blue-600 text-white rounded-sm hover:bg-blue-600">
              Sign in
            </button>
          </div>

          {/* Terms & Privacy */}
          <p className="text-xs text-gray-500 text-center mt-3">
            By clicking Sign in with Google, Facebook, or PayPal, you agree to G2A's Terms & Conditions and Privacy Policy.
          </p>

          {/* Register */}
          <div className="text-center mt-4">
            <p className="text-sm flex flex-col  gap-2 text-black font-semibold">
              Don't have an account?
              <Link to="/register" className="text-blue-600  font-medium hover:underline">
                Register
              </Link>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mt-5 border-t pt-3 space-y-3">
            <div className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              {/* <IoPersonOutline size={20} /> */}
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="1.3em"
  height="1.3em"
  fill="currentColor"
>
  <g
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeMiterlimit={10}
  >
    <path d="M12 3v3M19.778 6.222l-2.121 2.121M23 14h-3M7 9l3.586 3.586M1 14h3" />
    <circle cx={12} cy={14} r={2} />
    <path d="M20.485 21A10.955 10.955 0 0023 14c0-6.075-4.925-11-11-11S1 7.925 1 14c0 2.659.944 5.098 2.515 7h16.97z" />
  </g>
</svg>

              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
              {/* <IoKeyOutline size={20} /> */}
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="1.3em"
  height="1.3em"
  fill="currentColor"
>
  <g
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeMiterlimit={10}
  >
    <path d="M18 1L9.766 9.234A6.953 6.953 0 008 9a7 7 0 107 7c0-.891-.173-1.74-.476-2.524L17 11V8h3l3-3V1h-5z" />
    <circle cx={8} cy={16} r={2} />
  </g>
</svg>

              <span>Your keys</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
              {/* <IoReceiptOutline size={20} /> */}
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="1.3em"
  height="1.3em"
  fill="currentColor"
>
  <g
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeMiterlimit={10}
  >
    <circle cx={3} cy={4} r={2} />
    <circle cx={3} cy={12} r={2} />
    <circle cx={3} cy={20} r={2} />
    <path d="M9 4h14M9 12h14M9 20h14" />
  </g>
</svg>

              <span>Order History</span>
            </div>
          </div>
        </div>
      )}
                  </div>
                  <div className=" sm:block hidden">
                    <div className="  flex flex-col items-center">
                      <span className=" text-white text-sm font-semibold">Sign in</span>
                      <span className=" text-white text-sm font-semibold">Register</span>
                    </div>
                  </div>

              

                </>}
    </>
  )
}

export default ProfilePopup
