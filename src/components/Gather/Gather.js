import React from "react";

const cards = [
  {
    image: "https://images.g2a.com/uiadminimages/270x163/1x1x1/8a28387056aa/0a4ee61245844b389481e6d9",
    title: "Holiday Gaming Marathon: Must-Have Games for Your Break",
    description: "Holiday break is the perfect time to relax, and what better way to relax than to play something cool?",
    borderColor: "border-orange-500",
  },
  {
    image: "https://images.g2a.com/uiadminimages/270x163/1x1x1/865fb4eaec0e/7cc02baa69c94da2bcd20f6d",
    title: "Best Winter Themed Video Games",
    description: "It's cold outside, stay in and get your winter vibes from video games instead, in the comfort of your room.",
    borderColor: "border-blue-500",
  },
  {
    image: "https://images.g2a.com/uiadminimages/270x163/1x1x1/9f9a49f2c6af/ae29f0a426ef4cae8ea7feed",
    title: "Best Games Under $20",
    description: "Twenty bucks usually isn’t enough for a top-tier game, unless you come here to see all the awesome sub-$20 deals!",
    borderColor: "border-orange-500",
  },
  {
    image: "https://images.g2a.com/uiadminimages/270x163/1x1x1/c8b128064e10/30016c6a24a1435b88ea61d7",
    title: "Selected Best Deals on G2A.COM",
    description: "If you want to grab the best deals on G2A.COM, come here, we’ve got a whole bunch of them for you!",
    borderColor: "border-blue-500",
  },
];

const Gather = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Looking for something else? Get inspired by our articles!

        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div className={` ${card?.borderColor} bg-white shadow-md rounded-lg overflow-hidden`}>
              <img src={card?.image} alt={card?.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{card?.title}</h3>
                <p className="text-gray-600 text-sm">{card?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gather;
