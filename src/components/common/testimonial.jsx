import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Review from '../common/review';
import TestimonyThanks from './testimonyThanks';
import { getTestimonials } from '../../services/testimonialService';

const Testimonial = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [submitted, setState] = useState(false);
  const [testimony, setTestimony] = useState({});

  const sayThanks = () => {
    setState(!submitted);
  };

  const show = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      let { data } = await getTestimonials();
      setTestimony(data);
    };
    fetchTestimonials();
  }, []);

  // console.log(testimony);

  let published = [];

  for (let i = 0; i < testimony.length; i++) {
    if (testimony[i].published) {
      published.push(testimony[i]);
    }
  }

  let display = published[Math.floor(Math.random() * published.length)] || {};

  // console.log(display);
  return (
    <div>
      <div className={visible ? '' : 'hidden'}>
        {submitted ? <TestimonyThanks onClose={show} /> : <Review onClose={show} sayThanks={sayThanks} />}
      </div>

      <div id="testimony" key={display._id} className="mt-8 flex-col bg-white p-4 rounded-lg shadow-md select-none">
        <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider hidden">Testimonial</span>
        <h3 className="font-serif italic text-2xl text-gray-800">&ldquo;{display.testimonial}&rdquo;</h3>
        <div className="flex justify-end items-baseline p-2 text-sm text-gray-800">
          — {display.name}, <span className="flex ml-2 items-baseline text-xs">{display.city}</span>
        </div>
      </div>

      <div className="flex justify-end mt-1 mr-1">
        <span className="text-lg" aria-label="pencil emoji">
          ✏️
        </span>
        <div className="ml-1">
          <span
            className="font-light text-left text-sm text-indigo-600 cursor-pointer border border-dotted border-t-0 border-l-0 border-r-0 border-indigo-600"
            onClick={() => show()}>
            {t('testimonial.write')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
