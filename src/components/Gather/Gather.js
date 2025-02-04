import React, { useEffect, useState } from "react";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import { Link } from "react-router-dom";

const Gather = () => {

  const [blogs, setBlogs] = useState([]);
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
    <section className="bg-gray-100 py-10">
      <div className="max-w-[1170px] mx-auto px-3">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Looking for something else? Get inspired by our articles!

        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {blogs?.map((card, index) => (
    <Link
      
    to={`/gather-details/${card?._id}`}

      key={index}
      className={`relative  cursor-pointer ${card?.borderColor} group  overflow-hidden`}
    >
      <div className="relative overflow-hidden">
        <img
          src={card?.image}
          alt={card?.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
      </div>
      <div className="p-4">
        <h3 className=" font-semibold mb-2 hover:underline">{card?.title}</h3>
        <p className="text-gray-600 text-sm hover:underline">{card?.shortDescription}</p>
      </div>
    </Link>
  ))}
</div>
      </div>
    </section>
  );
};

export default Gather;
