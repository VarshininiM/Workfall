import React from 'react';
import './style.css'; // Ensure this file includes the above CSS rules

const SPLoader = () => {
  return (
    <div className="spinner-overlay">
      <img src='/images/spinner-loading.png' alt='Loading...' className="spinner" />
    </div>
  );
};

export default SPLoader;
