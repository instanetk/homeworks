import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Icon } from '../../assets/svg/translate.svg';

const Translate = () => {
  const [isOpen, setOpen] = useState(false);

  const { i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
    setOpen(!isOpen);
  }

  return (
    <div
      className={`${
        isOpen ? 'opacity-95' : 'opacity-40'
      } fixed right-6 bottom-6 sm:opacity-100 sm:right-2 sm:bottom-2`}>
      <div className="select-none">
        <div className="flex items-center">
          <Icon onClick={() => setOpen(!isOpen)} className="flex text-white h-10 w-8 bg-purple-900 rounded px-1" />
          <div className={isOpen ? 'flex' : 'hidden'}>
            <button
              type="button"
              onClick={() => handleClick('es')}
              className="bg-purple-800 hover:bg-purple-600 text-white ml-2 p-2 rounded">
              Español
            </button>
            <button
              type="button"
              onClick={() => handleClick('en')}
              className="bg-purple-800 hover:bg-purple-600 text-white ml-2 p-2 rounded">
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translate;
