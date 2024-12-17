
import Bestsellers from '../../components/Bestsellers/Bestsellers';
import Crypto from '../../components/Crypto/Crypto';
import FavoriteItem from '../../components/FavoriteItem/FavoriteItem';
import Footer from '../../components/Footer/Footer';
import G2AFeatures from '../../components/G2AFeatures/G2AFeatures';
import GameAccountsSection from '../../components/GameAccountsSection/GameAccountsSection';
import Gather from '../../components/Gather/Gather';
import BottomHeader from '../../components/Header/BottomHeader';
import Navbar from '../../components/Header/Navbar';
import Hero from '../../components/Hero/Hero';
import Subscription from '../../components/Subscription';
import WhyG2A from '../../components/WhyG2A/WhyG2A';
const Home = () => {
  return (
    <>
      <Navbar/>
      <BottomHeader/>
      <Hero/>
      <G2AFeatures/>
      <Bestsellers/>
      <GameAccountsSection/>
      <FavoriteItem/>
      <Crypto/>
      <WhyG2A/>
      <Gather/>
      <Subscription/>
      <Footer/>  
    </>
  )
}

export default Home
