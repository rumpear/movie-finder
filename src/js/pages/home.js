import { store } from '../store';

import { handleGallery } from '../handlers/handleGallery';
import { showSearchForm } from '../handlers/showSearchForm';

export const initHome = () => {
  const { rootHeader, categoriesRoot, typeRoot, genresRoot } = store.refs;

  rootHeader.classList.remove('header__container_library');
  rootHeader.classList.add('header__container_home');

  categoriesRoot.classList.remove('is-closed');
  typeRoot.classList.add('is-closed');
  genresRoot.style.display = 'flex';

  localStorage.setItem('page', 'home');

  store.mode = 'trend';
  store.page = 1;

  showSearchForm();
  handleGallery();
};
