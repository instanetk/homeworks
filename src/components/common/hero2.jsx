import React from 'react';
// import { useTranslation } from 'react-i18next';
import img from '../../services/imgService';

const Hero2 = () => {
  // const { t } = useTranslation();

  return (
    <div className="mt-96 bg-white h-full">
      <div className="h-96 -mt-84 py-28 px-14">
        <div className="w-1/3 flex text-left">
          <h1 className="text-6xl text-black font-bold">
            <span>Landscape</span>
            <span className="text-purple-700"> & Irrigation</span>
          </h1>
        </div>
      </div>
      <div>
        <div className="sm:inset-y-0 sm:bottom-0 lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/2 xl:mr-28 h-screen">
          <svg
            className="hidden lg:block absolute right-full inset-y-0 h-full w-48 text-white transform translate-x-1/2 sm:translate-x-2/4"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <img className="rounded-sm shadow object-cover w-full h-full" src={img.catLandscaping} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
