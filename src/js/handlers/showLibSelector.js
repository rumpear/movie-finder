import { store } from '../store';

import { clearActive } from '../utils/clearClasses';
import { checkToken } from '../utils/checkToken';

export const showLibSelector = () => {
  const { rootControl, refLoginHeader, refLibsSelect } = store.refs;
  clearActive(rootControl);

  const isLogged = checkToken();

  if (isLogged) refLibsSelect.classList.add('active');
  else refLoginHeader.classList.add('active');
};
