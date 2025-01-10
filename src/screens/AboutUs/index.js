import React from 'react'
import Navbar from '../../components/Header/Navbar'
import BottomHeader from '../../components/Header/BottomHeader'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import Slider1 from '../../components/Slider1'
import Slider2 from '../../components/Slider2'
import Awards from '../../components/Awards'
import Slider3 from '../../components/Slider3'

const AboutUs = () => {
  return (
    <>
     <Navbar/>
     <BottomHeader/>
     <div className="bg-[#212121]  flex justify-center items-center py-4">
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


    <div className=" w-full pt-12 max-w-[1170px] mx-auto">
      <div className="flex flex-col md:flex-row items-start  md:items-center justify-between" >
        <div className="flex flex-col ">
          <p className="text-[#2f82fb] text-sm tracking-[1rem] uppercase  text-center md:text-start">
            Newsroom
          </p>
          <h1 className="uppercase  text-6xl pt-2	font-bold text-[#212529] text-center md:text-start ">
            What's new on G2A
          </h1>
        </div>

        <div className=" text-[#fff]">
          <Link
            to={"https://www.g2a.co/fact-sheet/"}
            className=" bg-[#2F82FB] hover:bg-[#318fff] px-12 py-3 text-base transition ease-in-out duration-500 "
          >
            View All
          </Link>
        </div>
      </div>

      <Slider2/>
    </div>

    <div className="  bg-[#212121]   py-11  text-[#fff]">
      <div className=' flex sm:flex-row flex-col  items-center gap-4  max-w-[1170px]  mx-auto'>
      <div className=" sm:w-6/12 w-12/12 ">
      <p className="text-[#2f82fb]  uppercase mt-[2.5rem] md:mb-0 text-center md:text-start ">
        We want you! 
      </p>
      <h2 className="uppercase  pt-2 text-6xl	font-bold text-center md:text-start  ">
        Join our team
      </h2>
      <ul className="pt-[4rem] pb-[5rem] ">
        <li className="border-b  border-b-[#d8d8d8] pb-3">
          <Link
            to="#"
            className="text-xl text-[#ffffffde] font-bold "
          >
            Senior ETL Engineer
          </Link>
          <div className="flex justify-between pt-[0.7rem]">
            <p className=" text-md text-[#ffffffde]">product-and-it</p>
            <p className="  text-md text-[#ffffffb3]">
              Cracow Warsaw Rzeszow Remote
            </p>
          </div>
        </li>

        <li className="border-b  mt-7 border-b-[#d8d8d8] pb-3">
          <Link
            to="#"
            className="text-xl text-[#ffffffde] font-bold "
          >
            Senior ETL Engineer
          </Link>
          <div className="flex justify-between pt-[0.7rem]">
            <p className=" text-md text-[#ffffffde]">product-and-it</p>
            <p className="  text-md text-[#ffffffb3]">
              Cracow Warsaw Rzeszow Remote
            </p>
          </div>
        </li>
        <li className="border-b mt-7 border-b-[#d8d8d8] pb-3">
          <Link
            to="#"
            className="text-xl text-[#ffffffde] font-bold "
          >
            Senior ETL Engineer
          </Link>
          <div className="flex justify-between pt-[0.7rem]">
            <p className=" text-md text-[#ffffffde]">product-and-it</p>
            <p className="  text-md text-[#ffffffb3]">
              Cracow Warsaw Rzeszow Remote
            </p>
          </div>
        </li>
        <li className="border-b mt-7 border-b-[#d8d8d8] pb-3">
          <Link
            to="#"
            className="text-xl text-[#ffffffde] font-bold "
          >
            Senior ETL Engineer
          </Link>
          <div className="flex justify-between pt-[0.7rem]">
            <p className=" text-md text-[#ffffffde]">product-and-it</p>
            <p className="  text-md text-[#ffffffb3]">
              Cracow Warsaw Rzeszow Remote
            </p>
          </div>
        </li>
       
      </ul>
      <div className="w-full text-[#fff] text-[1.5rem]">
        <Link
          to={"#"}
          className=" bg-[#2F82FB]   w-64 text-base py-3 flex justify-center   hover:bg-[#318fff] transition ease-in-out duration-500 "
        >
          Check out all offers
        </Link>
      </div>
    </div>
    <div className=" sm:w-6/12 w-12/12 px-3	 flex flex-col  items-center">
     <div className=' sm:w-9/12 w-12/12 mx-auto'>
     <div>
        <p className="text-[#2f82fb] mb-2 text-sm tracking-[1rem] uppercase  ">
          Employee blog
        </p>
        <Link>
          <img src={require('../../assets/images/intern.png')}    className='' alt="" />
        </Link>
        <h3 className="text-[#ffffffde] text-3xl font-black mt-4 mb-5 text-center md:text-start">
          <Link> Interns had an awesome summer at G2A this year! </Link>
        </h3>
        <p className="text-[#ffffffb3]  text-center md:text-start">
          So, where did it all start? We needed new marketing &amp; UX
          specialists, but they were hard to find using old-fashioned methods.
          Our local job market seemed to lack such experts, and potential
          relocation proved to be too much of
        </p>
        <div className="w-full text-[#fff]  mt-9">
          <Link
            to={"#"}
            className=" bg-[#2F82FB] py-3  w-44  flex justify-center   hover:bg-[#318fff] transition ease-in-out duration-500 "
          >
            Read More
          </Link>
        </div>
      </div>
      </div>
    </div>
      </div>
   
    </div>

    <div className=" px-[3%] sm:px-[7%]  w-full mb-12" >
      <div >
       <div className="flex flex-col pt-8 md:flex-row   md:items-center justify-between" >
               <div className="flex flex-col ">
                 <p className="text-[#2f82fb] text-sm tracking-[1rem] uppercase   mt-[2.5rem] lg:mt-0 text-center md:text-start">
                 Media
                 </p>
                 <h1 className="uppercase  text-6xl leading-[4rem]  lg:leading-[7rem]	font-bold text-[#212529] text-center md:text-start">
                 Media about us
                 </h1>
               </div>
       
               <div className="w-[20rem] text-[#fff] text-[1.6rem] mt-[3rem]  ">
                 <Link
                   to={"#"}
                   className=" bg-[#2F82FB]  text-base px-12 py-3 hover:bg-[#318fff] transition ease-in-out duration-500 "
                 >
                   View All
                 </Link>
               </div>
             </div>

        <Slider3 className = "flex items-center  " />
      </div>
    </div>
    <Awards/>
     <Footer/>  
    </>
  )
}

export default AboutUs
