import React from 'react';
import { withTranslation, Link } from '../i18n';

const LanguagePicker = ({ i18n }) => {
  const { language } = i18n; 
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
    <header>
      <Link path='/'>
        <a>
          <h1>Logo</h1>
        </a>
      </Link>
      <select onChange={changeLanguage} defaultValue={language}>
        <option value='es'>Es</option>
        <option value='en'>En</option>
      </select>
    </header>
    </>
  );
};

export default withTranslation('')(LanguagePicker);
