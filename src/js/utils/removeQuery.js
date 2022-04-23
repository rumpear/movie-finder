export const removeQuery = () => {
  if (history.replaceState) {
    history.replaceState(
      null,
      '',
      location.pathname +
        location.search.replace(/[\?&]id=[^&]+/, '').replace(/^&/, '?') +
        location.hash
    );

    history.replaceState(
      null,
      '',
      location.pathname +
        location.search.replace(/[\?&]category=[^&]+/, '').replace(/^&/, '?') +
        location.hash
    );
  }
};
