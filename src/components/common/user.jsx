import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Star } from '../../assets/svg/star.svg';

const User = ({ user, userCount }) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      {user && (
        <div className="hidden sm:block fixed right-6 bottom-6 sm:opacity-100 sm:left-6 sm:bottom-2 w-56">
          <div className="flex justify-between select-none">
            <div className="flex items-center text-xs text-white">
              <span>{user.name}</span>{' '}
              <span className="ml-1">{user.isAdmin ? <Star className="h-3 w-3 text-yellow-400" /> : ''}</span>
            </div>
            <Link to="/logout">
              <div className="items-center text-xs text-white">{t('user.logout')}</div>
            </Link>
          </div>
        </div>
      )}

      {/* <div className="sm:block fixed right-6 bottom-6 sm:opacity-100 sm:left-6 sm:bottom-8 w-56">
        <p className="text-xs text-gray-500 uppercase">{userCount} users online</p>
      </div> */}
    </React.Fragment>
  );
};

export default React.memo(User);
