import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

// render gallery
const list = galleryItems
  .map(
    el =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${el.original}">
        <img class="gallery__image" src="${el.preview}" alt="${el.description}">
      </a>
    </li>`
  )
  .join('');
galleryEl.insertAdjacentHTML('afterbegin', list);

const lightbox = new SimpleLightbox('.gallery li a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

lightbox.on('show.simplelightbox');

console.log(galleryItems);
