import React from "react";

const HistorySteps = () => {
  const historySteps = [
    {
      year: "2010",
      title: "G2A.COM’s humble beginnings",
      description: "The creation of the go2arena.pl online store.",
    },
    {
      year: "2013",
      title: "G2A Goldmine",
      description:
        "The launch of an affiliate program that gives many benefits, including financial ones, from a partnership with G2A.",
    },
    {
      year: "2014",
      title: "G2A.COM transforms into a marketplace",
      description:
        "A sales platform for partners from all over the world, it is no longer an online store. The beginning of cooperation with gaming influencers.",
    },
    {
      year: "2015",
      title: "G2A.COM becomes the No. 1 seller on eBay",
      description:
        "G2A Direct is launched, supporting developers who want to sell on G2A with special benefits. G2A becomes the largest marketplace for gamers in the world.",
    },
    {
      year: "2016",
      title: "G2A Arena & mobile app launch",
      description:
        "G2A.COM becomes the titular sponsor of G2A Arena. The number of buyers exceeds 10 million, and the G2A.COM mobile app is launched.",
    },
    {
      year: "2017",
      title: "G2A Plus subscription program",
      description:
        "The launch of a subscription program for buyers offering discounts and special deals.",
    },
    {
      year: "2018",
      title: "G2A API & milestone visits",
      description:
        "Introduction of G2A API for business sellers. Annual website visits exceed 300 million.",
    },
    {
      year: "2019",
      title: "Merchant Payment Ecosystem Conference",
      description:
        "Invited as a speaker and transaction security expert. Buyers exceed 20 million.",
    },
    {
      year: "2020",
      title: "Top 100 Marketplaces",
      description:
        "G2A.COM is placed 8th on the list of top 100 marketplaces in Europe.",
    },
    {
      year: "2021",
      title: "100 million items milestone",
      description:
        "Receives 'Merchant Team of the Year' award. Reaches 100 million items sold on the marketplace.",
    },
    {
      year: "2022",
      title: "Gate 2 Adventure",
      description:
        "New business strategy. The total social media reach exceeds 3.6 million.",
    },
  ];

  return (
    <div className=" max-w-[1170px] px-3  mx-auto py-10">
      <h2 className="text-3xl font-bold text-orange-600 text-center mb-8">
        G2A History
      </h2>
      <div className="flex flex-col gap-8 relative">
        {historySteps.map((step, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center`}
          >
           

            {/* Content */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h3 className="text-lg font-bold text-gray-800">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
             {/* Line */}
             <div className="h-1 bg-gray-300 w-10"></div>
             
             {/* Date */}
             <div className="bg-orange-600 text-white font-bold w-16 h-16 rounded-full flex justify-center items-center">
              {step.year}
            </div>

           
          </div>
        ))}

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-200 -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default HistorySteps;
