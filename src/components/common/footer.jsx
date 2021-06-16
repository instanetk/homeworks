import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/bg.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col justify-center text-gray-100 bg-gray-800 sm:py-5 bgfloor">
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
