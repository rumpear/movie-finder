import { store } from '../store';
import { fetchMovieTrailer } from '../services/serviceMoviesAPI';
import { renderTrailer } from '../render/renderTrailer';

const getTrailers = async (movieId, category) => {
  const results = await fetchMovieTrailer(movieId, category);
  const officialTrailer = results.find((trailer) =>
    trailer.name.includes('Official')
  );

  return officialTrailer;
};

export const renderTrailerBtn = async (movieId, category) => {
  const officialTrailer = await getTrailers(movieId, category);

  if (!officialTrailer) {
    return;
  }
  showTrailerBtn();
  openTrailerOnclick();
};

const showTrailerBtn = () => {
  const watchTrailerBtnRef = document.querySelector('.watch-trailer-btn');
  watchTrailerBtnRef.classList.remove('is-hidden');
};

const openTrailerOnclick = () => {
  const watchTrailerBtnRef = document.querySelector('.watch-trailer-btn');
  watchTrailerBtnRef.addEventListener('click', async (e) => {
    const movieId = e.target.getAttribute('data-id');
    const category = e.target.getAttribute('data-category');
    const officialTrailer = await getTrailers(movieId, category);

    const { key: youtubeKey } = officialTrailer;
    showTrailerWindow();
    renderTrailer(youtubeKey);
  });
};

const backdropTrailer = document.querySelector('.backdrop-trailer');
const trailerPlayerRef = document.querySelector('.modal-trailer');

const showTrailerWindow = () => {
  backdropTrailer.classList.remove('is-hidden');
  document.addEventListener('keydown', closeOnEscClick);
};

const closeTrailer = () => {
  trailerPlayerRef.innerHTML = '';
  backdropTrailer.classList.add('is-hidden');
  document.removeEventListener('keydown', closeOnEscClick);
};

const closeOnBackdropClick = (e) => {
  if (!e.target === e.currentTarget) return;
  closeTrailer();
};
backdropTrailer.addEventListener('click', closeOnBackdropClick);

const closeOnEscClick = (e) => {
  if (e.code === 'Escape') {
    closeTrailer();
  }
};
