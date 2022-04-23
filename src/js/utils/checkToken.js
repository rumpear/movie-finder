import { store } from '../store';

export const checkToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) store.user = user;
  if (user) return true;
  else false;
};
