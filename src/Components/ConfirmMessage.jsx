import React from 'react';
import { useState } from 'react';

const ConfirmMessage = ({ show, onYes, onCancel,onSuccessClose}) => {
  const [showSuccess,setShowSuccess] = useState(false);
  if (!show && !showSuccess) return null;

  const handleYes = () => {
    setShowSuccess(true);
    setTimeout(() => {
      if (onYes) onYes();
    }, 300); 
  };

  const successPopUp =()=>{
    setShowSuccess(false);
    if (onSuccessClose) onSuccessClose();
  }
  return (
    <>
    {show && !showSuccess && (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='fixed inset-0 bg-black opacity-50'></div>
      <div className='bg-white p-6 rounded-lg shadow-lg z-51 relative'>
        <h2 className='text-md mb-5'>Are you sure you want to submit the form?</h2>
        <div className='flex gap-4 justify-center'>
          <button onClick={handleYes} className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>Yes</button>
          <button onClick={onCancel} className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700'>Cancel</button>
        </div>
      </div>
    </div>
    )}
    {showSuccess && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='fixed inset-0 bg-black opacity-50'></div>
          <div className='bg-white p-6 rounded-lg shadow-lg z-51 relative'>
            <h2 className='text-md mb-5'>Successfully submitted</h2>
            <div className='flex justify-center'>
              <button onClick={successPopUp} className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 '>Ok</button>
            </div>
          </div>
        </div>
    )}
    </>
  );
};

export default ConfirmMessage;
