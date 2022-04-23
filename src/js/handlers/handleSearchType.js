import { store } from '../store';

import { handleGallery } from './handleGallery';

export const handleCategory = (e) => {
  const { value } = e.target;

  store.searchType = value;

  handleGallery();
};

store.refs.typeButtons.forEach((input) =>
  input.addEventListener('change', handleCategory)
);
