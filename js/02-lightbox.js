import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener('click',
    onGalleryContainerClick);

galleryContainer.insertAdjacentHTML('beforeend',
    galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" />
            </a>
            `;
        }
    ).join('');
};

function onGalleryContainerClick(event) {
    blockDefaultAction(event);
    
    if (event.target.nodeName !== 'IMG') {
        return;
    };
};

function blockDefaultAction(event) {
    event.preventDefault();
};