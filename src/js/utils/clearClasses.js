export const clearActive = (root) =>
  root
    .querySelectorAll('.active')
    .forEach((element) => element.classList.remove('active'));
