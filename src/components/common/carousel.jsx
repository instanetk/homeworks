import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Hero from './hero';
// import Hero2 from './hero2';

const slides = () => (
  <Carousel
    autoPlay={false}
    interval={1000}
    showIndicators={false}
    infiniteLoop={true}
    showArrows={false}
    showThumbs={false}>
    <Hero />
    {/* <Hero2 /> */}
  </Carousel>
);

export default slides;
