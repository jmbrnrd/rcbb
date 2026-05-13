
import scroll from './scroll';
import glightbox from './glightbox';

scroll();
glightbox();

/**
 * Randomly set the hero images
 */
function setHeroImage() {

    const heroImages = ["May_Gig-_22","May_Gig-_11","May_Gig-_18","May_Gig-_9"];
    const hero = document.querySelector('.hero .bg')

    hero.src =
        'https://res.cloudinary.com/rdl/image/upload/c_scale,f_auto,w_1200/v1707550787/rcbb/images/' +
        heroImages[Math.floor(Math.random() * heroImages.length)];
}
setHeroImage();
