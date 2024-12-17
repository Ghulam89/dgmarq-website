import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar";
import BottomHeader from "../../components/Header/BottomHeader";
import Footer from "../../components/Footer/Footer";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import { Link } from "react-router-dom";



const News = () => {
  const [blogs,setBlogs] = useState([]);      
  useEffect(() => {
   axios
     .get(`${Base_url}/blog/getAll?page=1`)
     .then((res) => {
       console.log(res);

       setBlogs(res?.data?.data?.data);
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
        <h1 className="text-5xl text-white font-bold mb-6">NEWSROOM</h1>
        </div>
       </div>
       <div className=" max-w-7xl pb-32 -translate-y-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((article, index) => (
            <Link
              to={`/new-details/${article?._id}`}
              key={index}
              className=" rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl  font-semibold mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-500 py-3 text-sm mb-4">{article.createdAt}</p>
                <p className=" text-gray-500 font-medium ">{article.shortDescription}</p>
                <a
                  href={article.link}
                  className="  text-white px-7 rounded-md py-2 bg-secondary mt-4 inline-block"
                >
                  Read more →
                </a>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </div>
    </section>
     <Footer/>
    </>
   
  );
};

export default News;
