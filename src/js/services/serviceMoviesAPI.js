import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '5e25dc89cc9570e2f881766abec20685',
};

export const fetchGenres = async (language = 'en-US') => {
  const endpoints = [`genre/movie/list`, `genre/tv/list`];

  const response = await axios.all(
    endpoints.map((endpoint) =>
      axios
        .get(`/${endpoint}`, { params: { language } })
        .catch((e) => console.error(e))
    )
  );

  return response[0].data.genres.concat(response[1].data.genres);
};

export const fetchTrending = async (language = 'en-US', page = 1, category) =>
  await axios
    .get(`/trending/${category}/day`, {
      params: {
        language,
        page,
      },
    })
    .then((res) => ({
      list: res.data.results,
      totalPages: res.data.total_pages,
      totalItems: res.data.total_results,
    }))
    .catch((e) => console.error(e));

export const fetchSearch = async (
  language = 'en-US',
  page = 1,
  category = 'movie',
  query
) =>
  await axios
    .get(`/search/${category}`, {
      params: {
        language,
        include_adult: false,
        page,
        query,
      },
    })
    .then((res) => ({
      list: res.data.results,
      totalPages: res.data.total_pages,
      totalItems: res.data.total_results,
    }))
    .catch((e) => console.error(e));

export const fetchSingleMovie = async (language = 'en-US', id, category) => {
  const details = await axios
    .get(`/${category}/${id}`, {
      params: { language },
    })
    .then((res) => ({ ...res.data }))
    .catch((e) => console.error(e));
  return { ...details };
};

export const fetchMovieTrailer = async (movieId, category) => {
  try {
    const { data } = await axios.get(`/${category}/${movieId}/videos`);
    return data.results;
  } catch (e) {
    return console.error(e);
  }
};

export const fetchMovieByGenres = async (
  language = 'en-US',
  page = 1,
  category,
  genres
) => {
  try {
    const { data } = await axios.get(`/discover/${category}`, {
      params: { language, page, genres },
    });
    return data;
  } catch (error) {
    return console.error(e);
  }
};
