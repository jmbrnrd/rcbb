
import Glightbox from 'glightbox/src/js/glightbox';

export default function () {
    console.log('Glightbox');
    const lightbox = Glightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
}
