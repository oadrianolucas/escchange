// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

$(document).ready(function() {
    $('#media').carousel({
        pause: true,
        interval: false,
    });
});