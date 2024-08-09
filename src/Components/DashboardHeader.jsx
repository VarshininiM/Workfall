import React, { useState,useEffect } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logout } from './Auth';
import { useUser } from './userContext';


const DashboardHeader = () => {
  const [userName,setUserName]=useState('');
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate=useNavigate();
  const {userImage} = useUser();

  useEffect(() => {
    // Retrieve the fullName from localStorage
    const fullName=localStorage.getItem('fullName');
    setUserName(fullName);
  }, []);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    toast.success('Successfully logged out!');
    navigate('/login');
  };

  return (
    <div>
      <header className="bg-white">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between max-w-7xl">
          <div className="flex items-center space-x-2">
            <img src="/images/workfall_logo.png" alt="Logo" className='w-[50px] h-[45px]' />
            <p className="text-[#F16429] font-medium text-lg">Workfall</p>
          </div>
          <nav className="text-[#A7A7A7] font-robot hidden md:flex space-x-4">
            <Link to='/dashboard' className="hover:text-gray-700">DASHBOARD</Link>
            <Link to='/associates' className="hover:text-gray-700">ASSOCIATES</Link>
            <Link to='/workoffers' className="hover:text-gray-700">WORK OFFERS</Link>
            <Link to='/workstreams' className="hover:text-gray-700">WORKSTREAMS</Link>
            <Link to='/earnings' className="hover:text-gray-700">EARNING</Link>
            <Link to='/reviews' className="hover:text-gray-700">REVIEWS</Link>
            <Link to='/clients' className="hover:text-gray-700">CLIENTS</Link>
            <Link to='/calls' className="hover:text-gray-700">CALLS</Link>
            <Link to='/chats' className="hover:text-gray-700">CHATS</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <img src="/images/notificationicon.png" alt='notification' className="w-8 h-8" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"></span>
            </button>
            <div className="relative">
              <div className="flex items-center space-x-2 cursor-pointer" >
                <img src={userImage || '/images/Ellipse 95.png'} alt="Profile" className="w-8 h-8 rounded-full" onClick={toggleProfileMenu} />
                <div>
                  <span className="w-[500] text-sm leading-5">WELCOME</span>
                  <span className="block text-[#F16429] text-sm font-semibold leading-5">{userName}</span>
                </div>
              </div>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 flex justify-center items-center">
                  <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;

