import React, { useState } from 'react';
import Wrapper from '../../BuyerDashboard/Wrapper';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Base_url } from '../../../utils/Base_url';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { MdModeEditOutline } from 'react-icons/md';
import { addUser } from '../../../store/productSlice';

const Settings = () => {
    const { userInfo } = useSelector((state) => state.next);
    const [username, setUsername] = useState(userInfo?.username || '');
    const [email, setEmail] = useState(userInfo?.email || '');
    const [password, setPassword] = useState('');
    const [logo, setLogo] = useState(null);
    const [logoPreview, setLogoPreview] = useState(userInfo?.logo || '');
    const navigate = useNavigate();
   const dispatch = useDispatch()
    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLogo(file);
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const updateProfile = async () => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        if (password) {
            formData.append('password', password);
        }
        if (logo) {
            formData.append('image', logo);
        }

        try {
            const response = await axios.put(`${Base_url}/user/update/${userInfo?._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response);
            

            if (response?.data?.status === 200) {
                toast.success('profile update successfully')
                
                dispatch(addUser(response?.data?.data))
                
            } else {
                toast.error(response?.data?.message);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    return (
        <Wrapper>
            <div className="max-w-4xl mx-auto py-10">
                <h1 className="text-3xl font-bold mb-6">Settings</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="flex items-center mb-4">
                        <div className="relative w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                            {logoPreview ? (
                                <img src={logoPreview} alt="Profile" className="w-full h-full rounded-full object-cover" />
                            ) : (
                                userInfo?.logo?<img src={userInfo?.logo} alt="Profile" className="w-full h-full rounded-full object-cover" />:<img src={require('../../../assets/images/profile.jpg')} alt="Profile" className="w-full h-full rounded-full object-cover" />
   
                            )}
                            <label
                                htmlFor="logo-upload"
                                className="absolute bottom-0 bg-white shadow-md right-0 bg-blue-500 text-white rounded-full p-1 border border-white cursor-pointer"
                            >
                                <MdModeEditOutline color='black' />

                            </label>
                            <input
                                id="logo-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                className="hidden"
                            />
                        </div>
                        <div className="ml-4">
                            <h2 className="text-xl font-semibold">Personal details</h2>
                            <p className="text-gray-500 text-sm">
                                {userInfo?.username}
                            </p>
                            <p className="text-gray-500 text-sm">
                                {userInfo?.email}
                            </p>
                        </div>
                    </div>
                    <div className="border-t pt-4">
                        <div className="flex justify-between items-center py-3">
                            <div>
                                <h3 className="font-semibold">Personal details</h3>
                                <p className="text-gray-500 text-sm">
                                    username: <span className="font-medium">{userInfo?.username}</span>
                                </p>
                                <p className="text-gray-500 text-sm">
                                    email: <span className="font-medium">{userInfo?.email}</span>
                                </p>
                            </div>
                            <span className="text-gray-400">➝</span>
                        </div>
                        
                    </div>
                    <div className="border-t pt-4">
                        <h3 className="font-semibold mb-4">Update Profile</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                            <button
                                onClick={updateProfile}
                                className="w-full bg-blue text-white p-2 rounded hover:bg-blue-600"
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Settings;