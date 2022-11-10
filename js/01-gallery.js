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
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>
            `;
        }
    ).join('');
};

function onGalleryContainerClick(event) {
    blockDefaultAction(event);
    
    if (event.target.nodeName !== 'IMG') {
        return;
    };

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" 
        width="800" height="600">
    `);
    instance.show();

    galleryContainer.addEventListener('keydown',
        (event) => {
            if (event.code === 'Escape') {
                instance.close();
            };
        });
};

function blockDefaultAction(event) {
    event.preventDefault();
};