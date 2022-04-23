import { store } from '../store';

export const clearCheckboxOnGenres = () => {
  store.refs.genreButtons.forEach((input) => (input.checked = false));
};
