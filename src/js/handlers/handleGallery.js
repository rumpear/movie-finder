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

  if (mode === 'genres') {
    const category = store.searchType;
    const genres = store.genreId;

    fetchMovieByGenres(language, page, category, genres).then((res) => {
      const { results, total_pages } = res;

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
