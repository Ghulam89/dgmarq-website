import React, { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "../common/Accordion";

const FAQ = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "How does G2A.COM work?",
      data:<div>
        <p>G2A.COM is the world’s leading marketplace for digital entertainment, offering video games, software, gift cards and so on, anything based on a unique code or activation key. Here you can purchase tens of thousands of different items from thousands of verified sellers. Check out our Fact Sheet if you want to learn more about G2A Marketplace.</p>
      </div>,
      isOpen: false,
    },
    {
      key: 2,
      title: "Is G2A.COM safe?",
      data:<div>
        <p> Yes, it’s perfectly safe to purchase activation keys on G2A Marketplace. We use state-of-the-art security measures, employ strict KYC procedures and verify the sellers on our platform very thoroughly. Check out these links if you want to know more:

</p>
        <p> <Link to={'#'}> Is G2A safe and legit place to buy games</Link></p>
      </div>,
      isOpen: false,
      
    },
    {
      key: 3,
      title: " How can I sell on G2A.COM?",
      data:<div>
        <p>It’s simple: register on G2A Marketplace and complete a thorough, yet simple verification process. You will be guided through it step by step. Please note that you need to have a registered business in order to be able to sell on our platform. These links will help you begin:  </p>
        <div className=" flex pt-1 flex-col gap-2">
        <Link to={'#'} className=" text-secondary font-medium">Start selling on G2A.COM</Link>
        <Link to={'#'} className=" text-secondary font-medium">How can I create a digital product offer?</Link>
        <Link to={'#'} className=" text-secondary font-medium">What digital products can I sell on G2A.COM Marketplace? Tips for sellers.
        </Link>
        </div>
      </div>,
      isOpen: false,
      // link:'Click here.'
    },
    {
      key: 4,
      title: "How can I start my career at G2A.COM?",
      data: <div>
        <p>Interested in working for our company? Fantastic!  <Link to={'#'} className=" text-secondary">Click here</Link> to find out what the current job openings are. Can’t wait to hear from you! </p>
      </div>,
      isOpen: false,
    },
    {
      key: 5,
      title: "How can I contact G2A.COM’s Support team?",
      data: "All you need to do is use the contact form available here.",
      isOpen: false,
    }
    
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    <div className=" bg-white     bg-no-repeat w-full bg-cover   h-auto py-20">
      <div className="  max-w-7xl mx-auto">
        <div className="row items-center">
          <div className="col-lg-6 col-md-12">
            <h1 className=" font-medium text-4xl sm:text-start text-center  text-black">
            In case you’ve missed anything

            </h1>
            <div className="  mt-12">
              {accordions.map((accordion) => (
                <Accordion
                  key={accordion.key}
                  title={accordion.title}
                  data={
                    <div>
                      {accordion.data}
                      <Link to={`${accordion.link}`}>{accordion.link}</Link>
                    </div>
                  }
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FAQ;