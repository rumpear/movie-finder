import { store } from '../store';

import { initLibrary } from '../pages/library';
import { showLibSelector } from '../handlers/showLibSelector';

export const handleLogout = () => {
  localStorage.removeItem('user');
  store.user = null;

  showLibSelector();
  initLibrary();
};

store.refs.btnLogout.addEventListener('click', handleLogout);
