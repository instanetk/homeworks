import React from 'react';
import '../styles/bg.css';

const NotFound = () => {
  return (
    <main>
      <div className="flex justify-center items-center bg-gray-700 h-screen select-none">
        <div className="flex-col justify-center -mt-48 sm:mt-0">
          <h1 className="text-white text-9xl text-center">404</h1>
          <h2 className="text-white text-2xl">This page could not be found.</h2>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
