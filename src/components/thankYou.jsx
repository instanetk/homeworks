import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import StepThree from './common/tour/step3';

const styles = {
  mainDiv: 'sm:flex justify-center items-center px-4 sm:px-20 sm:flex-shrink-0',
  wrapper: 'sm:flex sm:flex-col text-center align-middle border border-gray-300 bg-gray-200 w-full p-10 rounded-lg',
  thankyou: 'sm:flex justify-center',
  emoji: 'text-5xl px-4',
  h1: 'text-5xl text-gray-700',
  p: 'mt-6 text-gray-800',
};

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <div className={styles.mainDiv}>
      <div className={styles.wrapper}>
        <div className={styles.thankyou}>
          <span className={styles.emoji} aria-label="check mark symbol">
            ✅
          </span>
          <br />
          <h1 className={styles.h1}>{t('thankYou.h1')}</h1>
        </div>
        <p className={styles.p}>{t('thankYou.p')}</p>
        <StepThree />
      </div>
    </div>
  );
};

export default ThankYou;
