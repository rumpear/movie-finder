import { store } from '../store';
import languagePackage from '../store/languagePackage.json';

import { checkToken } from '../utils/checkToken';

import { handleGallery } from '../handlers/handleGallery';
import { showLibSelector } from '../handlers/showLibSelector';
import { handleNotification } from '../handlers/handleNotification';

import { renderEmptyGallery } from '../render/renderEmptyGallery';
import { renderPagination } from '../render/renderPagination';

export const initLibrary = () => {
  const { rootHeader, categoriesRoot, typeRoot } = store.refs;
  const { language } = store;

  rootHeader.classList.add('header__container_library');
  rootHeader.classList.remove('header__container_home');

  categoriesRoot.classList.add('is-closed');
  typeRoot.classList.add('is-closed');

  localStorage.setItem('page', 'library');

  store.mode = 'watched';
  store.page = 1;

  showLibSelector();

  const genresRef = document.querySelector('.genres');
  genresRef.style.display = 'none';

  if (checkToken()) {
    handleGallery();
  } else {
    handleNotification('info', languagePackage.messageAuthLibrary[language]);
    renderPagination();
    renderEmptyGallery();
  }
};
