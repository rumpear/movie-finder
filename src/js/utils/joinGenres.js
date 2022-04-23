export const joinGenres = (genres) => {
  if (!genres) return;

  const str = genres.map((genre) => genre.name).join(', ');
  return str;

  // if (str) {
  //   return str;
  // } else {
  //   str = '-';
  //   return str;
  // }
};
