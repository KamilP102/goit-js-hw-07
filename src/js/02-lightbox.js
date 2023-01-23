import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const imageList = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      alt=${item.description}
    />
  </a>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", imageList);
let lightbox = new SimpleLightbox(".gallery a", {
  sourceAttr: `href`,
  captionsData: `alt`,
  captionDelay : 250,
});