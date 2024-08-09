import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { toast } from 'react-toastify';
import {useLoader} from './LoaderContext';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    terms: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const {showLoader,hideLoader} = useLoader();

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  // field validation
  const handleBlur = (e) => {
    const { name } = e.target;
    validateField(name);
  };

  // validate specific field and updates formErrors
  const validateField = (fieldName) => {
    const errors = { ...formErrors };

    switch (fieldName) {
      case 'firstName':
        if (formValues.firstName.length < 6 || formValues.firstName.length > 12) {
          errors.firstName = 'First name contain 6-12 characters';
        } else {
          delete errors.firstName;
        }
        break;
      case 'lastName':
        if (formValues.lastName.length < 6 || formValues.lastName.length > 12) {
          errors.lastName = 'Last name contain 6-12 charecters';
        } else {
          delete errors.lastName;
        }
        break;
      case 'email':
        if (!emailRegex.test(formValues.email)) {
          errors.email = 'Email is not valid';
        } else {
          delete errors.email;
        }
        break;
      case 'password':
        if (!passwordRegex.test(formValues.password)) {
          errors.password='Password must contain 1 letter, 1 digit, and 1 special character';
        } else {
          delete errors.password;
        }
        break;
      case 'terms':
        if (!formValues.terms) {
          errors.terms = 'You must agree to the terms';
        } else {
          delete errors.terms;
        }
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  // validates the entire form and updates the formErrors
    const validate = () => {
    const errors = {};

    if (formValues.firstName.length < 6 || formValues.firstName.length > 12) {
      errors.firstName = 'First name must be between 4 and 12 characters';
    }
    if (formValues.lastName.length < 6 || formValues.lastName.length > 12) {
      errors.lastName = 'Last name must be between 4 and 12 characters';
    }
    if (!emailRegex.test(formValues.email)) {
      errors.email = 'Email is not valid';
    }
    if (!passwordRegex.test(formValues.password)) {
      errors.password = 'Password must be at least 8 characters long, include one letter, one number, and one special character';
    }
    if (!formValues.terms) {
      errors.terms = 'You must agree to the terms';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (validate()) {
      showLoader();
      try{
        await new Promise((resolve)=>setTimeout(resolve,2000));
        toast.success('SignUp Successfully',{
          autoClose: 1000, 
        });
        navigate('/login',{replace:true});
        
      // navigate login page using local storage
      localStorage.setItem('firstName', formValues.firstName);
      localStorage.setItem('lastName', formValues.lastName);
      localStorage.setItem('email', formValues.email);
      localStorage.setItem('password', formValues.password);

      console.log('Saving to localStorage:', {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        password: formValues.password,
      });
      // navigate login page using query params
      // navigate('/login?email=' + formValues.email + "&password=" + formValues.password);
    } catch(error){
    } finally{
      hideLoader();
    }
  }
};

  const isFormValid = Object.keys(formErrors).length === 0 && formValues.terms;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-[#FBF7F4] flex justify-center items-center md:h-[100vh] h-auto">
        <div className="max-w-md p-5">
          <img src="/images/logo (2).png" alt="Illustration" className="w-[500px] h-[400px] mt=[70px] mb-[150px] md:ml[45px] " />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center p-5 md:p-0">
        <div className="max-w-md w-auto lg:w-full max-xs:px-[20px]">
          <h1 className="text-2xl font-karla font-bold mt-10 mb-2">Take your career to new heights!</h1>
          <div className="flex font-karla">
            <p className="text-[#174168]">Already have an account? </p>
            <p className="text-[#F16429] ml-1 cursor-pointer" onClick={() => navigate('/login')}>Login</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mt-7 mr-2 cursor-pointer">
              <div className="bg-[#F0F7FD] cursor-pointer font-Roboto flex justify-center p-2 rounded-md border-2 border-[#0185FF33] items-center">
                <img src="images/Frame 241.png" className="w-6 h-6 mr-3" alt="group" />
                <p>Sign up with Google</p>
              </div>
            </div>
            <div className="flex items-center text-sm m-0">
              <hr className="flex-grow border border-gray-400" />
              <span className="px-4 bg-white text-[#174168]">or</span>
              <hr className="flex-grow border border-gray-400" />
            </div>
            <div className="flex gap-4 pb-2 m-0">
              <div className='w-full relative'>
              <input
                name="firstName"
                type="text"
                required
                value={formValues.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="rounded block w-full px-3 py-2 border border-gray-300 focus:outline-none rounded-t-md sm:text-sm"
                placeholder="First Name"
              />
              {formErrors.firstName && <p className="text-red-500 text-sm absolute top-full left-0">{formErrors.firstName}</p>}
              </div>
              <div className='w-full relative'>
              <input
                name="lastName"
                type="text"
                required
                value={formValues.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="rounded block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm"
                placeholder="Last Name"
              />
              {formErrors.lastName && <p className="text-red-500 text-sm absolute top-full left-0">{formErrors.lastName}</p>}
              </div>
            </div>
            <div className='relative'>
              <input
                name="email"
                type="email"
                required
                value={formValues.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="rounded block font-OpenSans w-full px-3 py-2 mb-[30px] border border-gray-300 focus:outline-none sm:text-sm"
                placeholder="XYZ@gmail.com"
              />
              {formErrors.email && <p className="text-red-500 text-sm absolute top-full left-0">{formErrors.email}</p>}
            </div>
            
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formValues.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="rounded block w-full px-3 py-2 mb-[30px] border border-gray-300 rounded-b-md focus:outline-none sm:text-sm"
                placeholder="Password"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                {showPassword ? <BsEyeSlash /> : <BsEye />}
              </div>
              {formErrors.password && <p className="text-red-500 text-sm absolute left-0 top-full">{formErrors.password}</p>}
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={formValues.terms}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-[#174168] font-Roboto">
                I agree with Workfall's <a href="#" className="font-bold hover:text-[#117ee4]">Terms of Services</a> and <a href="#" className="font-bold hover:text-indigo-500">Privacy Policy</a>
              </label>
            </div>
            {formErrors.terms && <p className="text-red-500 text-sm">{formErrors.terms}</p>}
            <div>
              <button
                type="submit"
                className={`mb-20 w-full font-OpenSans py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#FFFFFF] bg-[#FF6745] focus:outline-none focus:ring-2 focus:ring-offset-2 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!isFormValid}
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

