import Lenis from '@studio-freight/lenis';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function () {

    const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);

    console.log(document.querySelector('.hero'));

    // lenis.on('scroll', (e) => {
    //     //console.log(e)
    // });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const load = gsap.timeline().to('.overlay', {
        duration: .75,
        opacity: 0,
        delay: .5,
        // scaleY: 0,
        // transformOrigin: 'bottom'
    })
        .from('.rs', {
            opacity: 0,
            duration: .2,
            stagger: .075,
            y: -100,
        })
        .from('.the, .cbb', {
            opacity: 0,
            y: 50,
            stagger: .3
        })
        .from('.lines', {
            duration: .2,
            scaleX: 0,
            transformOrigin: 'center',
        })
        .from('.star', {
            rotate: -520,
            transformOrigin: 'center',
            opacity: 0,
            y: 20,
            scale: 1
        })

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: '62% center',
            end: 'bottom top',
            scrub: true,
           // markers: true
        }
    });

    tl.to('.bg', {
        y: 200,
        scale: 1.1,
    });



    const navLinks = document.querySelectorAll('#navBar a, .hero-nav a');
    console.log(navLinks);

    navLinks.forEach((nav) => {
        nav.addEventListener('click', () => lenis.scrollTo(nav.getAttribute('href')));
    });

    const scroller = document.querySelector('.scroller');


}
