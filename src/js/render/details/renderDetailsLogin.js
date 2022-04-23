import { store } from '../../store';

import { loginGoogle } from '../../services/serviceAuth';

import { renderDetailsLibraryButton } from './renderDetailsLibraryButton';

import iconGoogleLogo from '../../../assets/icons/google-logo.svg';

export const renderDetailsLogin = (movie) => {
  const rootButtons = document.querySelector('.details-popup__menu');

  const markup = `
        <button class="login-button" data-action="login-google-panel">
          <img
            class="login-button__icon"
            src=${iconGoogleLogo}
            alt="google-icon"
          />
          <span class="login-button__title">Sign in with Google</span>
        </button>`;

  rootButtons.innerHTML = markup;

  document
    .querySelector('[data-action=login-google-panel]')
    .addEventListener('click', () =>
      loginGoogle().then((res) => {
        if (res.status === 200) {
          const { uid, displayName } = res;
          localStorage.setItem('user', JSON.stringify({ uid, displayName }));
          store.user = { uid, displayName };

          rootButtons.innerHTML = `
          <li class="details-popup__menu_item" data-root="watched"></li>
          <li class="details-popup__menu_item" data-root="queue"></li>`;

          renderDetailsLibraryButton('watched', movie);
          renderDetailsLibraryButton('queue', movie);
        }
      })
    );
};
