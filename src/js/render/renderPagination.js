import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { store } from '../store';

import { handleGallery } from '../handlers/handleGallery';
import { handleScrollUp } from '../handlers/handleScrollUp';

export const renderPagination = (totalItems = 1) => {
  const { rootPagination } = store.refs;

  if (parseInt(totalItems) < 20) return (rootPagination.innerHTML = '');

  const instance = new Pagination(rootPagination, {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
  });

  instance.on('beforeMove', (e) => {
    store.page = e.page;
    handleScrollUp();
    handleGallery();
  });
};
