import React from 'react'
import { H2, H3, H4 } from '../common/Heading'
import ProductCard from '../Cards/ProductCard'
import Button from '../Button';

const Upcoming = () => {
    const products = [
        {
          id: 1,
          discount:'4%',
          title: "Kingdom Come: Deliverance II | Gold Edition (PC) - steam",
          subtitle: "(PC) - Steam Account",
          price: "$34.35",
          oldPrice: "$39.99",
          tag: "SPONSORED",
          image:
            "https://images.g2a.com/170x228/0x0x0/kingdom-come-deliverance-ii-gold-edition-pc-steam-key-global/22a42ab8ac0e4c1988d4577e", // Replace with the actual image
        },
        {
          id: 2,
          
          discount:'8%',
          title: "Ambulance Life: A Paramedic Simulator (PC) -  stream Key - ...",
          subtitle: "(PC) - Steam Key - GLOBAL",
          price: "$5.87",
          tag: "SPONSORED",
          image:
            "https://images.g2a.com/170x228/0x0x0/ambulance-life-a-paramedic-simulator-pc-steam-key-global/07e18aba6bde4e44b059b379",
        },
        {
          id: 3,
          
          discount:'9%',
          title: "Battlefield 2042",
          subtitle: "(Xbox Series X/S) - Xbox Live Key",
          price: "$12.06",
          tag: "OFFER FROM 6 SELLERS",
          image:
            "https://images.g2a.com/170x228/0x0x0/assassins-creed-shadows-pc-ubisoft-connect-key-global/a7af4095afcd499ea2483190",
        },
        {
          id: 4,
          
          discount:'2%',
          title: "Max Payne (PC)",
          subtitle: "Steam Key - GLOBAL",
          price: "$4.77",
          tag: "OFFER FROM 23 SELLERS",
          image:
            "https://images.g2a.com/170x228/0x0x0/monster-hunter-wilds-pc-steam-key-europe/dd67b1889a00422e8fbd30cd",
        },
        {
          id: 5,
          
          discount:'8%',
          title: "Grand Theft Auto V (PC)",
          subtitle: "Rockstar Key - GLOBAL",
          price: "$12.22",
          tag: "SPONSORED",
          image:
            "https://images.g2a.com/170x228/1x1x0/grand-theft-auto-v-rockstar-key-global/59e5efeb5bafe304c4426c47",
        },
        {
          id: 6,
          
          discount:'5%',
          title: "Darktide",
          subtitle: "(PC)",
          price: "$11.41",
          tag: "SPONSORED",
          image:
            "https://images.g2a.com/170x228/1x1x0/playstation-network-gift-card-110-usd-psn-key-united-states/a474e71e754c47c891d9ce58",
        },
      ];
  return (
    <>
     <div className=' max-w-[1170px] mx-auto mb-12 px-3'>
     <H2>New and upcoming releases
     </H2>

     </div>
      <div className=' flex sm:flex-row flex-col  sm:gap-0 gap-2 justify-between items-center w-full'>
        <div className=' sm:w-6/12 w-12/12'>
         <div className=' relative'>
          <img src='https://images.g2a.com/uiadminimages/960x438/1x1x1/bdf4fa33651a/bd677977c4d04d82bdd9978a' className=' w-full' alt='' /> 
          <div className=' absolute  sm:w-96 w-[95%] sm:right-32 right-3 py-3 top-0 h-full flex justify-center items-center'>
            <div>
                <img src='https://images.g2a.com/uiadminimages/301x60/1x1x1/ce8b3ad5b21c/082f5e44ea0247f6bd94092a' alt='' />
                <H4 className=' text-white pt-6'>Path of Exile 2 | Early Access Supporter Pack (PC) - Steam Account - GLOBAL</H4>

                <H3 className=' text-white pt-2'>$ 20.67</H3>
             <div className=' flex gap-3 justify-between items-center'>
            <div className=' flex  flex-col gap-1'>
            <p className=" text-gray-500 line-through  flex">$ 30.22    
              </p>
              <button className=" w-10 text-[12px] rounded-md  text-red-500 bg-[#FAE9E7] border border-red-500">-32%</button> 
            </div>
              <button className="text-white bg-blue-600 px-5 rounded-md py-2 font-medium hover:underline">
               Add to Cart
          </button>
             </div>
            
            </div>
            </div>   
        </div> 
        </div>
        <div className=' sm:w-6/12 w-12/12'>
          <div className=' relative'>
            <img src='https://images.g2a.com/uiadminimages/960x438/1x1x1/e3b42cd16b73/9457f36fdf8c4605a6dbe1aa' className=' h-auto w-full' alt='' />
            <div className=' absolute  sm:w-96 w-[95%]  py-12 sm:left-32 left-3 top-0 h-full flex justify-center items-center'>
            <div>
                <img src='https://images.g2a.com/uiadminimages/116x60/1x1x1/fb885a4a3c87/d33c3c02448e4bf88569e3b8' alt='' />
                <H4 className=' text-white pt-6'>Path of Exile 2 | Early Access Supporter Pack (PC) - Steam Account - GLOBAL</H4>

                <H3 className=' text-white pt-2'>$ 20.67</H3>
             <div className=' flex justify-between gap-3 items-center'>
            <div className=' flex  flex-col gap-1'>
            <p className=" text-gray-500 line-through  flex">$ 30.22    
              </p>
              <button className=" w-10 text-[12px] rounded-md  text-red-500 bg-[#FAE9E7] border border-red-500">-32%</button> 
            </div>
              <button className="text-white bg-blue-600 px-5 rounded-md py-2 font-medium hover:underline">
               Add to Cart
          </button>
             </div>
            
            </div>
            </div> 
          </div>
        </div>
      </div>



      <section className=" py-10">
      <div className="max-w-[1170px] mx-auto px-4">
      
      <div className=" py-6 flex  justify-between">
       <div>
       <h2 className="text-2xl font-bold">Upcoming games</h2>
        <p className="text-gray-500">
        Can’t wait to play your game? Preorder the key now and experience it on day one!


        </p>
       </div>

       <div>
       <button className="py-1.5 px-6 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600">
          Discover all
        </button>
       </div>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product, index) => (
            
            <ProductCard image={product?.image} discount={product?.discount}  originalPrice={product?.price}  title={product?.title} price={product?.price}  />

          ))}
        </div>
        <div className="text-center mt-6">
          <button className="text-blue-600 font-medium hover:underline">
            Discover all
          </button>
        </div>
      </div>
    </section>


    <section className="bg-deal_bg py-12 bg-cover bg-center">
  <div className="max-w-[1170px] mx-auto px-4">
  <div className="grid gap-6 sm:grid-cols-[1fr,2fr,1fr]  grid-cols-1">
  {/* First Column */}
  <div className="flex flex-col gap-3">
   <div className=' relative'>
   <img
      src="https://images.g2a.com/uiadminimages/270x185/1x1x1/4990d136b216/f18b24f12a914ef889227fc8"
      alt="First Image"
      className="w-full rounded-lg"
    />
     <div className=' absolute bottom-5 w-full flex justify-center items-center'>
      <Button label={'View Items'} className={' bg-blue-600 rounded-md px-3'} />
    </div>
   </div>
    <div className=' h-full relative'>
    <img
      src="https://images.g2a.com/uiadminimages/270x185/1x1x1/b67be9aba6b2/38732a7a40194e9f8b55d18f"
      alt="Second Image"
      className="w-full h-full rounded-lg"
    />
     <div className=' absolute bottom-5 w-full flex justify-center items-center'>
      <Button label={'View Items'} className={' bg-blue-600 rounded-md px-3'} />
    </div>
    </div>
   
    
  </div>

  {/* Second Column */}
  <div className="flex relative items-center">
    <img
      src="https://images.g2a.com/uiadminimages/570x400/1x1x1/3d60d00666d9/315fee15a2f840f9a66ae74a"
      alt="Main Large Image"
      className="w-full h-full rounded-lg"
    />
     <div className=' absolute bottom-5 w-full flex justify-center items-center'>
      <Button label={'View Items'} className={' bg-blue-600 rounded-md px-3'} />
    </div>
  </div>

  {/* Third Column */}
  <div className=' relative'>
    <img
      src="https://images.g2a.com/uiadminimages/270x400/1x1x1/f9ca3fab6a8b/2af5bfa2113241f98d9aeae0"
      alt="Third Image"
      className="w-full rounded-lg"
    />
     <div className=' absolute bottom-5 w-full flex justify-center items-center'>
      <Button label={'View Items'} className={' bg-blue-600 rounded-md px-3'} />
    </div>
  </div>
</div>

  </div>
</section>

    </>
  )
}

export default Upcoming
