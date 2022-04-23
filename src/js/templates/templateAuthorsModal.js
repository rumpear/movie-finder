import iconCloseButton from '../../assets/icons/sprite.svg';

import auth_brad_pitt from '../../assets/photos/brad_pitt.jpg';
import auth_clooney from '../../assets/photos/auth_clooney.jpg';
import auth_joey from '../../assets/photos/auth_joey.jpg';
import auth_jeniffer from '../../assets/photos/auth_jeniffer.jpg';
import auth_monica from '../../assets/photos/auth_monica.jpg';
import auth_perry from '../../assets/photos/auth_perry.jpg';
import auth_ross from '../../assets/photos/auth_ross.jpg';
import auth_mike from '../../assets/photos/auth_mike.jpg';
import links from '../../assets/icons/share.svg';

export const templateAuthorsModal = (langPack, language) => `
    <div class="modal">
      <button class="close-modal-button" type="button" data-modal-close data-action="close-modal">
      <svg class="close-modal-button__icon" alt="close"  data-action="close-modal">
      <use href="${iconCloseButton}#modal-close"></use>
      </svg>  
      </button>
      
      <div class="authors">
        <h3 class="authors__title">${langPack.authorsTitle[language]}</h3>
        <ul class="authors__list">
            ${authorsList()}
        </ul>
      </div>
    </div>
`;

const authorsList = () =>
  authorsData
    .map(
      ({ name, img, github, linkedin, facebook }) => `
      <li class="authors__item">
        <div class="author" style="background-image:url(${img})">
          <div class="author__card">
            <h2 class="author__title">${name}</h2>
            <div class="author__icons">
              ${
                github
                  ? ` <a class="author__icon" href="${github}">
                      <svg width="35" height="35">
                        <use href="${links}#github"></use>
                      </svg>
                    </a>`
                  : ''
              }
              ${
                linkedin
                  ? ` <a class="author__icon" href="${linkedin}">
                      <svg width="35" height="35">
                        <use href="${links}#linkedin"></use>
                      </svg>
                    </a>`
                  : ''
              }
              ${
                facebook
                  ? ` <a class="author__icon" href="${facebook}">
                      <svg width="35" height="35">
                        <use href="${links}#facebook"></use>
                      </svg>
                    </a>`
                  : ''
              }
            </div>
          </div>
        </div>
      </li>`
    )
    .join('');

const authorsData = [
  {
    name: 'Roman Grusha',
    img: auth_brad_pitt,
    github: 'https://github.com/rumpear',
    linkedin: 'https://www.linkedin.com/in/roman-grusha-775135206/',
    facebook: 'https://www.facebook.com/r.grusha/',
  },
  {
    name: 'Tatiana Sierkova',
    img: auth_jeniffer,
    github: 'https://github.com/TanuhaSerkova',
    linkedin: '',
    facebook: '',
  },
  {
    name: 'Vasyl Gumeniuk',
    img: auth_clooney,
    github: 'https://github.com/Vasyl-Gumeniuk',
    linkedin: '',
    facebook: '',
  },
  {
    name: 'Vitaliy Zavgorodniy',
    img: auth_ross,
    github: 'https://github.com/VitaliyZavgorodniy',
    linkedin: 'https://www.linkedin.com/in/zavgorodniy-vitaliy/',
    facebook: 'https://www.facebook.com/Vince.Radiant',
  },
  {
    name: 'Vladyslav Rozhenko',
    img: auth_joey,
    github: 'https://github.com/xXMrSnakeXx',
    linkedin: '',
    facebook: '',
  },
  {
    name: 'Aleksey Forunatov',
    img: auth_mike,
    github: 'https://github.com/fortuk',
    linkedin: '',
    facebook: '',
  },
  {
    name: 'Alona Koval',
    img: auth_monica,
    github: '',
    linkedin: '',
    facebook: '',
  },
  {
    name: 'Bezvershuk Dmitriy',
    img: auth_perry,
    github: '',
    linkedin: '',
    facebook: '',
  },
];
