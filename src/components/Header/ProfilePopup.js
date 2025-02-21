import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addUser, removeUser } from '../../store/productSlice';
import { FaFacebookF, FaGoogle, FaPaypal } from 'react-icons/fa';
import { Base_url } from '../../utils/Base_url';
import { auth, provider, providerFacebook } from '../../utils/firebase.config';
import {
 
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from 'axios';
const ProfilePopup = () => {
  const { userInfo } = useSelector((state) => state.next);
  console.log(userInfo);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [openProfile, setOpenProfile] = useState(false);
  const openProfileFun = () => {
    setOpenProfile(!openProfile)
  }


  const removeFun = () => {

    dispatch(removeUser())
    toast.success('user sign out  successfuly!')


  }

  const navigate = useNavigate();


  const handleClick = () => {
    signInWithPopup(auth, provider).then(async(data) => {
      console.log(data);
      const { user } = data;
      try {
        const parmas = {
          username:user?.displayName,
          email:user?.email,
          password:user?.uid
        }
        const response = await axios.post(
          `${Base_url}/user/register`,parmas);
        if (response?.data?.status === 'success') {
          toast.success(response?.data?.message)
          dispatch(addUser(response?.data?.data))
          navigate('/');
        } else {
          toast.error(response?.data?.message)

          const parmas = {
            username:user?.displayName,
            email:user?.email,
            password:user?.uid
          }
          try {
            const response = await axios.post(
              `${Base_url}/user/login`,parmas);
            if (response?.data?.status === 'success') {
              toast.success(response?.data?.message)
              dispatch(addUser(response?.data?.data))
              navigate('/')
            } else {
              toast.error(response?.data?.message)
            }
            console.log(response?.data);
          } catch (error) {
            toast.error(error)
          } finally {
          }

        }
        console.log(response?.data);
      } catch (error) {
       

        toast.error(error?.response?.data?.message)
  
      } finally {
      }
     
    });
  };




  const handleFacebook = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully.");

        signInWithPopup(auth, providerFacebook)
          .then(async(data) => {
            console.log(data);
          })
          .catch(async(error) => {
            console.log(error.customData);



            try {
             
            const params = {
              username:error.customData.userName,
              email: error.customData.email,
              password: error.customData._tokenResponse.localId,
            };
            
              const response = await axios.post(
                `${Base_url}/user/register`,params);
              if (response?.data?.status === 'success') {
                toast.success(response?.data?.message)
                dispatch(addUser(response?.data?.data))
                navigate('/');
              } else {
                toast.error(response?.data?.message)
      
                    
            const params = {
              email: error.customData.email,
              password: error.customData._tokenResponse.localId,
            };
            
                try {
                  const response = await axios.post(
                    `${Base_url}/user/login`,params);
                  if (response?.data?.status === 'success') {
                    toast.success(response?.data?.message)
                    dispatch(addUser(response?.data?.data))
                    navigate('/')
                  } else {
                    toast.error(response?.data?.message)
                  }
                  console.log(response?.data);
                } catch (error) {
                  toast.error(error)
                } finally {
                }
      
              }
              console.log(response?.data);
            } catch (error) {
             
      
              toast.error(error?.response?.data?.message)
        
            } finally {
            }
          
              
          });
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className=' flex gap-1 relative items-center'>
      {userInfo ? (
        <div className=' flex items-center gap-2'>
          <div onClick={openProfileFun} className=" w-12 cursor-pointer h-12 rounded-full overflow-hidden">
            <img src="https://static.g2a.com/bLfY1FzJVNuxU2nnuANiNK/avatar_15.svg" className=" w-full h-full bg-center object-cover" />


          </div>
          <div onClick={openProfileFun} className=" relative sm:block hidden">
            <div className="  flex flex-col items-center">
              {/* <span className=" text-white text-[11px]  font-medium">{userInfo?.username}</span> */}
              {/* <span className=" text-white text-[11px]  font-medium">{userInfo?.email}</span> */}
              <span className=" text-white text-[11px]   whitespace-nowrap font-medium">Your Dgmarq</span>
            </div>


            {openProfile && (
              <div className="absolute right-0   mt-2 top-12 w-80 bg-white shadow-lg rounded-md p-5 z-50">
                <div className=" flex  justify-start gap-6  items-center">
                  <div className="">
                    <img src="https://static.g2a.com/bLfY1FzJVNuxU2nnuANiNK/avatar_15.svg" className=" w-12 h-12 rounded-full" />
                  </div>
                  <div className=" flex flex-col">
                    <span className=" text-black text-sm">{userInfo?.username}</span>
                    <span className=" text-black text-sm">{userInfo?.email}</span>
                  </div>


                </div>

                {/* Navigation Links */}
                <div className="mt-3 border-t border-b pb-2 pt-3 space-y-4">
                  <Link to={'/dashboard'} className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
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
                  </Link>
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



                  <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                    {/* <IoReceiptOutline size={20} /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="1.3em"
                      height="1.3em"
                      fill="currentColor"
                    >
                      <g
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M.5 7.5h3v8h-3zM5.5 15.5h6.9a2 2 0 001.952-1.566l1.111-5A2 2 0 0013.507 6.5H9.5v-4a2 2 0 00-2-2l-2 6" />
                      </g>
                    </svg>


                    <span>Rate transactions</span>
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
                      >
                        <path
                          d="M19 13V8A7 7 0 005 8v5a13.834 13.834 0 01-2 7h18a13.834 13.834 0 01-2-7z"
                          fill="none"
                          strokeMiterlimit={10}
                        />
                        <path data-stroke="none" d="M9.174 22a3 3 0 005.652 0z" stroke="none" />
                      </g>
                    </svg>


                    <span>Notifications</span>
                  </div>
                </div>

                <div className=" pt-2 flex  justify-between items-center">
                  <div className=" flex text-sm items-center gap-2">
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
                        <circle cx={12} cy={12} r={3} />
                        <path d="M20 12a8.049 8.049 0 00-.188-1.713l2.714-2.055-2-3.464-3.143 1.326a7.987 7.987 0 00-2.961-1.719L14 1h-4l-.422 3.375a7.987 7.987 0 00-2.961 1.719L3.474 4.768l-2 3.464 2.714 2.055a7.9 7.9 0 000 3.426l-2.714 2.055 2 3.464 3.143-1.326a7.987 7.987 0 002.961 1.719L10 23h4l.422-3.375a7.987 7.987 0 002.961-1.719l3.143 1.326 2-3.464-2.714-2.055A8.049 8.049 0 0020 12z" />
                      </g>
                    </svg>

                    Account settings


                  </div>
                  <div onClick={() => removeFun()} className=" flex cursor-pointer text-sm items-center gap-2">
                    Sign out  <svg
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
                        <path d="M17 12H2M7 17l-5-5 5-5M10 1h12v22H10" />
                      </g>
                    </svg>

                  </div>
                </div>
              </div>
            )}


          </div>


        </div>
      ) :
        <>
          <div
            onClick={toggleDropdown}

            className="flex text-white relative  bg-slate-800 rounded-full sm:w-12 w-10 sm:h-12 h-10 cursor-pointer flex-col items-center justify-center"
          >
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" font-size="24"><path d="M20.417 23H3v-2.58c0-1.4.79-2.68 2.047-3.292 1.468-.715 3.707-1.461 6.661-1.461 2.955 0 5.194.746 6.662 1.46a3.655 3.655 0 012.047 3.293V23zM16.75 6.042c0 2.784-2.257 5.958-5.042 5.958-2.784 0-5.041-3.174-5.041-5.958a5.041 5.041 0 1110.083 0z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>

            </div>

            {/* Dropdown Modal */}
            {isOpen && (
              <div className="absolute right-0  text-center mt-2 top-12 w-80 bg-white shadow-lg rounded-md p-5 z-50">
                {/* Header */}
                <h2 className="text-lg font-bold text-gray-800 mb-3">Welcome!</h2>

                {/* Sign-In Options */}
                <div className="space-y-3">
                  {/* Google Sign-In */}
                  <button onClick={()=>handleClick()} className="w-full flex items-center  text-sm pr-7 font-semibold justify-between gap-2 p-3  border-blue border rounded-sm  text-blue  hover:text-white   hover:bg-secondary">
                    <FaGoogle size={20} />
                    Sign in With Google
                  </button>
                  {/* Facebook Sign-In */}
                  <button onClick={()=>handleFacebook()} className="w-full flex items-center  text-sm pr-7 font-semibold justify-between gap-2 p-3  border-blue border rounded-sm  text-blue  hover:text-white   hover:bg-secondary">
                    <FaFacebookF size={20} />
                    Sign in with Facebook
                  </button>

                  {/* Default Sign-In */}
                  <button className="w-full flex items-center justify-center p-3 bg-blue text-white rounded-sm  hover:bg-secondary">
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
                    <Link to="/register" className="text-blue  font-medium hover:underline">
                      Register
                    </Link>
                  </p>
                </div>

                {/* Navigation Links */}
                <div className="mt-5 border-t pt-3 space-y-3">
                  <Link to="/register" className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue cursor-pointer">
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
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue cursor-pointer">
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
                  <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue cursor-pointer">
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
          
          <div className=" sm:block hidden">
            <div className="  flex flex-col items-center">
              <span className=" text-white text-[12px] font-semibold">Sign in</span>
              <span className=" text-white text-[12px] font-semibold">Register</span>
            </div>
          </div>



        </>}
    </div>
  )
}

export default ProfilePopup
