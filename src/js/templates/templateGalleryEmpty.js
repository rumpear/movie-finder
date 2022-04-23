import image from '../../assets/images/no-gallery.svg';

export const templateGalleryEmpty = (text) => `
  <div class="gallery__message">
    <h2 class="gallery__message_title">${text}</h2>
    <img 
      class="gallery__message_image"
      src=${image} 
      alt="nothing was found"
    />
  </div>
`;
