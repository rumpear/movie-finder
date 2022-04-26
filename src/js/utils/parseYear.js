export const parseYear = (fromDate, ToDate) => {
  if (ToDate) return `${parseInt(fromDate)} - ${parseInt(ToDate)}`;

  if (fromDate) return `${parseInt(fromDate)}`;
  else return 'Year unknown';
};
