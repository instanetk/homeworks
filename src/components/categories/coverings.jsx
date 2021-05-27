import React from 'react';
import { useTranslation } from 'react-i18next';
import CardScroll from '../common/cardScroll';
import SecondaryHero from '../common/secondaryHero';
import Testimonial from '../common/testimonial';

const Coverings = () => {
  const { t } = useTranslation();

  const style = {
    hero: '-mt-6 sm:mt-0',
    services: 'mt-0 sm:mt-0 pb-2 sm:ml-5 sm:flex-col sm:justify-center sm:px-14',
    testimonial: 'px-4 sm:-mt-8 sm:px-20',
    content: 'mt-0 pb-6 text-gray-800 tracking-wide text-justify text-lg select-none',
    p: 'px-4 sm:px-20 mt-2 flex-wrap',
    categories: 'py-10 -mt-0 sm:ml-20',
  };

  return (
    <main>
      <div id="hero" className={style.hero}>
        <SecondaryHero
          text1={t('coverings.1')}
          text2={t('coverings.2')}
          tagline={t('secondaryHero.tagline')}
          color="text-yellow-500"
          image="catCovering"
        />
      </div>
      <div>
        <div id="services" className={style.services}>
          <CardScroll which="useService" slug="/schedule" category="coverings" />
        </div>
        <div id="content" className={style.content}>
          <p className={style.p}>{t('coverings.text')}</p>
        </div>
        <div id="testimonial" className={style.testimonial}>
          <Testimonial />
        </div>
      </div>
      <div id="categories" className={style.categories}>
        <CardScroll name={t('home.category')} which="useCategories" />
        <CardScroll name={t('home.services')} slug="/schedule" which="useServices" />
      </div>
    </main>
  );
};

export default Coverings;
