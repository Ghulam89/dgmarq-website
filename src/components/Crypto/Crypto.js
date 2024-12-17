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
  return (
    <div className=" ">
      {/* Background Image */}
      <div className="relative w-full h-full">
        <img
          src={require('../../assets/images/crypto_bg.avif')}
          alt="Crypto Background"
          className="w-full  hidden sm:block h-auto object-cover"
        />

        {/* Overlay Content */}
        <div className="sm:absolute  inset-0 max-w-7xl mx-auto px-4 inset-0 flex flex-col">
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
    </div>
  );
};

export default Crypto;
