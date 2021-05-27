import { useEffect } from 'react';
import auth from '../services/authService';

const Logout = () => {
  useEffect(() => {
    auth.logout();
    window.location = '/';
  });
  return <div className="bg-white h-screen"></div>;
};

export default Logout;
