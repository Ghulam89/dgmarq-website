import React from "react";
const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 text-sm">
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
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">DGMARQ</h3>
            <ul className="space-y-1">
              <li>
                <a href="/about-us" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="/news" className="hover:underline">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="/reliability" className="hover:underline">
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
                <a href="/partnerships" className="hover:underline">
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
            <h3 className="font-semibold text-gray-800 mb-2">For Sellers</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Sellers Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to Sell
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Business Center
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


         {/* Links */}
         <div className=" flex  flex-wrap justify-between mt-5">
          <div>
            <h4 className="font-semibold text-gray-800  text-sm mb-2">
            DGMARQ.COM Limited (platform operator)</h4>
            <ul className="">
              <li className=" text-sm">
               
                Address: 31/F, Tower Two, Times
              
              </li>
              <li>
               
                Square, 1
              
              </li>
              <li>
                
              Matheson Street

               
              </li>
              <li>
              Causeway Bay, Hong Kong

              
              </li>
              <li>
              Business registration number:

              
              </li>
              <li>
              63264201
              
              </li>
              
            </ul>
          </div>
          {/* Other Columns */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">DGMARQ LLC (platform operator)</h3>
            <ul className="space-y-1">
              <li>
              Address: 701 South Carson Street,
              </li>
              <li>
                Suite 200, Carson City,
               
              </li>
              <li>
              Nevada 89701, USA
               
              </li>
              <li>
              Business registration number:
               
              </li>
              <li>
              E0627762014-7
               
              </li>
            </ul>
          </div>

            {/* Other Columns */}
            <div>
            <h3 className="font-semibold text-gray-800 mb-2">DGMARQ.COM Direct B.V. (platform support)</h3>
            <ul className="space-y-1">
              <li>
              Addres: James Wattstraat 77 A 3,
              </li>
              <li>
              1097DL Amsterdam,
               
              </li>
              <li>
              the Netherlands
               
              </li>
              <li>
              Business registration number:
               
              </li>
              <li>
              89975561 
               
              </li>
            </ul>
          </div>

          <div>
          <div className=" flex  gap-4">
  <a
    href="#"
    title="G2A.COM Facebook"
  >
    <img
      src="https://static.g2a.com/8d549fa4e45f4e8c84400fd5/G2A_footer_socials_FACEBOOK.svg"
      alt="G2A.COM Facebook"
      loading="lazy"
      width={28}
      height={28}
    />
  </a>
  <a
    href="#"
    title="G2A.COM X"
  >
    <img
      src="https://static.g2a.com/93d30de1820d4810bedf35e0/G2A_footer_socials_X.svg"
      alt="G2A.COM X"
      loading="lazy"
      width={28}
      height={28}
    />
  </a>
  <a
    
    href="#"
    title="G2A.COM Youtube"
  >
    <img
      src="https://static.g2a.com/c16c534f0c1247b2923966c8/G2A_footer_socials_YOUTUBE.svg"
      alt="G2A.COM Youtube"
      loading="lazy"
      width={28}
      height={28}
    />
  </a>
  <a
    href="#"
    title="G2A.COM Instagram"
  >
    <img
      src="https://static.g2a.com/77180c91f32246508fb3c21d/G2A_footer_socials_INSTAGRAM.svg"
      alt="G2A.COM Instagram"
      loading="lazy"
      width={28}
      height={28}
    />
  </a>
  <a
    href="#"
    title="G2A.COM  LinkedIn"
  >
    <img
      src="https://static.g2a.com/418d7673087a4a029c672ab3/G2A_footer_socials_LINKEDIN.svg"
      alt="G2A.COM  LinkedIn"
      loading="lazy"
      width={28}
      height={28}
    />
  </a>
  <a
    href="#"
    title="G2A.COM Twitch"
  >
    <img
      src="https://static.g2a.com/65c947a7ff3a43cc9eec4f6f/G2A_footer_socials_TWITCH.svg"
      alt="G2A.COM Twitch"
      loading="lazy"
      width={28}
      height={28}
    />
  </a>
  <a
    href="#"
    title="G2A.COM Reddit"
  >
    <img
      src="https://static.g2a.com/0c382e47cdfd48ed9770e614/G2A_footer_socials_REDDIT.svg"
      alt="G2A.COM Reddit"
      loading="lazy"
      width={28}
      height={28}
    />
  </a>
</div>

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
