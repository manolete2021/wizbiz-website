const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('#primary-nav');

if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = navToggle.getAttribute('aria-expanded') === 'true';

        navToggle.setAttribute('aria-expanded', String(!isOpen));
        navToggle.setAttribute(
            'aria-label',
            isOpen ? 'Open navigation menu' : 'Close navigation menu'
        );

        primaryNav.classList.toggle('is-open', !isOpen);
    });
}
