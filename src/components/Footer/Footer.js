import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Payment Methods */}
       <div className=" flex sm:flex-row flex-col   items-center  justify-between pb-3">
        <div>
          <img src={require('../../assets/images/logo-footer.png')} className=" w-44" alt="" />
        </div>
       <div className="flex flex-wrap  gap-5 justify-center items-center space-x-4 mt-6 mb-8">
          <img
            src="https://www.g2a.com/static/assets/payment-methods/visa.svg"
            alt="Visa"
            className="h-5"
          />
          <img
            src="https://www.g2a.com/static/assets/payment-methods/mastercard.svg"
            alt="MasterCard"
            className="h-5"
          />
          <img
            src="https://www.g2a.com/static/assets/payment-methods/paysafecard.svg"
            alt="PaySafe"
            className="h-5"
          />
          <img
            src="https://www.g2a.com/static/assets/payment-methods/discover.svg"
            alt="Discover"
            className="h-5"
          />
          <img
            src="https://www.g2a.com/static/assets/payment-methods/paypal.svg"
            alt="PayPal"
            className="h-5"
          />
          <p className="text-gray-500">and 200+ more</p>
        </div>
        <div>

        </div>
       </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">DGMARQ</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reliability
                </a>
              </li>
              <li>
                <a href="/DigitalServicesAct" className="hover:underline">
                  Digital Services Act
                </a>
              </li>
            </ul>
          </div>
          {/* Other Columns */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Cooperation</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Marketing Partnership
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="/review" className="hover:underline">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">For Buyers</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Buyers Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to Buy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Stay Safe
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              User Terms & Privacy
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy and Cookies Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Our Products</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                DGMARQ Plus
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                DGMARQ News
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Details */}
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-xs">
            Using the DGMARQ.COM portal constitutes acceptance of the{" "}
            <a href="#" className="underline">
              Regulations
            </a>
            . See how we process your data in our{" "}
            <a href="#" className="underline">
              Privacy and Cookies Policy
            </a>
            .
          </p>
          <p className="mt-4 text-xs">© 2024 DGMARQ Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
