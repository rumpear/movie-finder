import { store } from '../store';

import { clearActive } from '../utils/clearClasses';

export const showSearchForm = () => {
  const { refSearchform, rootControl } = store.refs;

  clearActive(rootControl);

  refSearchform.classList.add('active');
};
