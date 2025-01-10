import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import BottomHeader from '../../components/Header/BottomHeader'
import { H2 } from '../../components/common/Heading'
import Button from '../../components/Button'

const AffiliateProgram = () => {
  return (
    <>
     <Navbar/>
       <BottomHeader/>
       <section className=' bg-Program_bg bg-center bg-cover'> 
          <div  className=' max-w-[1170px] mx-auto py-12'>
             <img src={require('../../assets/images/logo-footer.png')} className=' w-28 mb-2' alt='' />
             <H2 className=' text-white'>Referral Program</H2>

            <p className=' text-white py-4'>Share links to digital items on G2A.COM. Make money every time someone buys what you promoted. 
            It's that simple!</p>


            <button className=' bg-[#FCC902] px-8 py-2 font-medium rounded-sm'>Start earning now</button>

          </div>
       </section>
     <Footer/>  
    </>
  )
}

export default AffiliateProgram
