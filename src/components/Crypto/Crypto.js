import React from 'react';
import Button from '../Button';
import ProductCard from '../Cards/ProductCard';

const Crypto = () => {
    const data = [
        {
            id:1,
            image:'https://images.g2a.com/170x228/1x1x0/binance-gift-card-445-usdt-key/eb5af74d7e5845349da5f9a6',
            title:'Binance Gift Card',
            price:'$ 48.43'
        },
        {
            id:2,
            image:'https://images.g2a.com/170x228/1x1x0/azteco-bitcoin-crypto-lightning-voucher-25-eur-azteco-key-global/80378bd70b2d428496c44de9',
            title:'Azteco Bitcoin (Crypto) Lightning Voucher 25 EUR -',
            price:'$ 26.91'
        },
        {
            id:3,
            image:'https://images.g2a.com/170x228/1x1x0/crypto-voucher-50-eur-key-global/02f9f59e528b40fe8c23f112',
            title:'Azteco Bitcoin (Crypto) Lightning Voucher 25 EUR -',
            price:'$ 26.91'
        },
        {
            id:3,
            image:'https://images.g2a.com/170x228/1x1x0/crypto-voucher-50-eur-key-global/02f9f59e528b40fe8c23f112',
            title:'Azteco Bitcoin (Crypto) Lightning Voucher 25 EUR -',
            price:'$ 26.91'
        },
        {
            id:3,
            image:'https://images.g2a.com/170x228/1x1x0/crypto-voucher-50-eur-key-global/02f9f59e528b40fe8c23f112',
            title:'Azteco Bitcoin (Crypto) Lightning Voucher 25 EUR -',
            price:'$ 26.91'
        },
        {
            id:3,
            image:'https://images.g2a.com/170x228/1x1x0/crypto-voucher-50-eur-key-global/02f9f59e528b40fe8c23f112',
            title:'Azteco Bitcoin (Crypto) Lightning Voucher 25 EUR -',
            price:'$ 26.91'
        },
    ]


    const data2 = [
      {
          id:1,
          image:'https://images.g2a.com/170x228/1x1x0/random-vip-5-keys-steam-key-global/ea23eaead2c04b2d8744893e',
          title:'Binance Gift Card',
          discount:'-98%',
          price:'$ 48.43',
          oldPrice:'$ 125.04',
      },
      {
          id:2,
          image:'https://images.g2a.com/170x228/1x1x0/azteco-bitcoin-crypto-lightning-voucher-25-eur-azteco-key-global/80378bd70b2d428496c44de9',
          title:'Azteco Bitcoin (Crypto) Lightning Voucher 25 EUR -',
          price:'$ 26.91',
          discount:'-48%',
          oldPrice:'$ 125.04'
      },
      {
          id:3,
          image:'https://images.g2a.com/170x228/1x1x0/random-vip-5-keys-steam-key-global/ea23eaead2c04b2d8744893e',
          title:'Azteco Bitcoin (Crypto) Lightning Voucher 25 EUR -',
          price:'$ 26.91',
          discount:'-33%',
          oldPrice:'$ 125.04'
      },
      {
          id:3,
          image:'https://images.g2a.com/170x228/1x1x0/crypto-voucher-50-eur-key-global/02f9f59e528b40fe8c23f112',
          title:'Azteco Bitcoin (Crypto) Lightning Voucher 25 EUR -',
          price:'$ 26.91',
          discount:'-28%',
          oldPrice:'$ 125.04'
      }
      
  ]


  const data3 = [
    {
        id:1,
        image:'https://images.g2a.com/170x228/1x1x0/kaspersky-small-office-security-pc-10-devices-12-months-kaspersky-key-global/5912777fae653ad8ab3924f4',
        title:'Binance Gift Card',
        discount:'-98%',
        price:'$ 48.43',
        oldPrice:'$ 125.04',
    },
    {
        id:2,
        image:'https://images.g2a.com/170x228/1x1x0/microsoft-windows-11-pro-pc-microsoft-key-global/f0fcf80e6cf84e518c39d5b6',
        title:'Azteco Bitcoin (Crypto) Lightning Voucher 25 EUR -',
        price:'$ 26.91',
        discount:'-48%',
        oldPrice:'$ 125.04'
    },
    {
        id:3,
        image:'https://images.g2a.com/170x228/1x1x0/nordvpn-vpn-service-pc-android-mac-ios-6-devices-1-year-nordvpn-key-global/e0b32c34df534b4db4812c3c',
        title:'Azteco Bitcoin (Crypto) Lightning Voucher 25 EUR -',
        price:'$ 26.91',
        discount:'-33%',
        oldPrice:'$ 125.04'
    },
    {
        id:3,
        image:'https://images.g2a.com/170x228/1x1x0/microsoft-windows-10-pro-microsoft-key-global/5d6f6ab346177c505a7c7e82',
        title:'Azteco Bitcoin (Crypto) Lightning Voucher 25 EUR -',
        price:'$ 26.91',
        discount:'-28%',
        oldPrice:'$ 125.04'
    },
    {
      id:4,
      image:'https://images.g2a.com/170x228/1x1x0/nordvpn-vpn-service-pc-android-mac-ios-6-devices-1-year-nordvpn-key-global/e0b32c34df534b4db4812c3c',
      title:'Azteco Bitcoin (Crypto) Lightning Voucher 25 EUR -',
      price:'$ 26.91',
      discount:'-33%',
      oldPrice:'$ 125.04'
  },
  {
    id:5,
    image:'https://images.g2a.com/170x228/1x1x0/nordvpn-vpn-service-pc-android-mac-ios-6-devices-1-year-nordvpn-key-global/e0b32c34df534b4db4812c3c',
    title:'Azteco Bitcoin (Crypto) Lightning Voucher 25 EUR -',
    price:'$ 26.91',
    discount:'-33%',
    oldPrice:'$ 125.04'
}
    
]
  return (
    <div className=" ">

       

          {/* Background Image */}
      <div className="relative w-full h-full">
       
        {/* Overlay Content */}
        <div className="  max-w-[1170px] mx-auto px-4 inset-0 flex flex-col">
          <div className="   pb-6 flex gap-8  sm:flex-row flex-col justify-between items-center pt-12">
            {/* Text Content */}
            <div>
              <h2 className="text-black text-2xl lg:text-3xl font-semibold">
                Software
              </h2>
              <p className="pt-2 text-gray-700 text-sm lg:text-base">
                From operating systems and VPNs to graphic design apps and more-all you in one location!
              </p>
            </div>
            {/* Discover Button */}
            <div>
              <Button label={'Discover all'} className="bg-secondary px-4 py-2 rounded-md text-white" />
            </div>
          </div>

          {/* Card Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
             
             {data3?.map((item,index)=>{
                return (
                    <>
                     <ProductCard image={item?.image} originalPrice={item?.oldPrice}  discount={item?.discount}  title={item?.title} price={item?.price}  />
                    </>
                )
             })}
              {/* Repeat more cards similarly */}
            </div>
         
        </div>
      </div>


      {/* Background Image */}
      <div className="relative w-full h-full">
        <img
          src={require('../../assets/images/crypto_bg.avif')}
          alt="Crypto Background"
          className="w-full  hidden sm:block h-auto object-cover"
        />

        {/* Overlay Content */}
        <div className="sm:absolute  inset-0 max-w-[1170px] mx-auto px-4 inset-0 flex flex-col">
          <div className="   pb-6 flex gap-8  sm:flex-row flex-col justify-between items-center pt-12">
            {/* Text Content */}
            <div>
              <h2 className="text-black text-2xl lg:text-3xl font-semibold">
                Crypto Corner
              </h2>
              <p className="pt-2 text-gray-700 text-sm lg:text-base">
                Gift cards, gaming NFTs, and other digital goodies for all the
                cryptocurrency enthusiasts.
              </p>
            </div>
            {/* Discover Button */}
            <div>
              <Button label={'Discover all'} className="bg-secondary px-4 py-2 rounded-md text-white" />
            </div>
          </div>

          {/* Card Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
             
             {data?.map((item,index)=>{
                return (
                    <>
                     <ProductCard image={item?.image}  title={item?.title} price={item?.price}  />
                    </>
                )
             })}
              {/* Repeat more cards similarly */}
            </div>
         
        </div>
      </div>


        {/* Background Image */}
        <div className="relative w-full h-full">
        <img
          src={'https://images.g2a.com/uiadminimages/1920x720/1x1x1/5958f49c30ef/5e910817f32449c2b21a897b'}
          alt="Crypto Background"
          className="w-full  hidden sm:block h-auto object-cover"
        />

        {/* Overlay Content */}
        <div className="sm:absolute  max-w-[1170px] mx-auto px-4 inset-0 flex flex-col">
          <div className="   pb-6 flex gap-8  sm:flex-row flex-col justify-between items-center pt-12">
            {/* Text Content */}
            <div>
              <h2 className="text-black text-2xl lg:text-3xl font-semibold">
                Random Keys
              </h2>
              <p className="pt-2 text-gray-700 text-sm lg:text-base">
                Wondering what kind of gaming treasures are packed inside? Only one way to find out!
              </p>
            </div>
            {/* Discover Button */}
            <div>
              <Button label={'Discover all'} className="bg-secondary px-4 py-2 rounded-md text-white" />
            </div>
          </div>

          {/* Card Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
             
             {data2?.map((item,index)=>{
                return (
                    <>
                     <ProductCard originalPrice={item?.oldPrice} image={item?.image} discount={item?.discount}  title={item?.title} price={item?.price}  />
                    </>
                )
             })}
              {/* Repeat more cards similarly */}
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Crypto;
