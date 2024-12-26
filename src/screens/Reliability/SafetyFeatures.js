import React from 'react';

const SafetyFeatures = () => {
  const features = [
    {
      icon:require('../../assets/images/reliability/cat8.png'),
      title: "200+ payment methods",
      description:
        "While shopping, you can pick from over 200 payment methods, including the most popular and secure ones, like PayPal, Skrill, PayU, and many others, often popular regional ones.",
      link: "Read more",
    },
    {
    icon:require('../../assets/images/reliability/cat9.png'),
    title: "Fraud prevention supported by AI",
    description:
        "Our checkout process is completely safe, covered by a robust and professional Fraud Prevention team, supported by state-of-the-art AI technology to prevent false or fraudulent transactions.",
      link: "Read more",
    },
    {
      
    icon:require('../../assets/images/reliability/cat10.png'),
      title: "Only verified sellers",
      description:
        "All our sellers are registered business entities, undergoing a strict AML process that ensures they are legitimate—no anonymous dealers can offer anything for sale via G2A!",
      link: "Read more",
    },
    {
      
    icon:require('../../assets/images/reliability/cat11.png'),
      title: "Top anti-fraud solutions",
      description:
        "Our security measures are so advanced and cutting-edge, we were even invited as a main speaker on a conference focused on eCommerce and anti-fraud solutions.",
      link: "Read more",
    },
  ];

  return (
    <div className=" max-w-7xl px-3 mx-auto py-10">
      {/* Header */}
      <h2 className="text-3xl font-bold  text-orange-600 mb-8">
        Why should you feel safe when buying at G2A.COM?
      </h2>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="text-4xl mb-4">
                <img src={feature.icon} alt='' />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4">
              {feature.description}
            </p>

            {/* Link */}
            <a
              href="#"
              className="text-blue-600 font-semibold hover:underline"
            >
              {feature.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyFeatures;
