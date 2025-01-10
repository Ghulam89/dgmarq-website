import React from 'react'
import Navbar from '../../components/Header/Navbar'
import BottomHeader from '../../components/Header/BottomHeader'
import Footer from '../../components/Footer/Footer'
import { IoSearchSharp } from 'react-icons/io5'
import PopularTopics from '../../components/PopularTopics/PopularTopics'
const SellerSupport = () => {

    const cards = [
        { title: "Getting started", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/ee2bef60cf95142d5c05cf03aa29e9c7.png" },
        { title: "Selling digital", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/1569221b469c6e5cf30a11cb99f6d766.png" },
        { title: "Problem Solving", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/3d6ee50b64e1c57c359bc8c1aa79b8ca.png" },
        { title: "Income & fees", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/7b3770adf2de35463b65a280a1ad7e4a.png" },
        { title: "Service & rating", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/9f82bf73b05e2d16f69a43ab5b9276ab.png" },
        { title: "G2A API", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/fad90e1b6122c1cfab27eae6ed146a22.png" },
        { title: "Growing your business", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/329412f395822ed3826014651ecd830d.png" },
        { title: "G2A Ads", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/329412f395822ed3826014651ecd830d.png" },
        { title: "Solving problems", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/329412f395822ed3826014651ecd830d.png" },
      ];



      const cards2 = [
        { title: "How to contact the seller?", icon: "https://i.ytimg.com/vi/mu-YHtwTawc/sddefault.jpg" },
        { title: "I purchased a digital item- how I claim it?", icon: "https://i.ytimg.com/vi/q0ikwOb_i30/sddefault.jpg" },
      ];

  return (
    <>
     <Navbar/>
     <BottomHeader/>
     <div
      className="bg-cover bg-support_bg bg-center sm:h-[80vh] h-[50vh] text-white"
      
    >
      <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">How can we help you?</h1>
        <div className="flex  mb-8">
          <button className="px-6 py-2  border  text-white    bg-transparent hover:bg-white  hover:text-black">
            I'm buying
          </button>
          <button   className="px-6 py-2 bg-white text-black    hover:bg-gray-100">
            I'm selling
          </button>
        </div>
        <div className=' px-4 w-full'>
        <div className="w-full mx-auto relative max-w-2xl">
          <input
            type="text"
            placeholder="Enter a keyword"
            className="w-full px-4 py-3 pl-12 text-black text-md rounded shadow outline-none focus:ring-2 focus:ring-blue-600"
          />
          <div className=' absolute top-3.5 left-3'>
          <IoSearchSharp color='black' size={20}  />

          </div>
        </div>
        </div>
       
      </div>
    </div>


    <div className="bg-gray-100 py-10">
      <div className="max-w-[1170px] px-3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-row items-center  p-3 gap-2 justify-start bg-white  border-2  rounded-md hover:shadow-lg transition"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-14 h-14"
            />
            <h4 className=" font-normal">{card.title}</h4>
          </div>
        ))}
      </div>
    </div>

    <PopularTopics/>



     <div className=' bg-activate_bg bg-center flex justify-center items-center h-[50vh] bg-cover'>
        <div className=' max-w-4xl mx-auto'>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">Want to activate your item?</h1>
         <div className=' flex  max-w-[1170px] gap-2 items-center'>
            <div className=' w-full'>
              <input className=' outline-none w-full rounded-sm p-2' placeholder='Type platform name' /> 
            </div>
           <button className=' bg-blue-500 px-4 py-2 whitespace-nowrap text-white rounded-md'>Get the guide</button>
         </div>
        </div>
     </div>
     <Footer/>
    </>
  )
}

export default SellerSupport