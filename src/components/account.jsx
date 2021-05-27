import React from 'react';
import Admin from './account/admin';
// import AppointmentCard from './account/appointmentCard';

const Account = ({ user, socket }) => {
  // console.log(user);
  // Create a User component to wrap AppointmentCard
  return <main className="min-h-screen">{user.isAdmin ? <Admin socket={socket} /> : '<AppointmentCard />'}</main>;
};

export default Account;
