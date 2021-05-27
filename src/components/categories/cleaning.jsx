import React from 'react';
import { useTranslation } from 'react-i18next';
import CardScroll from '../common/cardScroll';
import SecondaryHero from '../common/secondaryHero';
import Testimonial from '../common/testimonial';

const Cleaning = () => {
  const { t } = useTranslation();

  const style = {
    hero: '-mt-6 sm:mt-0',
    services: 'mt-0 sm:mt-0 pb-2 sm:ml-5 sm:flex-col sm:justify-center sm:px-14',
    testimonial: 'px-4 sm:-mt-8 sm:px-20',
    content: 'mt-6 pb-12 text-gray-800 tracking-wide text-justify text-lg select-none',
    p: 'px-4 sm:px-20 mt-2 flex-wrap',
    categories: 'py-10 -mt-20 sm:ml-20',
  };

  return (
    <main>
      <div id="hero" className={style.hero}>
        <SecondaryHero
          text2={t('cleaning.1')}
          tagline={t('secondaryHero.tagline')}
          color="text-purple-700"
          image="srvCleaning"
        />
      </div>
      <div>
        <div id="services" className={style.services}>
          <CardScroll which="useService" slug="/schedule" category="cleaning" />
        </div>
        <div id="testimonial" className={style.testimonial}>
          <Testimonial />
        </div>
        <div id="content" className={style.content}>
          <p className={style.p}>{t('cleaning.text')}</p>
        </div>
      </div>
      <div className={style.categories}>
        <CardScroll name={t('home.category')} which="useCategories" />
        <CardScroll name={t('home.services')} slug="/schedule" which="useServices" />
      </div>
    </main>
  );
};

export default Cleaning;
