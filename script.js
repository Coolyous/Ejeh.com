const navbarToggle = document.querySelector('.navbar-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});