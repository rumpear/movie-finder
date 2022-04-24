import { store } from '../store';

import { clearActive } from '../utils/clearClasses';

export const showSearchForm = () => {
  const { refSearchForm, rootControl } = store.refs;

  clearActive(rootControl);

  refSearchForm.classList.add('active');
};
