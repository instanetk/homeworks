import React from 'react';
import { ReactComponent as Clipboard } from '../../assets/svg/clipboard.svg';
import { ReactComponent as Clock } from '../../assets/svg/clock.svg';
import { ReactComponent as Heart } from '../../assets/svg/heart.svg';
import { ReactComponent as User } from '../../assets/svg/user.svg';
import { ReactComponent as Ban } from '../../assets/svg/ban.svg';
import { ReactComponent as Document } from '../../assets/svg/document.svg';

const MenuItem = ({ label }) => {
  const icon = (label) => {
    let comp;

    switch (label) {
      case 'Schedule':
      case 'Horarios':
        comp = <Clock className="h-6 w-6 sm:block flex-shrink-0" />;
        break;
      case 'Services':
      case 'Servicios':
        comp = <Clipboard className="h-6 w-6 sm:block flex-shrink-0" />;
        break;
      case 'Pinboard':
      case 'Inspiración':
        comp = <Heart className="h-6 w-6 sm:block flex-shrink-0" />;
        break;
      case 'Testimonials':
      case 'Testimonios':
        comp = <Document className="h-6 w-6 sm:block flex-shrink-0" />;
        break;
      case 'My account':
      case 'Iniciar sesión':
        comp = <User className="h-6 w-6 sm:block flex-shrink-0" />;
        break;
      default:
        comp = <Ban className="h-6 w-6 sm:block flex-shrink-0" />;
    }
    return comp;
  };

  return (
    <React.Fragment>
      {icon(label)}
      <span
        className={`mt-2 text-xs uppercase opacity-80 font-semibold tracking-wider content-center sm:mt-0 sm:mx-4 sm:items-center sm:text-base sm:normal-case`}>
        {label}
      </span>
    </React.Fragment>
  );
};

export default MenuItem;
