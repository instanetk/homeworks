import React from 'react';
import { useTranslation } from 'react-i18next';
import CardScroll from '../common/cardScroll';
import SecondaryHero from '../common/secondaryHero';
import Testimonial from '../common/testimonial';
import ServiceAddress from '../serviceAddress';
import ThankYou from '../thankYou';

const Irrigation = () => {
  const { t } = useTranslation();
  const [submitted, setState] = React.useState(false);

  const sayThanks = () => {
    setState(!submitted);
  };

  const service = t('cat.landscape');

  const style = {
    hero: '-mt-6 sm:mt-0',
    services: 'mt-0 sm:mt-0 pb-0 sm:ml-5 sm:flex-col sm:justify-center sm:px-14',
    testimonial: 'px-4 sm:-mt-8 sm:px-20',
    content: 'mt-0 pb-0 text-gray-800 tracking-wide text-justify text-lg select-none',
    p: 'px-4 sm:px-20 mt-0 flex-wrap',
    categories: 'py-10 -mt-0 sm:ml-20',
    address: 'sm:py-10 sm:ml-0',
  };

  return (
    <main>
      <div id="hero" className={style.hero}>
        <SecondaryHero
          text1={t('irrigation.1')}
          text2={t('irrigation.2')}
          tagline={t('secondaryHero.tagline')}
          color="text-green-400"
          image="catLandscaping"
        />
      </div>
      <div>
        <div id="services" className={style.services}>
          <CardScroll which="useService" slug="/schedule" category="irrigation" />
        </div>
        <div id="content" className={style.content}>
          <p className={style.p}>{t('irrigation.text')}</p>
        </div>
        <div id="address" className={style.address}>
          {submitted ? <ThankYou /> : <ServiceAddress sayThanks={sayThanks} service={service} />}
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

export default Irrigation;
