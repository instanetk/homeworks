import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SecondaryHero from '../common/secondaryHero';
import { getTestimonials, hideTestimonial } from '../../services/testimonialService';
import { useTranslation } from 'react-i18next';
import DeleteTestimonial from './delete';
import Review from '../common/review';
import TestimonyThanks from '../common/testimonyThanks';

const Testimonials = ({ user }) => {
  const { t } = useTranslation();
  const [testimony, setTestimony] = useState([]);
  const [visible, setVisible] = React.useState(false);
  const [writeVisible, setWriteVisible] = useState(false);
  const [submitted, setState] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      let { data } = await getTestimonials();
      setTestimony(data);
    };
    fetchTestimonials();
  }, []);
  //   console.log(testimony);

  const onCancel = () => {
    setVisible(!visible);
  };

  const sayThanks = () => {
    setState(!submitted);
  };

  const show = () => {
    setWriteVisible(!writeVisible);
  };

  const togglePublish = async (id) => {
    hideTestimonial(id);
    window.location = '/testimonials';
  };

  const style = {
    hero: '-mt-6 sm:mt-0',
  };

  return (
    <React.Fragment>
      <div className={writeVisible ? '' : 'hidden'}>
        {submitted ? <TestimonyThanks onClose={show} /> : <Review onClose={show} sayThanks={sayThanks} />}
      </div>
      <main>
        <div id="hero" className={style.hero}>
          <SecondaryHero
            text2={t('testimonials.h1')}
            tagline={t('testimonials.tagline')}
            color="text-indigo-600"
            image="hero"
          />
        </div>
        <div className="text-center text-xs font-bold text-yellow-500 mt-4">
          <NavLink to="/unpublished">{user && user.isAdmin ? <span>See Unpublished Testimonials</span> : ''}</NavLink>
        </div>
        {/* <div className="flex justify-center rounded w-96 text-center text-lg font-bold bg-purple-200 text-purple-500 mt-4">
        <button>Leave a Testimonial</button>
      </div> */}
        <div className="flex justify-center pt-6">
          <div className="w-72">
            <button
              onClick={() => show()}
              className="sm:hidden bg-purple-500 hover:bg-purple-600 text-purple-50 px-12 py-3 text-center font-extrabold uppercase rounded-lg select-none">
              {t('testimonials.button')}
            </button>
            <button
              onClick={() => show()}
              className="hidden sm:block w-full bg-purple-500 hover:bg-purple-600 text-purple-50  p-2 text-center font-extrabold uppercase rounded-lg select-none">
              {t('testimonials.button')}
            </button>
          </div>
        </div>
        {testimony.map((testimony) => {
          const control = (
            <div className="flex justify-center">
              <span
                className="px-4 font-light text-left text-xs text-indigo-600 cursor-pointer"
                onClick={() => togglePublish(testimony._id)}>
                Unpublish
              </span>
              <span
                className="font-light text-left text-xs text-pink-600 cursor-pointer"
                onClick={() => setVisible(!visible)}>
                Delete
              </span>
            </div>
          );
          if (testimony.published)
            return (
              <div key={testimony._id}>
                <div id="delete" className={`${visible ? '' : 'hidden'}`}>
                  <DeleteTestimonial id={testimony._id} onCancel={onCancel} />
                </div>
                <div className="my-10 mx-10 flex-col bg-white p-4 rounded-lg shadow-md select-none">
                  <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider hidden">
                    Testimonial
                  </span>
                  <h3 className="font-serif italic text-2xl text-gray-800">&ldquo;{testimony.testimonial}&rdquo;</h3>
                  <div className="flex justify-end items-baseline p-2 text-sm text-gray-800">
                    — {testimony.name}, <span className="flex ml-2 items-baseline text-xs">{testimony.city}</span>
                  </div>
                  {user && user.isAdmin ? control : ''}
                </div>
              </div>
            );
          return null;
        })}
        <div className="flex justify-center pb-8">
          <div className="w-72">
            <button
              onClick={() => show()}
              className="sm:hidden bg-purple-500 hover:bg-purple-600 text-purple-50 px-12 py-3 text-center font-extrabold uppercase rounded-lg select-none">
              {t('testimonials.button')}
            </button>
            <button
              onClick={() => show()}
              className="hidden sm:block w-full bg-purple-500 hover:bg-purple-600 text-purple-50  p-2 text-center font-extrabold uppercase rounded-lg select-none">
              {t('testimonials.button')}
            </button>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Testimonials;
