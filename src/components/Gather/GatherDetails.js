import React, { useEffect, useState } from 'react'
import Navbar from '../Header/Navbar'
import BottomHeader from '../Header/BottomHeader'
import Footer from '../Footer/Footer'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Base_url } from '../../utils/Base_url'
import parse from 'html-react-parser';
const GatherDetails = () => {
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
     <section className="" id='news'>
      <div className="">
      <div
  style={{ backgroundImage: `url(${blogs?.image})` }}
  className="h-80 flex bg-black bg-no-repeat bg-cover bg-center   justify-center items-end w-full"
>
  <div className="h-full flex flex-col justify-between py-4  bg-opacity-50 px-6">
    <p className="text-secondary uppercase">Dgmarq / NEWS</p>
    <h1 className="text-4xl text-white font-bold  mb-6">{blogs?.title}</h1>
    <h2></h2>
  </div>
</div>
       <div className="  max-w-5xl pt-10 pb-32 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
         
            <Link
              to={`/new-details/${blogs?._id}`}
               
              className=" overflow-hidden"
            >
           
              <div className="p-4">
             
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

export default GatherDetails
