export const filterGenres = (genres, ids) => {
  // console.log(genres);
  // console.log(ids);
  if (genres.length && ids) {
    const str = ids
      .map((id) => genres.find((genre) => genre.id === id))
      .map((item) => item?.name)
      .join(', ');

    if (str) return str;
  }

  return '';
};
