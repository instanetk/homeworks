import React from 'react';
import { useTranslation } from 'react-i18next';
import SecondaryHero from '../common/secondaryHero';
import CardScroll from '../common/cardScroll';
import ServiceAddress from '../serviceAddress';
import ThankYou from '../thankYou';

const Landscape = () => {
  const { t } = useTranslation();
  const [submitted, setState] = React.useState(false);

  const sayThanks = () => {
    setState(!submitted);
  };

  const service = t('services.landscaping');

  const style = {
    hero: '-mt-6 sm:mt-0',
    address: 'sm:py-10 sm:ml-0',
    categories: 'py-10 -mt-0 sm:ml-20',
  };

  return (
    <main>
      <div id="hero" className={style.hero}>
        <SecondaryHero
          text2={t('srvLandscape.1')}
          tagline={t('secondaryHero.tagline2')}
          color="text-green-400"
          image="catLandscaping"
        />
      </div>
      <div id="address" className={style.address}>
        {submitted ? <ThankYou /> : <ServiceAddress sayThanks={sayThanks} service={service} />}
      </div>
      <div id="categories" className={style.categories}>
        <CardScroll which={'useCategories'} slug="/services" name="Browse by category" />
        <CardScroll name={t('home.services')} slug="/schedule" which="useServices" />
      </div>
    </main>
  );
};

export default Landscape;
