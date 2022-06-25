import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryItems(newGalleryItems) {
    return newGalleryItems.map(({ preview, original, description }) =>
        `<a class="gallery__item" href=${original}>
    <img class="gallery__image"
    src=${preview}
    alt=${description}>
    </a>`).join("");
}

gallery.innerHTML = createGalleryItems(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
    captionClass: 'gallery__image',
    captionsData: 'alt',
    captionDelay: '250'
});

console.log(lightbox)