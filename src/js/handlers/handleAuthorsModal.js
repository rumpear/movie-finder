import { store } from '../store';
import languagePackage from '../store/languagePackage.json';

import { templateAuthorsModal } from '../templates/templateAuthorsModal';

export const openAuthorsModal = (e) => {
  e.preventDefault();

  const { language } = store;
  const { rootDetails, body } = store.refs;

  rootDetails.innerHTML = '';
  rootDetails.classList.remove('is-hidden');
  body.classList.add('is-open');

  rootDetails.insertAdjacentHTML(
    'afterbegin',
    templateAuthorsModal(languagePackage, language)
  );
};

store.refs.authorsModalLink.addEventListener('click', openAuthorsModal);
