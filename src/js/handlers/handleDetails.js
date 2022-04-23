import { store } from '../store';
import languagePackage from '../store/languagePackage.json';

import { fetchSingleMovie } from '../services/serviceMoviesAPI';

import { renderDetails } from '../render/details/renderDetails';
import { renderSkeletonDetails } from '../render/renderSkeletonDetails';

import { handleNotification } from './handleNotification';

export const openDetails = (e, id, type) => {
  const index = id ? id : e?.target?.getAttribute('data-id');
  const category = type ? type : e?.target?.getAttribute('data-category');
  if (!index) return;

  renderSkeletonDetails();

  const { language } = store;
  const { rootDetails, body } = store.refs;
  rootDetails.classList.remove('is-hidden');
  body.classList.add('is-open');

  index &&
    fetchSingleMovie(language, index, category).then((res) => {
      if (res) return renderDetails(res);

      handleNotification('error', languagePackage.messageNotFound[language]);
      closeDetails(true);
    });
};

export const closeDetails = (e) => {
  const { rootDetails, body } = store.refs;

  const bool = e === true;
  const code = e?.code === 'Escape';
  const action = e?.target?.getAttribute('data-action') === 'close-modal';

  if (bool || code || action) {
    body.classList.remove('is-open');
    rootDetails.classList.add('is-hidden');
  }
};

document.addEventListener('keydown', closeDetails);
store.refs.rootGallery.addEventListener('click', openDetails);
store.refs.rootDetails.addEventListener('click', closeDetails);
