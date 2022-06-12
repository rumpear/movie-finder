import { store } from '../store';
import { handleGallery } from './handleGallery';

export const handleGenre = (e) => {
  store.mode = 'genres';
  const { value } = e.target;
  store.genreId = value;

  store.refs.categoriesRoot.classList.add('is-closed');
  store.refs.typeRoot.classList.remove('is-closed');

  if (store.category === 'all') {
    store.category = 'movie';
  }

  handleGallery();
};

store.refs.genreButtons.forEach((input) =>
  input.addEventListener('change', handleGenre)
);
