import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend',
    galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" />
            </a>
        </li>
        `;
        }
    ).join('');
};

const myGallery = new SimpleLightbox('ul.gallery a',
    { captionsData: 'alt', captionDelay: 250, captionPosition:'bottom'});
