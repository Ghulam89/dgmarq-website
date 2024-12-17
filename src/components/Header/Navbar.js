
import React, { useEffect, useState } from "react";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.jpeg'
import { useDispatch, useSelector } from "react-redux";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion
import Button from "../Button";
import { TbLogout2 } from "react-icons/tb";
import { removeUser } from "../../store/productSlice";
import { toast } from "react-toastify";
const Navbar = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.next);
  console.log(userInfo);

  const links = [
    {
      id: 1,
      name: 'Home',
      url: '/'
    },
    {
      id: 2,
      name: 'Shop',
      url: '/shop'
    },
    {
      id: 3,
      name: 'Blog',
      url: '/'
    },
    {
      id: 4,
      name: 'About Us',
      url: '/'
    },
    {
      id: 4,
      name: 'Contact Us',
      url: '/'
    },

  ]

  const iconLinks = [
    // {
    //   href: "/register",
    //   icon: <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" font-size="24"><path d="M20.417 23H3v-2.58c0-1.4.79-2.68 2.047-3.292 1.468-.715 3.707-1.461 6.661-1.461 2.955 0 5.194.746 6.662 1.46a3.655 3.655 0 012.047 3.293V23zM16.75 6.042c0 2.784-2.257 5.958-5.042 5.958-2.784 0-5.041-3.174-5.041-5.958a5.041 5.041 0 1110.083 0z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
    //   text: "Account",
    // },
    {
      href: "/wishlist",
      icon: <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" font-size="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.0521 3.05014C4.78562 0.316619 9.21779 0.316619 11.9513 3.05014C11.968 3.06688 11.9847 3.08369 12.0012 3.10055C12.0177 3.08369 12.0344 3.06689 12.0511 3.05014C14.7846 0.316619 19.2168 0.316619 21.9503 3.05014C24.6838 5.78367 24.6838 10.2158 21.9503 12.9494L12.7073 22.1924C12.5198 22.3799 12.2654 22.4853 12.0001 22.4853C11.7349 22.4852 11.4805 22.3799 11.293 22.1923L2.0521 12.9494C2.05207 12.9493 2.05205 12.9493 2.05202 12.9493C-0.681428 10.2158 -0.681402 5.78364 2.0521 3.05014ZM10.5371 4.46436C8.58462 2.51188 5.41879 2.51188 3.46631 4.46436C1.51383 6.41683 1.51383 9.58267 3.46631 11.5351L3.46639 11.5352L12.0003 20.071L20.5361 11.5351C22.4886 9.58267 22.4886 6.41683 20.5361 4.46436C18.5836 2.51188 15.4178 2.51188 13.4653 4.46436C13.2255 4.70415 13.0163 4.96306 12.8344 5.23719C12.6491 5.5164 12.3363 5.68425 12.0012 5.68425C11.6661 5.68425 11.3533 5.5164 11.168 5.23719C10.9861 4.96316 10.776 4.70323 10.5371 4.46436Z" fill="currentColor"></path></svg>,
      text: "Wishlist",
    },
    {
      href: "/category",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" font-size="20"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"><circle cx="6" cy="22" r="1" stroke="none"></circle><circle cx="20" cy="22" r="1" stroke="none"></circle><circle cx="6" cy="22" r="1" fill="none" stroke-miterlimit="10"></circle><circle cx="20" cy="22" r="1" fill="none" stroke-miterlimit="10"></circle><path fill="none" stroke-miterlimit="10" d="M4.8 7H22l-2 10H6L4 2H1"></path></g></svg>,
      text: "Cart",
    }

  ];


const dispatch = useDispatch();



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

      <header className="mx-auto flex  bg-primary  h-20 items-center justify-between px-5">
        <Link to="/" className="">
          <img

            className="cursor-pointer h-12  sm:w-auto w-28"
            src={logo}
            alt="company logo"
          />

        </Link>

        <form className="hidden h-11 w-2/4 bg-white rounded-md overflow-hidden items-center border md:flex">
          <CiSearch className="mx-3" size={20} />

          <input
            className="hidden w-11/12 outline-none md:block"
            type="search"
            placeholder="Search"
          />
          <button className="ml-auto text-white h-full bg-secondary px-4">
            Search
          </button>
        </form>

        <div className=" flex items-center gap-4">
          {/* <div className="  hidden sm:block bg-slate-800 rounded-full px-2 py-1.5">
         <span className=" text-white text-sm">EN / USD</span>
         </div> */}
          <div className=" gap-3 flex  justify-center">

            <div className=" flex  gap-2">
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
                       <Button label={'Sign out'} onClick={()=>removeFun()} className={' w-full bg-secondary my-2'}  IconRight={<TbLogout2  className="" size={24} />} />
                       </div>
                    </motion.div>
                  )}
                       
                     
                  </div>

                  
                </>
              ) :
                <>
                  <Link
                    to={'/register'}
                    className="flex text-white  bg-slate-800 rounded-full sm:w-12 w-10 sm:h-12 h-10 cursor-pointer flex-col items-center justify-center"
                  >
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" font-size="24"><path d="M20.417 23H3v-2.58c0-1.4.79-2.68 2.047-3.292 1.468-.715 3.707-1.461 6.661-1.461 2.955 0 5.194.746 6.662 1.46a3.655 3.655 0 012.047 3.293V23zM16.75 6.042c0 2.784-2.257 5.958-5.042 5.958-2.784 0-5.041-3.174-5.041-5.958a5.041 5.041 0 1110.083 0z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                  </Link>
                  <div className=" sm:block hidden">
                    <div className="  flex flex-col items-center">
                      <span className=" text-white text-sm font-semibold">Sign in</span>
                      <span className=" text-white text-sm font-semibold">Register</span>
                    </div>
                  </div>
                </>}

            </div>

            {iconLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="flex text-white  bg-slate-800 rounded-full sm:w-12 w-10 sm:h-12 h-10 cursor-pointer flex-col items-center justify-center"
              >
                {link.icon}
                {/* <p className="text-xs text-white">{link.text}</p> */}
              </Link>
            ))}


          </div>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <RxHamburgerMenu className="w-7 text-white h-7" />
            </button>
          </div>
        </div>

      </header>
      {mobileMenuOpen && (
        <section
          className={`block md:hidden absolute left-0 right-0 z-50 h-screen w-full bg-primary ${mobileMenuOpen ? "none" : "block"
            }`}
        >
          <div className="mx-auto">
            {/* <div className="mx-auto flex w-full justify-center gap-3 py-4">
              {iconLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex cursor-pointer flex-col items-center justify-center"
                >
                  {link.icon}
                  <p className="text-xs">{link.text}</p>
                </a>
              ))}
            </div> */}
            <form className="my-4 mx-5 flex h-12 items-center border">
              <CiSearch className="mx-3 h-4 w-4" />

              <input
                className="hidden w-11/12 text-white placeholder:text-white outline-none md:block"
                type="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="ml-auto text-white h-full bg-[#272727] px-4 hover:bg-[#272727]"
              >
                Search
              </button>
            </form>
            <ul className="text-center font-medium">
              {links.map((link, index) => (
                <li key={index} className="py-2 text-white">
                  <Link className=" text-white" to={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;