import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryEl = document.querySelector('.gallery');

// render gallery
const list = galleryItems
  .map(
    el =>
      `<li class="gallery__item">
      <a href="${el.original}" class="gallery__link">
        <img class="gallery__image" src="${el.preview}" alt="${el.description}" data-source="${el.original}">
      </a>
    </li>`
  )
  .join('');
galleryEl.insertAdjacentHTML('afterbegin', list);

// handle click
const handleClickToImage = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  const itemOriginalSize = event.target.dataset.source;
  const handleEsc = event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${itemOriginalSize}">
    </div>
    `,
    {
      closable: true,
      onClose: () => {
        galleryEl.removeEventListener('keydown', handleEsc);
      },
    }
  );

  instance.show();
  galleryEl.addEventListener('keydown', handleEsc);
};

galleryEl.addEventListener('click', handleClickToImage);
