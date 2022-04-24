import { store } from '../store';

import { handleGallery } from './handleGallery';

const handleSearch = (e) => {
  e.preventDefault();

  const {
    elements: { searchQuery },
  } = e.target;

  const query = searchQuery.value.trim();

  if (query) {
    store.mode = 'find';
    store.page = 1;
    store.query = query;

    store.refs.categoriesRoot.classList.add('is-closed');
    store.refs.typeRoot.classList.remove('is-closed');

    const genresRef = document.querySelector('.genres');
    genresRef.style.display = 'none';

    handleGallery();
  }

  e.target.reset();
};

store.refs.refSearchForm.addEventListener('submit', handleSearch);
