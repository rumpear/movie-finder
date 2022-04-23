export const templateCard = (
  id,
  poster,
  title,
  genresInfo,
  releaseYear,
  vote_average,
  voteShow,
  category
) => `
  <li class="gallery__item">
    <div class="card" data-id="${id}" data-category="${category}">
      <div class="card__thumb" data-id="${id}" data-category="${category}"> 
        <img class="card__image" data-id="${id}"
          data-id="${id}"
          alt="${title}"
          data-category="${category}"
          loading="lazy"
          src="${poster}"
        />
      </div>
      <h4 class="card__title" data-id="${id}" data-category="${category}">${title}</h4>
      <p class="card__text" data-id="${id}" data-category="${category}">
        ${genresInfo} | ${releaseYear}
        ${
          voteShow
            ? '<span class="rating rating_accent">' + vote_average + '</span>'
            : ''
        }
      </p>
    </div>
  </li>
`;
