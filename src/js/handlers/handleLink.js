import { store } from '../store';

import { initHome } from '../pages/home';
import { initLibrary } from '../pages/library';

import { clearActive } from '../utils/clearClasses';
import { clearCheckboxOnGenres } from '../utils/clearCheckboxOnGenres';

export const handleLink = (e) => {
  e.preventDefault();

  const link = e.currentTarget;
  const value = link.getAttribute('data-page');

  const { rootMenu } = store.refs;
  clearActive(rootMenu);

  rootMenu.querySelector(`[data-page="${value}"]`).classList.add('active');

  if (value === 'home') initHome();
  if (value === 'library') initLibrary();

  clearCheckboxOnGenres();
};

store.refs.refsLink.forEach((link) =>
  link.addEventListener('click', handleLink)
);
