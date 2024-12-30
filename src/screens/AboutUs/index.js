import React from 'react'
import Navbar from '../../components/Header/Navbar'
import BottomHeader from '../../components/Header/BottomHeader'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import Slider1 from '../../components/Slider1'

const AboutUs = () => {
  return (
    <>
     <Navbar/>
     <BottomHeader/>
     <div className="bg-[#212121] h-[90vh] flex justify-center items-center py-4">
        <div className='  container px-3 justify-center  mx-auto flex flex-col-reverse lg:flex-row items-center  w-full'>
      <div className="flex  flex-col">
        <p className="text-[#2f82fb] tracking-[1.2rem] uppercase  text-center md:text-start ">
          what is g2a
        </p>
        <h2 className="uppercase  text-6xl py-4 leading-[4rem]	 font-bold text-[#fff] ">
          Global <br /> E-Commerce
        </h2>
        <h3 className="  text-2xl text-[#fff] opacity-70">
          World's largest marketplace for digital entertainment
        </h3>
        <div className="w-full text-[#fff] text-[1.6rem] flex flex-col gap-5  lg:flex-row lg:items-center ">
          <Link
            to={"https://www.g2a.co/how-to-sell-on-g2a/"}
            className="flex justify-center  bg-[#F05F00]  py-2.5  px-12 mt-[2.3rem]  text-base hover:bg-[#f05f00b3] transition ease-in-out duration-500 "
          >
            Start Selling
          </Link>
          <Link
            to={"https://www.g2a.com/"}
            className="flex justify-center  bg-[#2F82FB]  py-2.5 px-12 text-base  mt-[2.3rem] hover:bg-[#318fff] transition ease-in-out duration-500 "
          >
            Start Buying
          </Link>
        </div>
      </div>

      <div className="">
        <img src={require('../../assets/images/contactpage.png')} className=' w-full mx-auto'  alt="" />
      </div>
    </div>
    </div>
    <div className='bg-[#e8e8e8]  py-12'>
    <div className=" w-full  flex flex-col container px-3 mx-auto  justify-between">
      <p className="text-[#2f82fb] tracking-[1rem] text-sm uppercase">
        G2A fact sheet
      </p>
      <div className="flex flex-col md:flex-row w-full justify-between gap-[3rem] ">
        <div className="flex flex-col  sm:w-2/12 w-12/12">
          <h3 className="  text-3xl uppercase font-bold text-[#212529] text-center md:text-start ">
            Key Numbers
          </h3>
          <div className="    text-[#fff] text-[1.6rem] md:mt-[2rem]">
        <Link
          to={"https://www.g2a.co/fact-sheet/"}
          className=" bg-[#2F82FB]   text-base py-2.5 flex justify-center  hover:bg-[#318fff] transition ease-in-out duration-500 "
        >
          Read more
        </Link>
      </div>
        </div>
        <div className=" sm:w-8/12 w-12/12">
          <Slider1/>
        </div>
      </div>

      
    </div>
    </div>
     <Footer/>  
    </>
  )
}

export default AboutUs
