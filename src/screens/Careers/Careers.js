import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button';
import OurStories from '../../components/OurStories/OurStories';
import BottomHeader from '../../components/Header/BottomHeader';

const Careers = () => {

    const articles = [
        {
            title: 'Another round of Efficiency Heroes filled with innovative solutions',
            description:
                'We’ve successfully finished the exciting new edition of the Efficiency Heroes contest. For the third time G2Anians had a chance to submit their innovative ideas and creative solutions.',
            image: 'https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2024/11/GD-22371_Przygotowanie_grafiki_pod_artykul_na_strone_karier_1200x628-573x300.png',
            emoji: '👩‍💻👨‍💻',
        },
        {
            title: 'Poland Business Run 2024',
            description: 'The strong G2A team once again ran in the Poland Business Run.',
            image: 'https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2024/09/GD-22159_Poland_Business_Run_2024_-_photos_LINKEDIN_1_1200x628-573x300.png', // Replace with the actual image path
            emoji: '🏃‍♀️💪',
        },
        {
            title: 'The next edition of the Enter the Game internship program...',
            description:
                'We are very pleased that four new interns joined us in July. Our new colleagues will work on exciting projects, deepening their knowledge and professional skills.',
            image: 'https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2024/07/GD-21807_Enter-the-Game-1-574x300.jpg', // Replace with the actual image path
            emoji: '🚀',
        },
    ];


    const teamSpotlights = [
        {
            title: "Administration",
            icon: require('../../assets/images/careers/team1.png'), // Replace with your SVG or image
        },
        {
            title: "Commercial",
            icon: require('../../assets/images/careers/team2.png'),
        },
        {
            title: "Finance & Operations",
            icon: require('../../assets/images/careers/team3.png'),
        },
        {
            title: "Legal",
            icon: require('../../assets/images/careers/team4.png'),
        },
        {
            title: "Marketing",
            icon: require('../../assets/images/careers/team4.png'),
        },
        {
            title: "People & Culture",
            icon: require('../../assets/images/careers/team5.png'),
        },
        {
            title: "Product & IT",
            icon: require('../../assets/images/careers/team6.png'),
        },
        {
            title: "Security & Resilience",
            icon: require('../../assets/images/careers/team7.png'),
        },
    ];


    const Dnsteam = [
        {
            title: "Team Spirit",
            icon: "https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2022/08/spirit_g2a_dna.png", // Replace with your SVG or image
        },
        {
            title: "Communication",
            icon: "https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2022/08/communication_g2a_dna.png",
        },
        {
            title: "Deliver Value",
            icon: "https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2022/08/deliver_g2a_dna.png",
        },
        {
            title: "Trust",
            icon: 'https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2022/08/trust_g2a_dna.png',
        },
        {
            title: "Growth",
            icon: 'https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2022/08/growth_g2a_dna.png',
        },
        {
            title: "Accountability",
            icon: "https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2022/08/accountability_g2a_dna.png",
        }
    ];


    const Simplest = [
        {
            title: "Apply",
            icon: require('../../assets/images/careers/simple1.png'),
            description: "Find a job offer and send your CV ",
        },
        {
            title: "Let’s talk",
            icon: require('../../assets/images/careers/simple2.png'),
            description: 'We will contact you and schedule a recruitment interview on Microsoft Teams'
        },
        {
            title: "Show your skills",
            icon: require('../../assets/images/careers/simple3.png'),
            description: "Showcase your skills during the interview with the recruiter",
        },
        {
            title: "Meet your manager",
            icon: require('../../assets/images/careers/simple4.png'),
            description: 'The second stage is a substantive interview with the manager'
        },
        {
            title: "Get hired",
            icon: require('../../assets/images/careers/simple45.png'),
            description: "Let's agree on the terms of employment and discuss all the details of our cooperation"
        },
        {
            title: "Welcome to G2A!",
            icon: require('../../assets/images/careers/simple6.png'),
            description: 'Welcome to G2A! - Congratulations! Your adventure is just beginning',
        }
    ];




    const benefitsData = [
        {
            category: "Development",
            items: [{ icon: "📘", title: "Trainings" }],
        },
        {
            category: "Entertainment",
            items: [{ icon: "🍔", title: "Motivizer Cafeteria System" }],
        },
        {
            category: "Organization Culture",
            items: [
                { icon: "🌐", title: "Flexible Work Models" },
                { icon: "👕", title: "No dress code" },
                { icon: "🎁", title: "Welcome Package" },
                { icon: "⏰", title: "Flexible working hours" },
            ],
        },
        {
            category: "Sport & Wellness",
            items: [
                { icon: "🏅", title: "Life insurance" },
                { icon: "🏋️", title: "G2A Active Teams" },
                { icon: "💊", title: "Medical care" },
            ],
        },
    ];

    return (
        <>
            <Navbar />
            <BottomHeader/>
            <section className=' py-12 bg-black'>

                <div className=' max-w-[1170px]  px-3 mx-auto'>
                    <span className=' text-[#F1521B] text-sm'>G 2 A . CO / J O B O F F E R</span>
                    <h2 className=' text-white sm:text-6xl text-3xl font-bold      leading-tight uppercase'>G2A.COM a Gate2Adventure in the world of digital entertainment for over 30M users with more than 75k digital items.</h2>
                    <p className='  pt-2 text-white'>Pretty impresive numbers, aren’t they? But it’s the people who make up the G2A.COM team we want to brag about instead 🙂

                    </p>
                </div>

            </section>

            <section className=''>

                <div className=" max-w-[1170px] px-3 mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-md overflow-hidden border border-gray-200"
                            >
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <div className="text-2xl font-semibold flex items-center">
                                        {article.emoji} {article.title}
                                    </div>
                                    <p className="text-gray-600 mt-2">{article.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
            <section className=' py-12 bg-[#F3F3F3]'>

                <div className=' max-w-[1170px]  px-3 mx-auto'>
                    <h2 className=' text-black text-3xl font-bold      leading-tight uppercase'>We don’t limit anyone – choose remote or hybrid model– stay passionate at work and after hours

                    </h2>

                </div>

            </section>
            <section className=' py-12 bg-[#f1521b]'>

                <div className=' max-w-[1170px]  px-3 mx-auto'>
                    <h2 className=' text-white sm:text-6xl text-3xl font-bold       leading-snug uppercase'>Are you looking for new, incredible challenges? Do you want to co-create a global business?</h2>
                    <p className='  pt-2 text-white'>Join our 400 exceptional experts. Check out our job offers!

                    </p>
                </div>

            </section>


            <div className="bg-gray-100 py-10 px-6">
                <div className=" max-w-[1170px] mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8">
                        TEAM SPOTLIGHTS
                    </h2>
                    <div className=' max-w-5xl mx-auto'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {teamSpotlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white  rounded-sm hover:bg-[#fde7d9] text-blue-600 hover:text-[#f1521b] hover:border hover:border-[#f1521b] shadow-md flex flex-col items-center justify-between p-6 border border-gray-200 hover:shadow-lg"
                                >
                                    <div className=" mb-4">
                                        <img src={item?.icon} alt='' />
                                    </div>
                                    <h3 className="text-xl text-center font-medium ">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>




            <div className=" py-10 px-6">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-12">
                        BENEFITS
                    </h1>
                    <div className="space-y-10">
                        {benefitsData.map((category, index) => (
                            <div key={index}>
                                <h2 className="text-2xl font-semibold mb-4">
                                    {category.category.toUpperCase()}
                                </h2>
                                <div className="flex flex-wrap gap-4">
                                    {category.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center border border-gray-200 text-blue-600 hover:bg-[#fde7d9] hover:text-[#f1521b] hover:border hover:border-[#f1521b] rounded-sm px-4 py-2 bg-white shadow-sm hover:shadow-md space-x-3"
                                        >
                                            <span className="text-orange-500 text-3xl">
                                                {item.icon}
                                            </span>
                                            <span className="text-blue-600 font-medium">
                                                {item.title}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



     <OurStories/>

            <div className=' max-w-[1170px] py-12  mx-auto px-3'>
                <h2 className="text-5xl uppercase font-bold text-left mb-8">
                    G2A | GATE 2 ADVENTURE

                </h2>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/5EceUVWA6g4?si=ZvV-y0hCom5bhhNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>



            <div className="bg-gray-100 bg-Careers_bg py-10  bg-cover bg-center">
                <div className=" max-w-[1170px] mx-auto">
                    <h2 className="text-4xl uppercase font-bold text-center mb-8">
                        G2A DNA - Our core values

                    </h2>
                    <div className=' max-w-5xl mx-auto'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                            {Dnsteam.map((item, index) => (
                                <div className=' w-full'>
                                    <div
                                        key={index}
                                        className="bg-white  rounded-sm hover:bg-[#fde7d9] text-blue-600 hover:text-[#f1521b] hover:border hover:border-[#f1521b] shadow-md flex  items-center  justify-center  w-full h-40 border border-gray-200 hover:shadow-lg"
                                    >
                                        <div className="">
                                            <img src={item?.icon} alt='' />
                                        </div>

                                    </div>

                                    <div>
                                        <h3 className="text-lg text-center  pt-3 font-medium ">
                                            {item.title}
                                        </h3>
                                    </div>

                                </div>

                            ))}
                        </div>
                        <div className=' flex justify-center items-center pt-12'>
                            <Button label={'Read more'} className={'  bg-secondary px-12 rounded-sm text-white'} />
                        </div>
                    </div>
                </div>
            </div>



            <div className="  py-10 ">
                <div className=" max-w-[1170px] mx-auto">
                    <h2 className="text-4xl uppercase font-bold  mb-8">
                        The simplest way!

                    </h2>
                    <div className=' max-w-[1170px] mx-auto'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                            {Simplest.map((item, index) => (
                                <div className=' w-full '>

                                    <div className="">
                                        <img src={item?.icon} className=' mx-auto' alt='' />
                                    </div>


                                    <div className=' pt-3'>
                                        <h3 className="text-lg text-[#EF5F00] font-semibold text-center  ">
                                            {item.title}
                                        </h3>
                                        <p className=' text-center'>{item?.description}</p>
                                    </div>

                                </div>

                            ))}
                        </div>
                        <div className=' flex justify-center items-center pt-12'>
                            <Button label={'Read more'} className={'  bg-secondary px-12 rounded-sm text-white'} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="  py-10 ">
                <div className=" max-w-[1170px] mx-auto">

                    <div className=' mx-auto'>
                        <h2 className="text-4xl uppercase font-bold  mb-8">
                            ONBOARDING PROCESS


                        </h2>
                        <div className=" flex flex-wrap  justify-between items-center ">
                            <div className=' w-56'>

                                <div className="">
                                    <img src={'https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2022/08/letter-62e797bfc0bce.png'} className=' mx-auto' alt='' />
                                </div>


                                <div className=' pt-3'>
                                    <h3 className="text-lg text-[#EF5F00] font-semibold text-center  ">
                                        Orientation day agenda


                                    </h3>
                                    <p className=' text-center'>Get an email with the first day agenda</p>
                                </div>

                            </div>

                            <div className='  w-56 '>

                                <div className="">
                                    <img src={'https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2022/08/hi-62e797bddac1d.png'} className=' mx-auto' alt='' />
                                </div>


                                <div className=' pt-3'>
                                    <h3 className="text-lg text-[#EF5F00] font-semibold text-center  ">
                                        Orientation day




                                    </h3>
                                    <p className=' text-center'>Get to know G2A.COM, our values, corporate structure and have a conversation with your manager.

                                    </p>
                                </div>

                            </div>
                            <div className='  w-56'>

                                <div className="">
                                    <img src={'https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2022/08/team-62e797bbd5a6d.png'} className=' mx-auto' alt='' />
                                </div>


                                <div className=' pt-3'>
                                    <h3 className="text-lg text-[#EF5F00] font-semibold text-center  ">
                                        Orientation week






                                    </h3>
                                    <p className=' text-center'>you will spend it in online meetings where you will get to know your closest colleagues from different departments




                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Careers
