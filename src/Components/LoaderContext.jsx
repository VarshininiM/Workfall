import React, { createContext, useState, useContext } from 'react';

// Create a Context for the loader
const LoaderContext = createContext();

// Create a Provider component
export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // Function to show loader
  const showLoader = () => setLoading(true);

  // Function to hide loader
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
      {children}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <img src='/images/spinner-loading.png' alt='Loading...' className="w-16 h-16 animate-spin" />
        </div>
      )}
    </LoaderContext.Provider>
  );
};

// Custom hook for using the loader context
export const useLoader = () => useContext(LoaderContext);
