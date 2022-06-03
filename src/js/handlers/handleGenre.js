import { store } from '../store';
import { handleGallery } from './handleGallery';

export const handleGenre = (e) => {
  // const { mode, genreId, refs, category } = store;

  store.mode = 'genres';
  const { value } = e.target;
  store.genreId = value;

  store.refs.categoriesRoot.classList.add('is-closed');
  store.refs.typeRoot.classList.remove('is-closed');

  // console.log(e.target);
  // console.log(value);

  if (store.category === 'all') {
    store.category = 'movie';
  }

  // console.log('handleGenre', value);

  handleGallery();
};

store.refs.genreButtons.forEach((input) =>
  input.addEventListener('change', handleGenre)
);
