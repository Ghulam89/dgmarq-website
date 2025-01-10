import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import BottomHeader from '../../components/Header/BottomHeader'
import SafetyFeatures from './SafetyFeatures'
import { H1, H2 } from '../../components/common/Heading'
import Button from '../../components/Button'
import HistorySteps from './HistorySteps'
import FAQ from '../../components/FAQ/FAQ'

const Reliability = () => {
  return (
    <>
      <Navbar />
      <BottomHeader />

      <section className=' bg-Reliability_bg sm:h-96 py-12 h-auto flex justify-center items-center bg-cover bg-center'>

        <div className=' max-w-[1170px] px-3'>

          <div className=''>
            <div className=' sm:w-7/12 w-12/12'>
              <h1 className=' sm:text-5xl text-3xl font-semibold'>World’s Largest & Most Secure Marketplace for Digital Entertainment
              </h1>

              <p className=' pt-3'>We are the largest global marketplace for digital entertainment, offering gift cards and software. We operate in both B2B and B2C channels. We guarantee security and transparency as all our sellers undergo strict business and AML verification. We ensure easy, safe and fast purchasing process as our clients’ satisfaction is the top priority for us.

              </p>
            </div>
            <div></div>
          </div>

        </div>

      </section>

      <section className=' border-b py-3'>
        <div className=' border-l max-w-[1170px] mx-auto'>
        <ul className="flex gap-8 px-3 overflow-x-auto whitespace-nowrap md:whitespace-normal scrollbar-hide">
        <li className=' flex  border-r   px-3 items-center gap-2'>
              <img src={require('../../assets/images/reliability/cat1.png')} alt='' />
              <p className=' font-medium m-0'>Key  Numbers</p>
            </li>
            <li className=' flex  border-r   px-3 items-center gap-2'>
              <img src={require('../../assets/images/reliability/cat2.png')} alt='' />
              <p className=' m-0 font-medium'>G2A Partners</p>
            </li>
            <li className=' flex  border-r   px-3 items-center gap-2'>
              <img src={require('../../assets/images/reliability/cat3.png')} alt='' />
              <p className=' m-0 font-medium'>Awards and Recognition</p>
            </li>
            <li className=' flex  border-r   px-3 items-center gap-2'>
              <img src={require('../../assets/images/reliability/cat4.png')} alt='' />
              <p className=' m-0 font-medium'>G2A Employees</p>
            </li>
            <li className=' flex  border-r   px-3 items-center gap-2'>
              <img src={require('../../assets/images/reliability/cat5.png')} alt='' />
              <p className=' m-0 font-medium'>Media About Us</p>
            </li>
            <li className=' flex  border-r   px-3 items-center gap-2'>
              <img src={require('../../assets/images/reliability/cat6.png')} alt='' />
              <p className=' m-0 font-medium'>G2A History</p>
            </li>
            <li className=' flex  border-r   px-3 items-center gap-7'>
              <img src={require('../../assets/images/reliability/cat7.png')} alt='' />
              <p className=' m-0 font-medium'>Contact Us</p>
            </li>
            </ul> 
        </div>
      </section>

      <SafetyFeatures />

      <section>
        <div className=' mx-auto gap-6 py-6 flex sm:flex-row flex-col px-3 justify-between items-center max-w-[1170px]'>

          <div className=' sm:w-6/12 w-12/12'>
            <H2 className=' text-[#F05F00] pb-2'>Key numbers</H2>
            <p>Over 30 million people from 180 countries worldwide have already made purchases at G2A.COM. All of them can choose from 75,000+ digital items offered by sellers from around the world. In addition to our internal security measures, sellers receive publicly visible ratings from users. We are very active on social media generating almost 4 million reach through our channels. We also maintain a fast response system and high quality customer service.
            </p>
            <div className=' mt-3'>
              <Button label={'Read more'} className={' bg-[#F05F00]'} />
            </div>
          </div>
          <div className=' sm:w-6/12 w-12/12'>
            <img src={require('../../assets/images/reliability/key.avif')} alt='' />
          </div>

          

        </div>

        <div className=' mx-auto gap-6 py-6 flex sm:flex-row flex-col px-3 justify-between items-center max-w-[1170px]'>


<div className=' sm:w-6/12 w-12/12'>
  <img src={require('../../assets/images/reliability/parterns.avif')} alt='' />
</div>

<div className=' sm:w-6/12 w-12/12'>
  <H2 className=' text-[#F05F00] pb-2'>G2A.COM Partners</H2>
  <p>We have been working with nearly 1800 different partners, including industry leaders (Microsoft, Google, PayPal), game developers and publishers (Wargaming, Gameforge), as well as influencers and esports teams (PewDiePie, NaVi, Virtus.pro, Natus Vincere). As a global company we have cooperated with partners from 61 countries!
  </p>
  <div className=' mt-3'>
    <Button label={'Read more'} className={' bg-[#F05F00]'} />
  </div>
</div>



</div>

<div className=' mx-auto gap-6 py-6 flex sm:flex-row flex-col px-3 justify-between items-center max-w-[1170px]'>




<div className=' sm:w-6/12 w-12/12'>
  <H2 className=' text-[#F05F00] pb-2'>Awards and Recognition  </H2>
<p> We are often awarded by independent institutions. G2A.COM were placed 8th in the ranking of Top10 Cross Border Marketplaces in Europe. We have won the Global eCommerce Awards 2021 in two categories. Bartosz Skwarczek, Founder & President of Supervisory Board G2A Capital Group, was a frequent writer for Forbes. He is also a member of the Forbes Business Council.
  </p>
  <div className=' mt-3'>
    <Button label={'Read more'} className={' bg-[#F05F00]'} />
  </div>
</div>

<div className=' sm:w-6/12 w-12/12'>
  <img src={require('../../assets/images/reliability/award.webp')} alt='' />
</div>



</div>

<div className=' mx-auto gap-6 py-6 flex sm:flex-row flex-col px-3 justify-between items-center max-w-[1170px]'>


<div className=' sm:w-6/12 w-12/12'>
  <img src={require('../../assets/images/reliability/employees.webp')} alt='' />
</div>

<div className=' sm:w-6/12 w-12/12'>
  <H2 className=' text-[#F05F00] pb-2'>G2A.COM Employees  </H2>
<p> Our employees are experts in their areas of responsibilities. We have over 400 talented and skilled specialists from 12 countries who can work from anywhere in the world. We attach great importance to keeping gender balance at all levels of the company.


  </p>
  <div className=' mt-3'>
    <Button label={'Read more'} className={' bg-[#F05F00]'} />
  </div>
</div>





</div>


<div className=' mx-auto gap-6 py-6 flex sm:flex-row flex-col px-3 justify-between items-center max-w-[1170px]'>




<div className=' sm:w-6/12 w-12/12'>
  <H2 className=' text-[#F05F00] pb-2'>Media About Us  </H2>
<p>Due to our experience and expertise we are often of interest for journalists and the media. We are very open to talking with them and sharing both our knowledge and trend forecasts. We are not afraid of difficult questions and answer them all to keep maximum transparency.



  </p>
  <div className=' mt-3'>
    <Button label={'Read more'} className={' bg-[#F05F00]'} />
  </div>
</div>

<div className=' sm:w-6/12 w-12/12'>
  <img src={require('../../assets/images/reliability/media.webp')} alt='' />
</div>





</div>


      </section>
      <HistorySteps/>
      <FAQ/>

      <section>
        <div className=' flex border  pt-4 mb-11 justify-center items-center gap-5 max-w-[1170px] mx-auto px-3 pb-12'>
           <div>
            <img src={require('../../assets/images/reliability/support.webp')} alt='' />
          </div> 
          <div>
          <H1>Need more information?</H1>
          <p className=' py-3'>Go to Support Hub to learn more about selling on G2A.COM or request a call with our expert.
          </p>
          <div className=' flex  gap-3'>
            <Button label={'Go to Support Hub'} className={' rounded-sm bg-secondary'} />

            <Button label={'Contact us'} className={' rounded-sm  border   border-secondary'} />

          </div>
        </div>  
        </div>
       
      </section>


     


      <Footer />
    </>
  )
}

export default Reliability
