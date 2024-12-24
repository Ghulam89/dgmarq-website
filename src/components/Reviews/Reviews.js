import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import Subscription from '../Subscription'

const Reviews = () => {
    const partners = [
        { name: "Michał Bogusławski (PayPal)", logo: "https://www.g2a.com/skin/frontend/gate/default/images/gshop/seo/opinions/pay_pal.png", description: "G2A.COM is a trustworthy business partner that focuses on clients’ satisfaction." },
        { name: "Natus Vincere", logo: "https://www.g2a.com/skin/frontend/gate/default/images/gshop/seo/opinions/navi.png", description: "We are truly happy to work with G2A – one of the leaders in video game distribution. G2A is a partner that we are proud to work with, and we would recommend them to all our friends in a heartbeat." },
        { name: "Ozone Gaming Gear", logo: "https://www.g2a.com/skin/frontend/gate/default/images/gshop/seo/opinions/keen_software_house.png", description: "We are very happy with the campaigns that we have developed with G2A. They are a very reliable partner with a lot of knowledge about the gaming market, we have achieved common goals with high levels of success." },
        { name: "Marek Rosa (Keen Software House)", logo: "https://www.g2a.com/skin/frontend/gate/default/images/gshop/seo/opinions/razer.png", description: "G2A is a very reliable and trustworthy partner and also an excellent distributor." },
        { name: "Yann Salsedo (Razer)", logo: "https://www.g2a.com/skin/frontend/gate/default/images/gshop/seo/opinions/dbolical.png", description: "G2A.COM has done an exceptional job on our recent project. The company has a deep expertise in developing solutions, is deadline-oriented and broad-minded. Working with G2A.COM is a signature of success!" },
        { name: "Dbolical", logo: "https://www.g2a.com/skin/frontend/gate/default/images/gshop/seo/opinions/anshar_studios.png", description: "It is easy to endorse G2A and introduce games and content to their platform, knowing they put their customers and publishers first, and are actively involved in deserving charities such as “Save the Children." },
        { name: "Łukasz Hacura (Anshar Studios)", logo: "https://www.g2a.com/skin/frontend/gate/default/images/gshop/seo/opinions/otogami.png", description: "We’ve worked with G2A for over a year now and this cooperation gave us ways of promoting and selling our game otherwise unreachable for us. I think that the G2A Game Developer Support System, including new verifications, will bring a significant change for small developers and I’m sure that in time others will more willingly co-operate with G2A like we do." },
        { name: "Otogami", logo: "https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2017/11/xs_software_13a247a8b6.png", description: "The best thing we can say about G2A is that everything works fine, something very important when you are trying to build a solid reputation online like Otogami.com, a neutral offers comparison engine. Since we work with G2A are sales are rocketing and we had no complaints from our users." },
        { name: "XS Software", logo: "https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2017/09/super_hot2-260x76.png", description: "We’ve been working with G2A for years and have always been happy with our relationship. I think G2A has a positive attitude towards indie developers and is trying to support & help them in various way. Fraud is a problem for all gaming companies, relying on digital sales - I hope this misunderstanding will be cleared soon." },
        { name: "Datcroft", logo: "https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2017/11/xs_software_13a247a8b6.png", description: "G2As ability to move forward and listen to partners has been always amazing, and thats why we are glad to be working with them. As a free-to-play game developer we are constantly looking for new business opportunities, and that`s our common trait. We strongly believe in a bright future for G2A on the international game market and we welcome this new G2A Game Developer Support System and additional security. " },
        { name: "Gamersbook", logo: "https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2017/11/xs_software_13a247a8b6.png", description: "G2A helped Superhot attend and gain new audience at the Taipei Game Show. They helped us earn the award for the most promising indie game of the year. They have been very supportive throughout their entire cooperation. The company is full of creative people and definitely fun to work with!" },
        
      ]
  return (
    <>
     <Navbar/>
     <div className="p-6 ">
      <h1 className="text-4xl font-bold  mb-6">
        G2A Review - Partners' Recommendations and Opinions
      </h1>
      <p className=' text-sm'>G2A has been working with renowned companies and personalities for years now. We continue to expand our network of contacts. Our joint ventures have earned us the title of a reliable, trustworthy partner in large-scale marketing and other projects.</p>
      <p className='  text-sm py-2'>Below you will find various testimonials from our business partners that serve as a testament to the fact that working with G2A is truly an incredibly beneficial venture.</p>
      <div className="grid grid-cols-1 pt-7 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-row gap-4 items-center  rounded-lg p-4"
          >
            
           <div className=' w-7/12'>
           <h2 className=" font-semibold mb-2">{partner.name}</h2>
           <p className="text-gray-600 text-sm ">{partner.description}</p>
           </div>
            <div className=' w-5/12'>
            <img
              src={`${partner.logo}`}
              alt={`${partner.name} logo`}
              className=" w-full  object-contain mb-4"
            />
            </div>
          </div>
        ))}
      </div>
      <footer className="mt-8  text-sm text-gray-500">
        <p>Our partners have also helped us develop our other major services: G2A Plus and G2A Goldmine. The former offers a multitude of special deals from those we work with, while the latter lets our users earn money on promoting the products sold on our marketplace.

</p>
<p>Goldmine users also include many streamers and YouTubers who G2A.COM also enjoys a longstanding cooperation with. They deliver excellent content to broad audiences. Their opinions on G2A reflect the goals we set for ourselves: supporting mutual growth and achieving more through sharing fresh ideas and fruitful cooperation. We help both rising stars and already established content creators expand their fandoms even further.

</p>
<p>G2A.COM also helped many video game developers produce and market their new titles. The opinions on that from some of them can be found above. We help them through the G2A Direct program that gives developers and publishers great benefits on G2A Marketplace, including exposure to an audience of over 20 million buyers and earning on each third-party sale of their products on our platform. Still, the above is merely a fraction of G2A.COM's partners and their opinions on cooperating with us. If you are interested in more testimonials, head over to the References section of our corporate website.

</p>
<p>You can also voice your own opinion on G2A.COM. To do so, contact us, using this form (make sure to choose the right category).

</p>
      </footer>
    </div>
    <Subscription/>
     <Footer/>
    </>
  )
}

export default Reviews