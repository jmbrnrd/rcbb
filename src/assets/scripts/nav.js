
export default function() {
    console.log('Navigation!');
    const header = document.getElementById('header');
    const navPanel = document.querySelector('.nav-primary');
    const navBtn = document.getElementById('navButton');

    navBtn.addEventListener('click', () => {
        navBtn.classList.toggle('is-active');
        const open = (navPanel.getAttribute('aria-expanded') === 'true');
        if (open) {
            navPanel.setAttribute('aria-expanded', 'false');
            return;
        }
        navPanel.setAttribute('aria-expanded', 'true');
    });
    navPanel.addEventListener('click', () => {
        navPanel.setAttribute('aria-expanded', 'false');
        navBtn.classList.remove('is-active');
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            entry.isIntersecting ? header.classList.remove('active') : header.classList.add('active');
        });
    }, {rootMargin: '-150px'});
    observer.observe(document.getElementById('top'));
}
