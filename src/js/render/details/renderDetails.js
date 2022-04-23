import { store } from '../../store';
import languagePackage from '../../store/languagePackage.json';
import 'sharer.js';

import { renderTrailerBtn } from '../../handlers/handleTrailer';
import { closeDetails } from '../../handlers/handleDetails';
import { handleNotification } from '../../handlers/handleNotification';

import { renderDetailsLibraryButton } from './renderDetailsLibraryButton';
import { renderDetailsLogin } from './renderDetailsLogin';
import { templateDetails } from '../../templates/templateDetails';

import { checkToken } from '../../utils/checkToken';
import { joinGenres } from '../../utils/joinGenres';
import { checkCategory } from '../../utils/checkCategory';
import { parseYear } from '../../utils/parseYear';

import noPosterAvailable from '../../../assets/images/noPosterAvailable.png';

export const renderDetails = (movie) => {
  const { language } = store;
  const { rootDetails } = store.refs;
  const {
    title,
    name,
    original_title,
    original_name,
    popularity,
    overview,
    vote_average,
    vote_count,
    genres,
    poster_path,
    id,
    release_date,
    first_air_date,
    last_air_date,
  } = movie;

  let poster = 'https://themoviedb.org/t/p/w500' + poster_path;
  if (!poster_path) poster = noPosterAvailable;

  const cardTitle = name ? name : title;
  const cardOriginalName = original_name ? original_name : original_title;
  const category = checkCategory(name, title);
  const link = `${window.location.origin}${window.location.pathname}?id=${id}&category=${category}`;
  const date = parseYear(
    release_date ? release_date : first_air_date,
    last_air_date
  );

  const markup = templateDetails(
    languagePackage,
    language,
    poster,
    cardTitle,
    cardOriginalName,
    vote_average,
    vote_count,
    popularity,
    joinGenres(genres),
    overview,
    id,
    link,
    category,
    date
  );

  rootDetails.innerHTML = '';
  rootDetails.insertAdjacentHTML('afterbegin', markup);

  Sharer.init();
  const shareButton = document.querySelector('[data-share="link"]');
  shareButton.addEventListener('click', () => {
    const link = shareButton.getAttribute('data-url');
    navigator.clipboard
      .writeText(link)
      .then(() =>
        handleNotification('success', languagePackage.shareLinkButton[language])
      );
  });

  if (checkToken()) {
    renderDetailsLibraryButton('watched', movie);
    renderDetailsLibraryButton('queue', movie);
  } else {
    renderDetailsLogin(movie);
  }

  renderTrailerBtn(id, category);

  document
    .querySelector('[data-modal-close]')
    .addEventListener('click', closeDetails);
};
