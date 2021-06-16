import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import MenuItem from './menuItem';

const Menu = ({ isOpen, setOpen }) => {
  const { t } = useTranslation();
  return (
    <div id="submenu" className={`${isOpen ? '' : 'hidden'} sm:mt-2 sm:block `}>
      <div className="w-full flex flex-nowrap justify-between px-4 py-3 bg-gray-800 sm:bg-transparent sm:flex-col sm:flex-shrink-0">
        <NavLink className="menu" to="/services">
          <MenuItem label={t('menu.services')} />
        </NavLink>
        <NavLink className="menu" to="/schedule">
          <MenuItem label={t('menu.schedule')} />
        </NavLink>

        {/* <NavLink className="menu" to="/pinboard">
          <MenuItem label={t('menu.pinboard')} />
        </NavLink> */}
        <NavLink className="menu" to="/testimonials">
          <MenuItem label={t('menu.testimonials')} />
        </NavLink>
        <NavLink className="menu" to="/login" onClick={() => setOpen(!isOpen)}>
          <MenuItem label={t('menu.account')} />
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
