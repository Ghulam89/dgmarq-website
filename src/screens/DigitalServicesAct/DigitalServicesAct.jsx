import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import Subscription from '../../components/Subscription'

const DigitalServicesAct = () => {
  return (
    <>
     <Navbar/>
     <section className=' flex h-56  justify-center items-center bg-Digital'>

        <div className=' max-w-5xl'>
                    <h1 className=' text-4xl text-white  font-medium'>Reporting obligations regarding transparency arising from the Digital Services Act</h1>
</div>        
     </section>
     <section className=' max-w-5xl py-12  mx-auto'>
        <h2 className=' font-semibold text-xl  text-black'>Number of users
        </h2>
        <p className=' pt-5 text-sm text-gray-500'>G2A.COM informs that the average number of monthly active users on the G2A.COM platform in the European Union is 2,350,446. This result has been calculated in accordance with the methodology established under the Digital Services Act. For more information, you can contact us at: https://www.g2a.co/contact/
        </p>

        <h2 className=' pt-4 font-semibold text-xl  text-black'>Point of Contact for Member State Authorities, Commission, and Council of Digital Services

        </h2>
        <p className=' pt-5 text-sm text-gray-500'>G2A.COM informs that it designates a point of contact for the Member State authorities, Commission, and Council of Digital Services of the European Union, enabling direct communication with G2A, which is available at the following address: legal@g2a.com ("Point of Contact").

        </p>
        <p className=' pt-5 text-sm text-gray-500'>The Point of Contact can be reached in English, Dutch, and Polish.


        </p>

        <h2 className=' pt-4 font-semibold text-xl  text-black'>Point of Contact for Service Recipients in the European Union


</h2>
<p className=' pt-5 text-sm text-gray-500'>More information can be obtained by contacting us: https://www.g2a.co/contact/



</p>
<ul>
    <li>Support Center</li>
    <li>support@g2a.com</li>
</ul>

<h2 className=' font-semibold text-xl  pt-5 text-black'>Legal Representative in the European Union


        </h2>
        <p className=' pt-5 text-sm text-gray-500'>G2A.COM designates the following legal representative in the European Union: G2A.COM Direct B.V. with its registered office in Amsterdam, address: James Wattstraat 77 A 3, 1097DL Amsterdam, Netherlands, RSIN: 865170769, KvK 89975561; legal@g2a.com, phone number +31 6 84 93 37 5.

        </p>
<h2 className=' font-semibold text-xl  pt-5 text-black'>More information

        </h2>
        <p className=' pt-5 text-sm text-gray-500'>G2A.COM informs that the average number of monthly active users on the G2A.COM platform in the European Union is 2,350,446. This result has been calculated in accordance with the methodology established under the Digital Services Act. For more information, you can contact us at: https://www.g2a.co/contact/
        </p>
     </section>
     <Subscription/>
     <Footer/>
    </>
  )
}

export default DigitalServicesAct