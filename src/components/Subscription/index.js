import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from "yup";
import { Base_url } from '../../utils/Base_url';
import { toast } from 'react-toastify';
const Subscription = () => {



  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(`${Base_url}/subscribe/create`, values);
        setMessage("Subscription successful!");
        toast.success(response?.data?.message)
        resetForm();
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });



  return (
    <div className="bg-blue-50 py-6">
      <div className=" max-w-[1170px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
        {/* Text Section */}
        <div className="lg:mr-4">
          <h2 className="text-lg font-bold text-black">
            Grab a 10% discount on your next purchase!
          </h2>
          <p className="text-sm text-gray-700 mt-1">
            Subscribe to our newsletter and confirm your subscription.
            <br />
            Then, buy something for 10 EUR or more to receive your discount code.
            <a href="#" className="text-blue-600 underline">
              Show more
            </a>
          </p>
        </div>

        {/* Input Section */}
        <div>
        <div className="mt-4 border border-gray-300 lg:mt-0 p-1 bg-white rounded-md flex items-center">
      <form onSubmit={formik.handleSubmit} className="flex w-full">
        <div className="flex flex-col w-full">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="rounded-l-md px-4 outline-none py-2.5 sm:w-96 w-full text-gray-700"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
         
        </div>
        <button
          type="submit"
          className="bg-blue text-white px-6 py-2.5 hover:bg-blue-600 rounded-sm"
          disabled={formik.isSubmitting}
        >
          Subscribe
        </button>
      </form>
      
    </div>
    {/* {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
          )}
    {message && <p className="text-sm mt-2 text-green-500">{message}</p>} */}
        </div>
       
        
      </div>
    </div>
  );
};

export default Subscription;
