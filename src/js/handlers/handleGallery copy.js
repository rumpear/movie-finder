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

export const handleGallery = () => {
  const { mode, page, query, language, user, category } = store;
  renderSkeletonGallery();

  if (mode === 'trend' || mode === 'find') {
    const fetchMethod = mode === 'find' ? fetchSearch : fetchTrending;
    const category = mode === 'find' ? store.searchType : store.category;

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

  // * work
  if (mode === 'trend') {
    const div = document.querySelector('.genres');
    // console.log(div);
    const onDivClick = (e) => {
      const genres = e.target.dataset.action;
      const currentTarget = e.currentTarget;

      // console.log(genre);
      // console.log(currentTarget);

      // return target;

      // console.log(genres);
      fetchMovieByGenres(language, page, genres, category).then((res) => {
        const { results, total_pages } = res;
        // console.log(genre);
        // console.log(list);
        // console.log(totalItems);
        if (!total_pages) {
          renderEmptyGallery();
          return handleSearchError(
            'Search result not successful. Enter the correct movie name'
          );
        }
        if (page == 1) renderPagination(total_pages);
        results.length && renderGallery(results);
      });
    };
    div.addEventListener('click', onDivClick);
  }

  const div = document.querySelector('.genres');
  const onDivClick = (e) => {
    const { mode } = store;
    mode = 'genres';
    // console.log(mode);
    const genres = e.target.dataset.action;
    // console.log(genres);
  };
  div.addEventListener('click', onDivClick);

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

const handleGenresGallery = () => {};
