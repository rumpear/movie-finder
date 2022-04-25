import { store } from '../store';
import { handleGallery } from './handleGallery';

export const handleCategory = (e) => {
  const { value } = e.target;

  store.category = value;

  handleGallery();
};

store.refs.categoryButtons.forEach((input) =>
  input.addEventListener('change', handleCategory)
);