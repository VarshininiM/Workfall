import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoader } from './LoaderContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginBody = () => {
  // const location = useLocation();

  // const queryParams = new URLSearchParams(location.search);
  // const emailFromQuery = queryParams.get('email');
  // const passwordFromQuery = queryParams.get('password');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {showLoader,hideLoader} = useLoader();
  const navigate = useNavigate();

  // autofill email and password in sign in form

  // useEffect(() => {
  //   if (emailFromQuery) {
  //     setEmail(emailFromQuery);
  //   }
  //   if (passwordFromQuery) {
  //     setPassword(passwordFromQuery);
  //   }
  // }, [location.search]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = {};
//     if (emailFromQuery !== email || passwordFromQuery !== password) {
//       setIsLoggedIn(false)
//       errors.form = 'Invalid email or password'; // Set general form error
//     }
//     setFormErrors(errors); 
//     if (Object.keys(errors).length === 0) {
//       setIsLoggedIn(true);
//     }
// };

  // modified the validate function
    const validate = () => {
      // const errors = {};
      const savedEmail = localStorage.getItem('email');
      const savedPassword = localStorage.getItem('password');
      return savedEmail === email && savedPassword === password;
    };

    const handleSubmit = async(e) => {
      e.preventDefault();
      showLoader();
      try {
        if (validate()) {
          setIsLoggedIn(true);
          localStorage.setItem('isLoggedIn', 'true');
          toast.success("Sign In Successfully",{autoClose:1000});
          navigate('/dashboard');
        }
      else{
        setIsLoggedIn(false);
        hideLoader(true);
        localStorage.setItem('isLoggedIn', 'false'); // Clear authentication flag
        toast.error("Invalid email or password",{autoClose:2000});
      }
    } finally{
      setTimeout(() => {
        hideLoader();
      }, 1000);
     
    }
    };
    // Updated the handleSubmit function
    // const handleSubmit = async(e) => {
    //   e.preventDefault();
    //   console.log("showing loader");
    //   showLoader();

    //   try {
    //     if (validate()) {
    //       setIsLoggedIn(true);
    //       localStorage.setItem('isLoggedIn', 'true');
    //       toast.success("Sign In Successfully",{autoClose:1000});
    //       navigate('/dashboard');
    //     }
    //   else{
    //     setIsLoggedIn(false);
    //     localStorage.setItem('isLoggedIn', 'false'); // Clear authentication flag
    //     toast.error("Invalid email or password");
    //   }
    // } finally{
    //   console.log("hiding loader");
      
    //   hideLoader();
    // }
    // };
    
  // const handleBlur = (e) => {
  //   const { name, value } = e.target;
  //   const errors = { ...formErrors };
  // };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-[#FBF7F4] flex justify-center items-center md:h-auto ">
        <div className="max-w-md">
          <img src="/images/Group 26066.png" alt="Illustration" className="w-full h-auto mt-10" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="max-w-md lg:w-full space-y-8 max-xs:px-[20px]">
          <h1 className="text-2xl font-bold mt-10 font-karla">Welcome back! Sign in to access your Workfall account.</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mt-7 mr-2 cursor-pointer">
              <div className="bg-[#F0F7FD] cursor-pointer font-Roboto flex justify-center p-2 rounded-md border-2 border-[#0185FF33] items-center">
                <img src="images/Frame 241.png" className="w-6 h-6 mr-3" alt="group" />
                <p>Sign up with Google</p>
              </div>
            </div>
            <div className="flex font-karla">
              <p className="text-[#174168]">Don't have a Workfall account?</p>
              <p className="text-[#F16429] ml-1 cursor-pointer" onClick={() => navigate('/signUp')}>SignUp</p>
            </div>
            <div className="flex items-center text-sm">
              <hr className="flex-grow border border-gray-400" />
              <span className="px-4 bg-white text-[#174168]">or</span>
              <hr className="flex-grow border border-gray-400" />
            </div>
            {formErrors.form && <p className="text-red-500 text-sm mt-2 text-center">{formErrors.form}</p>} 
            {/* {isLoggedIn && <p className='text-green-600 text-center'>logged in Successfully</p>} */}
            <div className='flex gap-4'>
              <div className='w-full'>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // onBlur={handleBlur}
                className="rounded block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              </div>
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // onBlur={handleBlur}
                className="rounded block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
              {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
            </div>
            <div className='ml-[320px] text-[#FF6745] cursor-pointer hover:underline'>
              <p onClick={() => navigate('/forgotpassword')}>Forgot Password?</p>
            </div>
            <div>
              <button
                type="submit"
                className={` mb-20 w-full px-4 py-2 text-[#FFFFFF] font-medium font-OpenSans rounded-md bg-[#FF6745]` }
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginBody