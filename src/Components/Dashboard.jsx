
import React, { useEffect, useState,useRef } from 'react';
import 'react-phone-number-input/style.css'
import { useUser } from './userContext';
import PhoneInput from 'react-phone-number-input'
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image,setImage] = useState(null);
  const fileInputRef = useRef(null);
  const [phone,setPhone] = useState('');
  const [phoneError,setPhoneError] = useState('');
  const [experience, setExperience] = useState(''); 
  const [about,setAbout] = useState('');
  const [aboutError,setAboutError] = useState('');
  const [charCount,setCharCount] = useState(0);
  const maxCharCount = 500;
  const {setUserImage} =useUser();


  useEffect(() => {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const fullName = `${firstName} ${lastName}`;
    const savedEmail = localStorage.getItem('email');

    localStorage.setItem('fullName', fullName);

    if (fullName) setName(fullName);
    if (savedEmail) setEmail(savedEmail);
  }, []);
  
  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      // Update the user image in context
      setUserImage(imageUrl); 
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click(); 
  };
  // handle about me text area
  const handleAboutChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length <= 500) {
      setAbout(newValue);
      setAboutError('');
      setCharCount(newValue.length);
    }else{
      setAboutError('About section cannot exceed 500 characters.');
    }
  };
    // Handle experience select changes
  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  // Handle phone number with validation
  const handlePhoneChange = (value) => {
    setPhone(value);
    const digits = value ? value.replace(/\D/g, '') : '';
    if (digits.length !== 12) {
      setPhoneError('Phone number must be exactly 10 digits.');
    }else {
      setPhoneError('');
    }
  };
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('Form saved successfully!');
    console.log(name);
    console.log(email);
    console.log(about);
    console.log(experience);
    console.log(phone);
  }
  
  return (
    <div className="bg-[#FBF7F4] min-h-screen">
      <main className="container mx-auto px-4 py-2 max-w-7xl mt-3">
        <div className="flex">
          <img src="/images/Arrow (1).png" alt="arrow" className="mr-2 w-[32px] h-[32px]" />
          <p>Go Back</p>
        </div>
        <hr className="border-b-1 border-gray-300 mb-6 mt-3" />
        <div className="md:flex block">
          <div className="w-1/5 p-4 mr-3">
            <p className="text-[#40474B] text-[16px] mb-3 w-[183px] h-[24px]">Agency Profile</p>
            <p className="text-[#FF6745] text-[16px] mb-3 w-[183px] h-[24px]">My Profile</p>
            <p className="text-[#40474B] text-[16px] mb-3 w-[183px] h-[24px]">Add BRs</p>
            <div className="flex mb-3">
              <p className="text-[#40474B] text-[16px] mr-2 w-[183px] h-[24px]">Payments</p>
              <img src="/images/Vector.png" alt="vector" className="w-[13px] h-[12px] mt-2" />
            </div>
            <p className="text-[#40474B] text-[16px] mb-3 w-[183px] h-[24px]">Authorised Signatory</p>
            <p className="text-[#40474B] text-[16px] mb-3 w-[183px] h-[24px]">Security</p>
            <div className="flex mb-3">
              <p className="text-[#40474B] text-[16px] mb-3 w-[183px] h-[24px]">General</p>
              <img src="/images/Vector.png" alt="vector" className="w-[13px] h-[12px] mt-2" />
            </div>
          </div>
          <div className="md:w-4/5 bg-white p-8 w-full">
            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <img src={image ? image : "/images/Ellipse 95.png"} alt="Avatar" className="w-20 h-20 rounded-full" />
                <button onClick={handleUploadClick} className="text-blue-600 underline mt-2 cursor-pointer mb-4">Upload</button>
                <input type='file' ref={fileInputRef} className='hidden' onChange={handleImageUpload} />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <div className="col-span-2 flex gap-4 mb-2">
                  <div className="w-full">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      id="name"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Jason Doe"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-[#40474B]"
                      placeholder="qrclient"
                    />
                  </div>
                </div>
                <div className="col-span-2 mb-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    id="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="jasonqrclient@pqrclient.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-span-2 mb-3 relative">
                  <label htmlFor="about" className="block relative text-sm font-medium text-gray-700">
                    About Me
                  </label>
                  <div className='flex flex-col'>
                  <textarea
                    id="about"
                    rows="4"
                    value={about}
                    onChange={handleAboutChange}
                    placeholder='Write about yourself'
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md text-xs'
                  />
                  </div>
                  <div className='text-red-500 absolute text-xs mt-1 flex justify-between'>
                  <p>{charCount}/500</p>
                  </div>
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                    Total Experience
                  </label>
                  <select
                    id="experience"
                    value={experience}
                    onChange={handleExperienceChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select Experience</option>
                    {[...Array(21).keys()].map(month => (
                      <option key={month} value={month}>{month} month{month > 1 ? 's' : ''}</option>
                    ))}
                    {/* <option value="">Select Experience</option>
                    <option value="0 year">0-1 year</option>
                    <option value="1 years">1-3 years</option>
                    <option value="3 years">3-5 years</option>
                    <option value="4years">5-10 years</option>
                    <option value="5 year">0-1 year</option>
                    <option value="6 years">1-3 years</option>
                    <option value="7 years">3-5 years</option>
                    <option value="8 years">5-10 years</option>
                    <option value="9 year">0-1 year</option>
                    <option value="10 years">1-3 years</option>
                    <option value="12 years">3-5 years</option> */}
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number 
                  </label>
                  <PhoneInput
                    id="phone"
                    value={phone}
                    onChange={(value) =>handlePhoneChange(value)}
                    className={`mt-1 block w-full p-2 border relative rounded-md ${phoneError ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="1234567890"
                  />
                  {phoneError && <p className="text-red-500 absolute text-xs mt-1">{phoneError}</p>}
                </div>
              </div>
              <div className="mt-10 text-center">
                <button type="submit" className="bg-[#F16429] text-white px-16 py-2 rounded-md mb-5">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
