import React, { useState, useEffect } from 'react'
import ConfirmMessage from './ConfirmMessage';

import { useNavigate ,useLocation} from 'react-router-dom';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthday: '',
        gender: '',
        email: '',
        phoneNumber: '',
        role: '',
    });

    const [editIndex,setEditIndex] = useState(null);
    const [showMessage,setShowMessage] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const index = localStorage.getItem('editIndex');
        if (index !== null) {
            setEditIndex(Number(index));
            const storedData = JSON.parse(localStorage.getItem('registrationData')) || [];
            setFormData(storedData[Number(index)] || {});
        }
    }, []);

    //   useEffect(() => {
    //     if (location.state?.editIndex !== undefined) {
    //         setEditIndex(location.state.editIndex);
    //         setFormData(location.state.data);
    //     }
    // }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault()
        setShowMessage(true);
    }

    const handleConfirm = () => {
        setShowMessage(false);
        try {
            const rawData = localStorage.getItem('registrationData');
            console.log('Raw data from localStorage:', rawData);
            let storedData = []
            if (rawData) {
                try {
                    storedData = JSON.parse(rawData);
                    if (!Array.isArray(storedData)) {
                        throw new Error('Stored data is not an array');
                    }
                } catch (error) {
                    console.error('Error parsing stored data:', error);
                    // Initialize storedData as an empty array if parsing fails
                    storedData = [];
                }
            }
            console.log('Parsed storedData:', storedData);
    
            // if (editIndex !== null) {
            //     // Update existing entry
            //     const updatedDataList = storedData.map((item, index) =>
            //         index === editIndex ? formData : item
            //     );
            //     localStorage.setItem('registrationData', JSON.stringify(updatedDataList));
            //     setEditIndex(null);
            // } else {
            //     // Add new entry
            //     localStorage.setItem('registrationData', JSON.stringify([...storedData, formData]));
            // }
    
            if (editIndex !== null) {
                // Update existing entry using splice
                storedData.splice(editIndex, 1, formData);
                localStorage.setItem('registrationData', JSON.stringify(storedData));
                setEditIndex(null);
            } else {
                // Add new entry using push
                storedData.push(formData);
                localStorage.setItem('registrationData', JSON.stringify(storedData));
            }

            // Clear the form
            setFormData({
                firstName: '',
                lastName: '',
                birthday: '',
                gender: '',
                email: '',
                phoneNumber: '',
                role: '',
            });
        } catch (error) {
            console.error('Error handling form submission:', error);
        }
        localStorage.removeItem('editIndex');
    };
    
    const handleCancel = ()=>{
        localStorage.removeItem('editIndex');
        setShowMessage(false);
    };

    const handleSuccessClose = () => {
        navigate('/tabledata');
    };

    return (
    <>
    <div className='min-h-screen bg-gradient-to-r from-pink-500 to-purple-700 flex items-center justify-center'>
        <div className='bg-white p-12 font-Roboto rounded-lg max-w mx-96 w-full my-24 '>
            <h1 className='text-2xl font-bold mb-6'>Clients Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex gap-6'>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">First Name</label>
                        <input
                            type="text"
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg "
                            placeholder="First Name"
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg "
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className="mb-4 w-full">
                        <label className=" text-gray-700">Birthday</label>
                        <input
                            type="date"
                            name='birthday'
                            value={formData.birthday}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg "
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">Gender</label>
                        <div className="flex items-center mt-3">
                            <input 
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}
                                className="mr-2 "
                            />
                            <label className="mr-4">Male</label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <label>Female</label>
                        </div>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg "
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name='phoneNumber'
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg "
                            placeholder="Phone Number"
                        />
                    </div>
                </div>
                <div className="mb-14">
                    <label className="block text-gray-700">Role</label>
                    <select name='role' value={formData.role} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg ">
                        <option>Choose option</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>Fullstack Developer</option>
                        <option>Testing</option>
                    </select>
                </div>
                <div className="text-center">
                    <button className="bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-700">
                        {editIndex !== null ? 'Update' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    </div>
    <ConfirmMessage show={showMessage} onYes={handleConfirm} onCancel={handleCancel} onSuccessClose={handleSuccessClose} />
    </>
    );
};

export default RegistrationForm;
