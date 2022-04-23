import { store } from '../store';

import { templateCardSkeleton } from '../templates/templateCardSkeleton';

export const renderSkeletonGallery = () => {
  const { rootGallery } = store.refs;

  rootGallery.innerHTML = '';
  rootGallery.insertAdjacentHTML('afterbegin', templateCardSkeleton());
};
