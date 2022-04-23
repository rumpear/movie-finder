import { store } from '../store';

import { templateCard } from '../templates/templateCard';

import { filterGenres } from '../utils/filterGenres';
import { joinGenres } from '../utils/joinGenres';
import { parseYear } from '../utils/parseYear';
import { checkCategory } from '../utils/checkCategory';

import noPosterAvailable from '../../assets/images/noPosterAvailable.png';

export const renderGallery = (list) => {
  const { genresList, mode } = store;
  const { rootGallery } = store.refs;

  const markup = list
    .map(
      ({
        poster_path,
        id,
        genre_ids,
        genres,
        title,
        release_date,
        first_air_date,
        vote_average,
        name,
      }) => {
        const genresInfo = genres
          ? joinGenres(genres)
          : filterGenres(genresList, genre_ids);

        const cardTitle = name ? name : title;
        const releaseYear = parseYear(
          first_air_date ? first_air_date : release_date
        );
        const category = checkCategory(name, title);

        let poster = 'https://themoviedb.org/t/p/w342' + poster_path;
        if (!poster_path) poster = noPosterAvailable;

        return templateCard(
          id,
          poster,
          cardTitle,
          genresInfo,
          releaseYear,
          vote_average,
          mode === 'watched' || mode === 'queue',
          category
        );
      }
    )
    .join('');

  rootGallery.innerHTML = '';
  rootGallery.insertAdjacentHTML('afterbegin', markup);
};
