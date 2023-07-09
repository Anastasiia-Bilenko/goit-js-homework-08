// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const ulEl = document.querySelector(".gallery");
ulEl.style.listStyle = "none"
const liEl = createListImg(galleryItems);

function createListImg(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    }).join(''); 
}

ulEl.insertAdjacentHTML("beforeend", liEl);


const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
    });
