import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Menu from './menu';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <header className="bg-gray-900 items-center sm:bg-gray-800 sm:w-70 sm:flex-shrink-0">
        <div className="sm:fixed sm:flex-col flex-shrink-0">
          <div className="sm:flex-col sm:py-1 sm:bg-gray-900 ">
            <div id="brand" className="flex justify-between cursor-pointer">
              <Link to="/">
                <div className="sm:flex-col sm:w-70">
                  <div className="px-4 py-4 flex items-baseline select-none">
                    <span className="text-5xl select-none">🏡</span>
                    <h1 className="ml-2 mb-3 text-3xl items-baseline text-white font-sans tracking-wide font-bold  select-none title">
                      {t('navBar.app')}
                    </h1>
                    <sup className="font-light text-gray-300 px-1">&trade;</sup>
                  </div>
                  <div className="flex-col ml-7 sm:ml-6 -mt-4 pb-2 sm:-mt-4">
                    <span className="hidden text-xs text-gray-500 font-normal uppercase select-none">
                      {t('navBar.company')}
                    </span>
                  </div>
                </div>
              </Link>

              <div id="control" className="flex mr-4 items-center sm:hidden">
                <button
                  type="button"
                  onClick={() => setOpen(!isOpen)}
                  className="px-0 focus:outline-none focus:shadow-ouline">
                  <svg
                    className="h-6 w-6 fill-current text-white hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      className={isOpen ? 'hidden' : ''}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path
                      className={isOpen ? '' : 'hidden'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="sm:-ml-4">
            <Menu isOpen={isOpen} setOpen={setOpen} />
          </div>
        </div>
      </header>
      <div className="bg-purple-400 p-px flex sm:hidden"></div>
    </React.Fragment>
  );
};

export default NavBar;
