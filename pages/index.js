import React from 'react';
import { withTranslation, Link, i18n } from '../i18n';
import css from '../styles.css';

import data from '../data';
import Header from '../components/Header';
import DinosaurCard from '../components/DinosaurCard';

const HomePage = ({ t }) => {
  return (
    <>
      <Header />
      <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
        >
          {t('common:change-locale')}
        </button>
      <div className={css.banner}>
        <h1>{t('banner')}
        <br/>
        <span>{t('common:description')}</span></h1>
      </div>
      <div className={css.dinosaurList}>
        {data.map((dinosaur) => (
          <DinosaurCard dinosaur={dinosaur} key={dinosaur.name} />
        ))}
      </div>
    </>
  );
};

HomePage.getInitialProps = () => {
  return {
    namespacesRequired: ['homePage', 'common'],
  };
};

export default withTranslation(['homePage', 'common'])(HomePage);
