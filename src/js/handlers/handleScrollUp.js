import { store } from '../store';

const { scrollUpBtn } = store.refs;

const observer = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) {
    return scrollUpBtn.classList.remove('is-hidden');
  }

  scrollUpBtn.classList.add('is-hidden');
});

observer.observe(store.refs.rootHeader);

export const handleScrollUp = () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

scrollUpBtn.addEventListener('click', handleScrollUp);