import { store } from '../store';

import { handleGallery } from './handleGallery';

export const handleLibType = (e) => {
  const { btnsLibs } = store.refs;
  const link = e.currentTarget;
  const lib = link.getAttribute('data-action');

  btnsLibs.forEach((element) => element.classList.remove('is-active'));
  link.classList.add('is-active');

  store.mode = lib;
  handleGallery();
};

store.refs.btnsLibs.forEach((element) =>
  element.addEventListener('click', handleLibType)
);
