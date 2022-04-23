import { templateTrailer } from '../templates/templateTrailer';

export const renderTrailer = (youtubeKey) => {
  const markup = templateTrailer(youtubeKey);
  const trailerPlayerRef = document.querySelector('.modal-trailer');
  trailerPlayerRef.insertAdjacentHTML('afterbegin', markup);
};
