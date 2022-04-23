import { store } from '../store';
import headerLng from '../store/languagePackage.json';

import { handleGallery } from '../handlers/handleGallery';

import { fetchGenres } from '../services/serviceMoviesAPI';

export const changeLanguage = async () => {
  const { language, mode } = store;
  setHeaderLanguage();

  const genres = await fetchGenres(language);
  store.genresList = genres;

  if (mode) handleGallery();
};

const setHeaderLanguage = () => {
  const { language } = store;

  const elements = document.querySelectorAll('[data-lang]');

  elements.forEach((element) => {
    const elIndex = element.getAttribute('data-lang');
    const placeholder = element.getAttribute('placeholder');

    const text = headerLng[elIndex][language];

    if (placeholder) element.setAttribute('placeholder', text);
    else element.textContent = text;
  });
};
