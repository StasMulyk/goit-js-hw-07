import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const itemsOnList = document.querySelector(`.gallery`);
const items = makeListMarkup(galleryItems)

function makeListMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class='gallery__item'>
        <a class='gallery__link' href="${original}" >
        <img class='gallery__image'
            src="${preview}"
            data-source='${original}'
            alt='${description}' >
            </a>
        </div>`;
    }).join("");
}

itemsOnList.insertAdjacentHTML('afterbegin', items)

itemsOnList.addEventListener('click', modalShow);

function modalShow(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") { return; };
    {
        const modalWindow = basicLightbox.create(
            `<img src="${event.target.dataset.source}" width="800" height="600">`);
        modalWindow.show()
    }
};



onShow: (instance) => {
    window.addEventListener('click', click2)
}

onclose: (instance) => {
    window.removeEventListener('click', click2)
}

function click2(event) {
    console.log(event.target.classList.containts('basicLightbox'));
    if (event.target.classList.contains('basicLightbox')) {
        instance.close(window.removeEventListener('click', click2));
    }
}
