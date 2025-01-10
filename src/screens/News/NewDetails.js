import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Header/Navbar'
import BottomHeader from '../../components/Header/BottomHeader'
import Footer from '../../components/Footer/Footer'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Base_url } from '../../utils/Base_url'
import parse from 'html-react-parser';
const NewDetails = () => {
  const [blogs,setBlogs] = useState({}); 
   const {id} = useParams();

   useEffect(() => {
    axios
      .get(`${Base_url}/blog/get/${id}`)
      .then((res) => {
        console.log(res,'sdddddddddddddddd');
 
        setBlogs(res?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
     <Navbar/>
     <BottomHeader/>
     <section className="">
      <div className="">
       <div className="  h-60  flex   justify-center items-end w-full bg-[#212121]">
        <div className=" h-48  py-4">
          <p className="  text-secondary  uppercase">Dgmarq / NEWS</p>
        <h1 className="text-4xl text-white font-bold uppercase mb-6">{blogs?.title}</h1>
        </div>
       </div>
       <div className=" max-w-[1170px] pb-32 -translate-y-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
         
            <Link
              to={`/new-details/${blogs?._id}`}
               
              className=" overflow-hidden"
            >
              <img
                src={blogs?.image}
                alt={blogs?.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl  font-semibold mb-2">
                  {blogs?.title}
                </h2>
                <p className="text-gray-500 py-3 text-sm mb-4">{blogs?.createdAt}</p>
                <p className=" text-gray-500 font-medium ">{parse(blogs?.content || '')}</p>
             
              </div>
            </Link>
        
        </div>
        </div>
      </div>
    </section>
     <Footer/> 
    </>
  )
}

export default NewDetails
