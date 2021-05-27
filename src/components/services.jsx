import React from 'react';
import { useTranslation } from 'react-i18next';
import SecondaryHero from './common/secondaryHero';
import Testimonial from './common/testimonial';
import CardScroll from './common/cardScroll';

const Services = () => {
  const { t } = useTranslation();

  const style = {
    hero: '-mt-6 sm:mt-0',
    services: 'pt-10 -mt-10 sm:ml-20',
    categories: 'py-10 -mt-10 sm:ml-20',
    testimonial: 'px-4 sm:-mt-8 sm:px-20',
  };
  return (
    <main>
      <div id="hero" className={style.hero}>
        <SecondaryHero
          text2={t('services.services')}
          tagline={t('secondaryHero.tagline')}
          color="text-indigo-600"
          image="hero"
        />
      </div>
      <div className={style.services}>
        <CardScroll name={t('home.services')} slug="/schedule" which="useServices" />
      </div>
      <div id="testimonial" className={style.testimonial}>
        <Testimonial />
      </div>
      <div className={style.categories}>
        <CardScroll name={t('home.category')} slug="/services" which="useCategories" />
      </div>
    </main>
  );
};

export default Services;
