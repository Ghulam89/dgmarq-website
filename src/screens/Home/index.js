
import Bestsellers from '../../components/Bestsellers/Bestsellers';
import BundleDeals from '../../components/BundleDeals/BundleDeals';
import Button from '../../components/Button';
import Crypto from '../../components/Crypto/Crypto';
import FavoriteItem from '../../components/FavoriteItem/FavoriteItem';
import FlashDeals from '../../components/FlashDeals';
import Footer from '../../components/Footer/Footer';
import G2AFeatures from '../../components/G2AFeatures/G2AFeatures';
import GameAccountsSection from '../../components/GameAccountsSection/GameAccountsSection';
import Gather from '../../components/Gather/Gather';
import BottomHeader from '../../components/Header/BottomHeader';
import Navbar from '../../components/Header/Navbar';
import Hero from '../../components/Hero/Hero';
import Subscription from '../../components/Subscription';
import Upcoming from '../../components/Upcoming/Upcoming';
import WhyG2A from '../../components/WhyG2A/WhyG2A';
const Home = () => {
  return (
    <>
      <Navbar/>
      <BottomHeader/>
      <Hero/>
      <G2AFeatures/>
      <Bestsellers/>
      
      <FlashDeals/>
      <GameAccountsSection/>
      <Upcoming/>
      <BundleDeals/>
      <Crypto/>
      <WhyG2A/>
      
    <section className="bg-game_bg py-12 bg-cover bg-center">
  <div className="max-w-[1170px] mx-auto px-4">
  <div className="grid gap-6 sm:grid-cols-[1fr,2fr,1fr] grid-cols-1">
  {/* First Column */}
  <div className="flex flex-col gap-3">
    <div className='  relative'>
    <img
      src="https://images.g2a.com/uiadminimages/270x185/1x1x1/094b0fa8fcd7/a580c9fdc10741ba92776c58"
      alt="First Image"
      className="w-full rounded-lg"
    />
    <div className=' absolute bottom-5 w-full flex justify-center items-center'>
      <Button label={'Check details'} className={' bg-blue hover:bg-secondary rounded-md px-3'} />
    </div>
    </div>
    <div className='  h-full relative'>
    <img
      src="https://images.g2a.com/uiadminimages/270x185/1x1x1/73be16550b98/173a67e7d16d4d75b492406b"
      alt="Second Image"
      className="w-full h-full rounded-lg"
    />
     <div className=' absolute bottom-5 w-full flex justify-center items-center'>
      <Button label={'Check details'} className={' bg-blue hover:bg-secondary rounded-md px-3'} />
    </div>
    </div>
   
  </div>

  {/* Second Column */}
  <div className="flex relative items-center">
    <img
      src="https://images.g2a.com/uiadminimages/570x400/1x1x1/1f6ec7bd6977/dda389185bec4bf2948e6057"
      alt="Main Large Image"
      className="w-full h-full rounded-lg"
    />
    <div className=' absolute bottom-5 w-full flex justify-center items-center'>
      <Button label={'Check details'} className={' bg-blue hover:bg-secondary rounded-md px-3'} />
    </div>
  </div>

  {/* Third Column */}
  <div className=' relative'>
    <img
      src="https://images.g2a.com/uiadminimages/270x400/1x1x1/5b757c051b0f/475abe596a4a46649d93f412"
      alt="Third Image"
      className="w-full rounded-lg"
    />
       <div className=' absolute bottom-5 w-full flex justify-center items-center'>
      <Button label={'Check details'} className={' bg-blue hover:bg-secondary rounded-md px-3'} />
    </div>
  </div>
</div>

  </div>
</section>
      <FavoriteItem/>
      <Gather/>
      <Subscription/>
      <Footer/>  
    </>
  )
}

export default Home
