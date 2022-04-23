import { store } from '../store';

import { handleGallery } from './handleGallery';
import { handleGenresGallery } from './handleGallery';

// const handleSearch = (e) => {
//   e.preventDefault();

//   const {
//     elements: { searchQuery },
//   } = e.target;

//   const query = searchQuery.value.trim();

//   if (query) {
//     store.mode = 'find';
//     store.page = 1;
//     store.query = query;

//     store.refs.categoriesRoot.classList.add('is-closed');
//     store.refs.typeRoot.classList.remove('is-closed');

//     handleGallery();
//   }

//   e.target.reset();
// };

// const div = document.querySelector('.genres');
// const allBtn = document.querySelector('[data-lang="categoryAllBtn"]');
// const moviesBtn = document.querySelector('[data-lang="categoryMoviesBtn"]');
// const genresBtn = document.querySelector('.genres__btn');
// console.log(genresBtn);
// console.log(allBtn);

// export const onMovieGenreClick = (e) => {
//   store.mode = 'genres';
//   genresBtn.classList.toggle('btn-is-checked');
//   console.log('store.category', store.category);

//   store.refs.categoriesRoot.classList.add('is-closed');
//   store.refs.typeRoot.classList.remove('is-closed');

//   if (store.category === 'all') {
//     // allBtn.style.display = 'none';
//     store.category = 'movie';
//   }

//   store.genreId = e.target.dataset.movie;

//   // if (store.category === 'movie') {
//   //   store.genreId = e.target.dataset.movie;
//   //   store.category === 'movie';
//   //   // allBtn.style.display = 'none';
//   // }
//   // if (store.category === 'tv') {
//   //   store.genreId = e.target.dataset.tv;
//   //   store.category = 'tv';
//   // }

//   // console.log('store.mode', store.mode);

//   // console.log('genres onDivClick', store.genreId);

//   handleGallery();
//   // handleGenresGallery();
// };
// div.addEventListener('click', onMovieGenreClick);

// получаем категорию от категории зависит const genres = e.target.dataset.action;
