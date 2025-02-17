import React from 'react'
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import BottomHeader from '../../components/Header/BottomHeader';
import Subscription from '../../components/Subscription';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import paypal from '../../assets/images/paypal_v2.png';
const Checkout = () => {
  const productData = useSelector((state) => state?.next?.productData);

  console.log("Product Data:", productData);
  const dispatch = useDispatch();




  const productPrice = productData?.map((item) => item?.price * item?.quantity);
  console.log(productPrice);

  const totalPriceAfterDiscount = productPrice?.reduce((acc, price) => acc + price, 0);

  console.log("Total Price After Discount:", totalPriceAfterDiscount);


  return (
    <>
      <Navbar />
      <BottomHeader />
      <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className=' flex   justify-between items-center'>
            <h2 class=" font-semibold text-gray-900 dark:text-white  text-xl">Payment methods</h2>

            <div className=' flex gap-2 items-center'>

            </div>
          </div>

          <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-3xl">
              <div class="space-y-6 p-3 rounded-sm border">

                <div className=' flex gap-2  pb-5 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.3em" height="1.3em" color="#41C303"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M19 11H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 16a3 3 0 006 0"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M17 7V6a4.95 4.95 0 00-4.9-5H12a4.95 4.95 0 00-5 4.9V7"></path></svg>
                  <p className=' text-gray-400'>All transactions are secured, processed and authorized by external payment providers</p>
                </div>

                <ul className=' border'>
                  <li className=' border-b flex justify-between items-center p-2 py-3'>
                    <div className=' flex items-center gap-2'>
                      <input type='radio' className=' w-5 h-5' />
                      <img src={require('../../assets/images/visa.png')} className=" w-14" alt='' />
                      <img src={require('../../assets/images/mastercard.png')} className=" w-20" alt='' />
                    </div>
                    <div>
                      <p className=' m-0 text-gray-300'>Credit or debit card</p>
                    </div>
                  </li>
                  <li className=' flex justify-between items-center p-2 py-3'>
                    <div className=' flex  gap-3'>
                      <input type='radio' className=' w-5 h-5' />
                    <div>
                    <img src={paypal} className=" w-20" alt='' />
                    <p className=' m-0 text-gray-500 text-sm pt-1'>Pay with PayPal.</p>
                    </div>
                    </div>
                    <div>
                      <p className=' m-0 text-gray-300'>paypal</p>
                    </div>
                  </li>
                  <li className=' flex justify-between border-t items-center p-2 py-3'>
                    <div className=' flex  gap-3'>
                      <input type='radio' className=' w-5 h-5' />
                    <div>
                    <img src={paypal} className=" w-20" alt='' />
                    </div>
                    </div>
                    <div>
                      <p className=' m-0 text-gray-300'>PayPal 1-Click</p>
                    </div>
                  </li>
                </ul>


              </div>



            </div>

            <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div class="space-y-4 rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <div class="flex items-center justify-between gap-4  border-gray-200 pt-2 dark:border-gray-700">
                  <dt class="text-base  text-gray-300 dark:text-white">Subtotal(1 item from 1 seller)</dt>
                  <dd class="text-base  text-black dark:text-white"> $ 20.06</dd>
                </div>
                <div class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt class="text-base  text-gray-300 dark:text-white">Payment fee</dt>
                  <dd class="text-base  text-gray-900 dark:text-white"> $ 0.11</dd>
                </div>
                <div class="space-y-8 mt-4">


                  <div class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt class="text-base font-bold text-gray-900 dark:text-white">Total Price</dt>
                    <dd class="text-base font-bold text-gray-900 dark:text-white">${totalPriceAfterDiscount}</dd>
                  </div>
                </div>

                <a href="#" class="flex w-full items-center bg-blue justify-center rounded-md  bg-blue-500 px-5 py-2.5 text-sm font-medium text-white   hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Pay with pay Pal</a>


              </div>


            </div>
          </div>
        </div>
      </section>
      <Subscription />
      <Footer />
    </>

  )
}

export default Checkout
