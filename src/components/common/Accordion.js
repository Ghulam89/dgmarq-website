// Accordion.js

import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Accordion(props) {
  return (
    <>
      <div className=" border-t border-b border text-left">
        <button
          className="w-full text-white   px-3 bg-transparent py-4  flex sm:text-[18px] text-[15px] justify-between 
                            transition duration-300"
          onClick={props.toggleAccordion}
        >
       
          <p className=" m-0 text-black  font-semibold sm:text-lg  flex gap-3 items-center text-[12px]">   <div className=' w-8 text-black h-8 border rounded-full'>
            {props.key}
         </div> {props.title}</p>

          <p
            className={` m-0 transform ${
              props.isOpen ? "rotate-180" : "rotate-0"
            } 
                                 transition-transform duration-300`}
          >
            <FaAngleDown  className=' text-secondary' />
          </p>




        </button>
        {props.isOpen && (
        <div className="  text-black p-3 font-medium  font-light pb-4 sm:text-[16px] text-[10px]">{props.data}  </div>
      )}
      </div>

     
    </>
  );
}