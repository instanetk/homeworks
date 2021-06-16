import React from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import img from '../../services/imgService';
import StepTwo from './tour/step2';

const SecondaryHero = ({ text1, text2, color, image, tagline }) => {
  return (
    <div>
      <div className="px-4 h-84 sm:block sm:relative sm:bg-white sm:overflow-hidden md:-mt-1 select-none">
        <div className="max-w-7xl mx-2.5 xl:max-w-6xl">
          <div className="relative z-10 sm:bg-white sm:pb-16 md:pb-20 lg:max-w-sm lg:w-full lg:pb-8 xl:pb-15 xl:max-w-2xl">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-84 w-48 text-white transform translate-x-1/2 sm:translate-x-2/4"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

            <main className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:relative lg:z-20 lg:mt-20 lg:px-8">
              <div className="sm:text-center lg:text-left xl:py-6 sm:ml-5 sm:-mt-8">
                <div className="hidden sm:block mt-4 text-base text-gray-500 sm:-mt-6 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  <h1 className="hidden sm:block sm:mt-0 sm:mb-0 text-3xl leading-7 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline text-white sm:text-black">{text1}</span>
                    <span className={`block ${color} xl:inline`}>{text2}</span>
                  </h1>
                  <span className="mt-10">{tagline}</span>
                </div>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    {/* <a
      href="#"
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
      Live demo
      </a> */}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        {/* <div className="sm:inset-y-0 sm:bottom-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 xl:-mr-10">
          <img className="rounded-sm shadow object-cover w-full h-60 sm:h-full" src={img[image]} alt="" />
        </div> */}
        <CloudinaryContext
          cloudName="dgt2j8jc0"
          className="sm:inset-y-0 sm:bottom-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 xl:-mr-10">
          <Image publicId={img[image]} className="rounded-lg shadow object-cover w-full h-72 sm:h-full">
            <Transformation width="900" quality="80" crop="fill" />
          </Image>
        </CloudinaryContext>
        <h1 className="-mt-16 ml-4 sm:hidden sm:mt-0 sm:mb-0 text-3xl leading-7 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline text-white sm:text-black text-shadow-xl ">{text1}</span>
          <span className="block text-white sm:text-indigo-600 xl:inline text-shadow-xl ">{text2}</span>
        </h1>
      </div>
      <StepTwo />
    </div>
  );
};

export default SecondaryHero;
