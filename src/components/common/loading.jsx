import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center select-none">
      <div className="h-16 w-16 flex items-center justify-center align-middle">
        <span className="flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500 opacity-5"></span>
        </span>
      </div>
      <span className="text-xs text-gray-400 mt-12 -ml-14">Loading...</span>
    </div>
  );
};

export default Loading;
