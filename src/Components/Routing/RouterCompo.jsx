import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header';
import SignUpForm from '../SignUpForm';
import LoginForm from '../LoginForm';
import ForgotForm from '../ForgotForm';
import Footer from '../Footer';
import LoginHeader from '../LoginHeader';
import { useLocation } from 'react-router-dom';
import Dashboard from '../Dashboard';
import DashboardHeader from '../DashboardHeader';

import PrivateRoute from '../PrivateRoute';
import { isAuthenticated } from '../Auth';
import { UserProvider } from '../userContext';
import WorkOffers from '../WorkOffers';
import WorkStreams from '../WorkStreams';
import Earning from '../Earning';
import Clients from '../Clients';
import TableData from '../TableData';
import RegistrationForm from '../RegistrationForm';


function RouterCompo() {
  const location=useLocation();
  const navigate=useNavigate();

  useEffect(()=>{
    if(location.pathname === '/dashboard' && !isAuthenticated()){
      navigate('/login');
    }
    if(location.pathname === '/login' && isAuthenticated()){
      navigate('/dashboard');
    }
  },[location.pathname,navigate]);

  return (
    <UserProvider>
    <div>
      {(location.pathname==="/login") && <LoginHeader />}
      {((location.pathname==="/signUp" || location.pathname==="/forgotpassword")) && <Header /> }
      {((location.pathname !== "/login") && (location.pathname !=="/signUp") && (location.pathname !== "/forgotpassword")) && <DashboardHeader />}

      <Routes>
        <Route path="/" element={<Navigate to="/signUp" />}/>
        <Route path="/signUp" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/forgotpassword' element={<ForgotForm />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path='/workoffers' element={<WorkOffers />} />
        <Route path='/workstreams' element={<WorkStreams />} />
        <Route path='/earnings' element={<Earning />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/tabledata' element={<TableData />} />
        <Route path='/registrationform' element={<TableData />} />
      </Routes>
      <Footer />
    </div>
    </UserProvider>
  )
}

export default RouterCompo
