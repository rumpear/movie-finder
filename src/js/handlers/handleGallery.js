import { store } from '../store';
import languagePackage from '../store/languagePackage.json';

import { fetchTrending, fetchSearch } from '../services/serviceMoviesAPI';
import { fetchLibrary } from '../services/serviceDatabase';

import { renderGallery } from '../render/renderGallery';
import { renderSkeletonGallery } from '../render/renderSkeletonGallery';
import { renderPagination } from '../render/renderPagination';
import { renderEmptyGallery } from '../render/renderEmptyGallery';

import { handleNotification } from './handleNotification';

import { fetchMovieByGenres } from '../services/serviceMoviesAPI';
import { fetchTopRatedMovie } from '../services/serviceMoviesAPI';

export const handleGallery = () => {
  const { mode, page, query, language, user, category } = store;
  // console.log(mode);
  renderSkeletonGallery();

  if (mode === 'trend' || mode === 'find') {
    const fetchMethod = mode === 'find' ? fetchSearch : fetchTrending; //fetchMovieByGenres; //fetchTrending
    const category = mode === 'find' ? store.searchType : store.category; //trend : all

    // console.log(store.searchType);
    // console.log(store.category);
    // fetch(fetchTrending);
    fetchMethod(language, page, category, query).then((res) => {
      const { list, totalItems } = res;

      if (!totalItems) {
        renderEmptyGallery();

        handleNotification(
          'error',
          languagePackage.messageErrorSearch[language]
        );

        return;
      }

      if (page === 1) renderPagination(totalItems);
      list.length && renderGallery(list);
    });
  }

  if (mode === 'genres') {
    const category = store.searchType;
    const genres = store.genreId;
    // console.log(genres);
    fetchMovieByGenres(language, page, category, genres).then((res) => {
      const { results, total_pages } = res;
      // console.log(list);
      // console.log(totalItems);
      if (!total_pages) {
        renderEmptyGallery();

        handleNotification(
          'error',
          languagePackage.messageErrorSearch[language]
        );

        return;
      }

      if (page == 1) renderPagination(total_pages);
      results.length && renderGallery(results);
    });
  }

  if (mode === 'watched' || mode === 'queue') {
    if (user) {
      const uid = store.user.uid;
      renderPagination();
      fetchLibrary(uid, mode).then((res) => {
        if (res.length) return renderGallery(res);

        renderEmptyGallery();
        handleNotification(
          'info',
          languagePackage.messageEmptyLibrary[language]
        );
      });
    } else {
      renderEmptyGallery();
    }
  }
};

// export const handleGenresGallery = () => {
//   const { mode, page, query, language, user, category } = store;
//   let genres = store.genreId;
//   fetchMovieByGenres(language, page, genres).then((res) => {
//     const { results, total_pages } = res;
//     // console.log(list);
//     // console.log(totalItems);
//     if (!total_pages) {
//       renderEmptyGallery();

//       return handleSearchError(
//         'Search result not successful. Enter the correct movie name'
//       );
//     }

//     renderPagination(total_pages);
//     renderGallery(results);
//   });
// };

// const div = document.querySelector('.genres');
// const onDivClick = (e) => {
//   let { mode } = store;
//   mode = 'genres';
//   console.log(mode);
//   const genres = e.target.dataset.action;
//   console.log(genres);
//   handleGallery();
// };
// div.addEventListener('click', onDivClick);

const onTopRatedBtnClick = () => {
  store.category = 'top-movies';
};

const fetch = (fetchMethod) => {
  const { mode, page, query, language, user, category } = store;
  fetchMethod(language, page, category, query).then((res) => {
    const { list, totalItems } = res;

    if (!totalItems) {
      renderEmptyGallery();

      handleNotification('error', languagePackage.messageErrorSearch[language]);

      return;
    }

    if (page === 1) renderPagination(totalItems);
    list.length && renderGallery(list);
  });
};
