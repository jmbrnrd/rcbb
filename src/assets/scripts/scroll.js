import Lenis from '@studio-freight/lenis';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function () {

    const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);

    // lenis.on('scroll', (e) => {
    //     //console.log(e)
    // });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const load = gsap.timeline().to('.overlay', {
        duration: .3,
        opacity: 0,
        delay: 1,
        // height: 0
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: 'center center',
            end: 'bottom top',
            scrub: true,
            markers: true
        }
    });

    tl.to('.bg', {
        y: 200,
        scale: 1.1,
    });

    // tl.to('.logo', {
    //    y: 200
    // });

    // const navLinks = document.querySelectorAll('#navBar a, .hero-nav a');
    // console.log(navLinks);
    //
    // navLinks.forEach((nav) => {
    //     nav.addEventListener('click', () => lenis.scrollTo(nav.getAttribute('href')));
    // });

}
