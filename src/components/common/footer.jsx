import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/bg.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col justify-center text-gray-100 bg-gray-800 sm:py-5 bgfloor">
      <div className="sm:flex">
        <div className=" sm:mx-36 mx-4 mt-8 sm:mt-8 rounded-lg text-md px-4 sm:px-20 py-6 text-justify bg-gray-900 bg-opacity-70 select-none">
          <b>Hours of operation:</b> <br />
          <span>Mon - Fri 8:00am to 5:00pm</span>
          <br /> <br />
          <b>Saturday & Sunday</b>
          <br />
          <span className="text-justify text-sm">
            You may still call or text and leave a detailed message. If it's an emergency, we may get back to you right
            away. If not, then we will contact you on the next business day.
          </span>
          <div className="text-xl mt-4 text-center">
            <span>407-801-3447</span>
            <br />
            <span>
              <a href="mailto:main@generalglobalservices.com?subject=GGS Inquiry">main@generalglobalservices.com</a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="h-24 mt-4">
          <div className="text-xs text-center my-2">
            <a href="/terms" className="text-blue-300 px-2 hover:text-blue-500 select-none">
              {t('footer.terms')}
            </a>
            <a href="/privacy" className="text-blue-300 px-2 hover:text-blue-500 select-none">
              {t('footer.privacy')}
            </a>
            <a href="/legal" className="hidden text-blue-500 px-2 hover:text-blue-700 select-none">
              {t('footer.legal')}
            </a>
            <a href="/providers" className="hidden text-blue-500 px-2 hover:text-blue-700 select-none">
              {t('footer.providers')}
            </a>
          </div>
          <div className="text-xs text-center select-none">
            <span className="hidden">
              HomeWorks<sup>&trade;</sup> is a registered trademark.
            </span>
            {t('footer.company')} &bull; &copy; {new Date(Date.now()).getFullYear()}
          </div>
          <div className="text-xs text-center select-none"> {t('footer.made')}</div>
          <div className="text-xs text-center opacity-20 select-none justify-center self-center">
            <a href="http://wavefunction.ai" target="_blank" rel="noreferrer">
              <span className=" italic font-serif mr-1">(x)</span>
              <span className="">wavefunction</span>
            </a>
            <span className="hidden flex-col text-xs text-white bg-black opacity-20 rounded-sm px-1" title="app by">
              app by
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
