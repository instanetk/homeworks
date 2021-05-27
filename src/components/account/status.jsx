import React from 'react';

const Status = ({ status, onStatus, id }) => {
  let color;
  let text;
  let hover;
  switch (status) {
    case 'active':
      color = 'bg-green-200 border border-green-400 hover:border-green-400';
      hover = 'hover:bg-green-300';
      text = 'text-green-800';
      break;
    case 'contacted':
      color = 'bg-blue-200 border border-blue-400 hover:border-blue-400';
      hover = 'hover:bg-blue-300';
      text = 'text-blue-800';
      break;
    case 'visited':
      color = 'bg-pink-200 border border-pink-400 hover:border-pink-400';
      hover = 'hover:bg-pink-300';
      text = 'text-pink-800';
      break;
    case 'completed':
      color = 'bg-yellow-200 border border-yellow-400 hover:border-yellow-400';
      hover = 'hover:bg-yellow-300';
      text = 'text-yellow-800';
      break;
    default:
      color = 'bg-green-200 border border-green-400 hover:border-green-400';
      hover = 'hover:bg-green-300';
      text = 'text-green-800';
  }

  return (
    <div className="select-none cursor-pointer w-24" onClick={() => onStatus(id)}>
      <span
        className={`${hover} rounded-full relative inline-block px-3 py-1 w-24 font-semibold text-center leading-tight`}>
        <span aria-hidden="true" className={`absolute inset-0 ${color} opacity-50 rounded-full`}></span>
        <span className={`relative ${text}`}>{status}</span>
      </span>
    </div>
  );
};

export default Status;
