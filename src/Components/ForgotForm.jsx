import React,{Component, useState} from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [formPasswords, setFormPasswords] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState({
        old: false,
        new: false,
        confirm: false
    });

    const loginPassword=localStorage.getItem('password');
    const [isFormValid, setIsFormValid] = useState(false);

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     toast.success('Password Successfully Updated');
    // }
    const handleChange = e => {
        const { name, value } = e.target;
        setFormPasswords(prev => ({ ...prev, [name]: value }));

        const errors = {...formErrors};
        if (name === 'oldPassword' && loginPassword !== value) {
            errors.oldPassword = 'Please enter correct old password';
        } else if (name === 'newPassword' && formPasswords.oldPassword === value) {
            errors.newPassword = 'Old Password and New Password should be different';
        } else if (name === 'confirmPassword' && formPasswords.newPassword !== value) {
            errors.confirmPassword = 'New Password and Confirm Password should match';
        } else {
            delete errors[name];
        }
        setFormErrors(errors);
        validateForm(errors);
    };

    const validateForm=(errors)=>{
        // The form is valid if there are no errors and all fields are filled
        setIsFormValid(
            Object.keys(errors).length === 0 &&
            formPasswords.oldPassword &&
            formPasswords.newPassword &&
            formPasswords.confirmPassword
        );
    }

    const handleSubmit = e => {
        // console.log(formPasswords.newPassword);
        // e.preventDefault();
        if (isFormValid) {
            toast.success('Password Successfully Updated');
            navigate('/login')
        } else {
            toast.error('Please correct the errors in the form');
        }
        localStorage.setItem('password',formPasswords.newPassword)
    };

    const toggleVisibility = field => {
        setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
    };

    return (
        <>
        <form className="block" onSubmit={handleSubmit}>
            {['oldPassword', 'newPassword', 'confirmPassword'].map((field, idx) => {
                const isVisible = showPassword[field.replace('Password', '')];
                return (
                    <div key={idx} className="mb-4">
                        <label htmlFor={field} className="text-sm block mb-3 font-semibold">
                            {idx === 0 ? 'Old Password' : idx === 1 ? 'New Password' : 'Confirm New Password'}
                        </label>
                        <div className="relative">
                            <input
                                type={isVisible ? 'text' : 'password'}
                                name={field}
                                value={formPasswords[field]}
                                onChange={handleChange}
                                className="text-gray-600 block mb-3 border border-gray-300 rounded-md w-full pl-4 h-12"
                                placeholder="Password"/>
                            <div
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => toggleVisibility(field.replace('Password', ''))}>
                                {isVisible ? <FaEyeSlash/> : <FaEye/>}
                            </div>
                        </div>
                        {formErrors[field] && <p className="text-red-500 text-sm">{formErrors[field]}</p>}
                    </div>
                );
            })}
            <div className="pt-10">
                <button type="submit" className={`bg-[#FF6745] h-12 w-full rounded-md text-[#FFFFFF] font-bold  ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!isFormValid} >
                    Update
                </button>
            </div>
        </form>
        </>
    );
};

const ForgotForm = () => {
  return (
    <>
    <div className="grid  md:grid-cols-2 md:flex items-center max-[1024px]:justify-between ">
        <div className="bg-[#FBF7F4] flex h-[620px] w-[100%] justify-center">
            <img src="/images/logo (2).png" alt='group' className="w-[500px] h-[400px] mt-[70px] mb-[150px] md:ml-[45px]"/>
        </div>
        <div className="h-[620px]  w-[100%] justify-center ">
            <div className="md:px-[140px] px-[100px]">
                <div className="font-bold text-3xl mt-[70px] mb-7">
                    <p>Take your career to new heights!</p>
                </div>
                <Login />
            </div>
        </div>
    </div>
    </>
  )
}
export default ForgotForm
