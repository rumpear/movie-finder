import { store } from '../store';
import languagePackage from '../store/languagePackage.json';

import { templateGalleryEmpty } from '../templates/templateGalleryEmpty';
import { renderPagination } from '../render/renderPagination';

export const renderEmptyGallery = () => {
  const { rootGallery } = store.refs;
  const { language } = store;

  renderPagination();

  rootGallery.innerHTML = '';
  rootGallery.insertAdjacentHTML(
    'afterbegin',
    templateGalleryEmpty(languagePackage.messageNothingFound[language])
  );
};
