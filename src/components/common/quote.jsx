import React from 'react';

const Quote = () => {
  // Login page quote generator
  const quotes = [
    'Home is waiting...',
    'Home awaits...',
    'Home is where the heart is...',
    "There's no place like home...",
    'Mi casa es tu casa...',
    'Home sweet home!',
    'Hogar dulce hogar...',
    'Welcome home!',
  ];

  const slogan = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let chosen = getRandomInt(8);
    return quotes[chosen];
  };

  let quote = slogan();

  return <span className="font-serif italic text-lg">{quote}</span>;
};

// Use of React.memo to wrap the class export will prevent component from being re-rendered each time the parent component changes state.
export default React.memo(Quote);
