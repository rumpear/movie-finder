import { store } from '../store';

import { templateDetailsSkeleton } from '../templates/templateDetailsSkeleton';

export const renderSkeletonDetails = () => {
  const { rootDetails } = store.refs;

  rootDetails.innerHTML = '';
  rootDetails.insertAdjacentHTML('afterbegin', templateDetailsSkeleton());
};
