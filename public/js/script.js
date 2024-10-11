// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Slideshow for Images
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 5000);

// Testimonial Slider
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

// Previous Button Event
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : testimonials.length - 1;
    showSlide(currentSlide);
});

// Next Button Event
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide < testimonials.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
});

// Initialize First Testimonial Slide
showSlide(currentSlide);
