import { store } from '../store';

import { changeLanguage } from '../utils/changeLanguage';

export const handleLanguage = (e) => {
  const { value } = e.target;

  if (value !== store.language) {
    store.language = value;
    localStorage.setItem('language', value);

    changeLanguage();
  }
};

store.refs.refLangSelector.addEventListener('change', handleLanguage);
