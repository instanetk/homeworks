import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SecondaryHero from '../common/secondaryHero';
import { getTestimonials, hideTestimonial } from '../../services/testimonialService';
import { useTranslation } from 'react-i18next';
import DeleteTestimonial from './delete';

const Unpublished = ({ user }) => {
  const { t } = useTranslation();
  const [testimony, setTestimony] = useState([]);
  const [visible, setVisible] = React.useState(false);

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

  const togglePublish = async (id) => {
    hideTestimonial(id);
    window.location = '/unpublished';
  };

  const style = {
    hero: '-mt-6 sm:mt-0',
  };

  return (
    <main>
      <div id="hero" className={style.hero}>
        <SecondaryHero
          text2={t('testimonials.h1')}
          tagline={t('testimonials.tagline')}
          color="text-indigo-600"
          image="hero"
        />
      </div>
      <div className="text-center text-xs font-bold text-green-500 mt-4">
        <NavLink to="/testimonials">{user && user.isAdmin ? <span>Back to Testimonials</span> : ''}</NavLink>
      </div>
      {testimony.map((testimony) => {
        const control = (
          <div className="flex justify-center">
            <span
              className="px-4 font-light text-left text-xs text-indigo-600 cursor-pointer"
              onClick={() => togglePublish(testimony._id)}>
              Publish
            </span>
            <span
              className="font-light text-left text-xs text-pink-600 cursor-pointer"
              onClick={() => setVisible(!visible)}>
              Delete
            </span>
          </div>
        );
        if (!testimony.published)
          return (
            <div key={testimony._id}>
              <div id="delete" className={`${visible ? '' : 'hidden'}`}>
                <DeleteTestimonial id={testimony._id} onCancel={onCancel} />
              </div>
              <div className="my-10 mx-10 flex-col bg-white p-4 rounded-lg shadow-md select-none">
                <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider hidden">Testimonial</span>
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
    </main>
  );
};

export default Unpublished;
