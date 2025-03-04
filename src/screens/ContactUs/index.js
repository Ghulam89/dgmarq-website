import React, { useState } from 'react';
import axios from 'axios';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaTwitch, FaReddit } from 'react-icons/fa';
import Navbar from '../../components/Header/Navbar';
import BottomHeader from '../../components/Header/BottomHeader';
import Footer from '../../components/Footer/Footer';
import { Base_url } from '../../utils/Base_url';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${Base_url}/contactus/create`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    message: '',
                });
                toast.success('Message sent successfully!');
            } else {

            }
        } catch (error) {

            console.error('Error:', error);

        }
    };

    return (
        <>
            <Navbar />
            <BottomHeader />
            <div className="flex flex-col my-12 md:flex-row bg-white shadow-lg rounded-lg p-8 max-w-6xl mx-auto">
                {/* Left Section */}
                <div className="md:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-lg">
                    <h2 className="text-3xl font-bold">Let's Connect!</h2>
                    <p className="mt-2 text-gray-300">
                        Choose the right department for your inquiry: Sales, Developers, Educators, Media, or Marketing Partnerships
                    </p>
                    <div className="mt-6">
                        <span className="block font-semibold mb-2">Find us on social media</span>
                        <div className=" flex mt-8  gap-4">
                            <Link
                                to="https://www.facebook.com/profile.php?id=61572367034800"
                                title="G2A.COM Facebook"
                            >
                                <img
                                    src="https://static.g2a.com/8d549fa4e45f4e8c84400fd5/G2A_footer_socials_FACEBOOK.svg"
                                    alt="G2A.COM Facebook"
                                    loading="lazy"
                                    width={28}
                                    height={28}
                                />
                            </Link>
                            <Link
                                to="#"
                                title="G2A.COM X"
                            >
                                <img
                                    src="https://static.g2a.com/93d30de1820d4810bedf35e0/G2A_footer_socials_X.svg"
                                    alt="G2A.COM X"
                                    loading="lazy"
                                    width={28}
                                    height={28}
                                />
                            </Link>
                            <Link

                                to="#"
                                title="G2A.COM Youtube"
                            >
                                <img
                                    src="https://static.g2a.com/c16c534f0c1247b2923966c8/G2A_footer_socials_YOUTUBE.svg"
                                    alt="G2A.COM Youtube"
                                    loading="lazy"
                                    width={28}
                                    height={28}
                                />
                            </Link>
                            <Link
                                to="https://www.instagram.com/digital_marq/"
                                title="G2A.COM Instagram"
                            >
                                <img
                                    src="https://static.g2a.com/77180c91f32246508fb3c21d/G2A_footer_socials_INSTAGRAM.svg"
                                    alt="G2A.COM Instagram"
                                    loading="lazy"
                                    width={28}
                                    height={28}
                                />
                            </Link>
                            <Link
                                to="#"
                                title="G2A.COM  LinkedIn"
                            >
                                <img
                                    src="https://static.g2a.com/418d7673087a4a029c672ab3/G2A_footer_socials_LINKEDIN.svg"
                                    alt="G2A.COM  LinkedIn"
                                    loading="lazy"
                                    width={28}
                                    height={28}
                                />
                            </Link>
                            <Link
                                to="#"
                                title="G2A.COM Twitch"
                            >
                                <img
                                    src="https://static.g2a.com/65c947a7ff3a43cc9eec4f6f/G2A_footer_socials_TWITCH.svg"
                                    alt="G2A.COM Twitch"
                                    loading="lazy"
                                    width={28}
                                    height={28}
                                />
                            </Link>
                            <Link
                                to="#"
                                title="G2A.COM Reddit"
                            >
                                <img
                                    src="https://static.g2a.com/0c382e47cdfd48ed9770e614/G2A_footer_socials_REDDIT.svg"
                                    alt="G2A.COM Reddit"
                                    loading="lazy"
                                    width={28}
                                    height={28}
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 p-8">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="w-full border p-3 rounded-lg"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Business email *"
                            className="w-full border p-3 rounded-lg"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number *"
                            className="w-full border p-3 rounded-lg"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your message *"
                            className="w-full border p-3 rounded-lg h-24"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" className="bg-blue text-white py-2 px-6 rounded-lg w-full">
                            Send
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-2">
                        By selecting Send, you give consent to sending you email commercial communication, including the one suited to you.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;