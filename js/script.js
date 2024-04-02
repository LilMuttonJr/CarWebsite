/*
   Car Customization Website
   Created by lilmutton
   Github : https://github.com/LilMuttonJr
*/

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        setTimeout(function() {
            alert('Form submitted successfully!');
            document.getElementById('contact-form').reset();
        }, 1000);
    });

    const heroSection = document.querySelector('.hero-section');
    heroSection.classList.add('animate__animated', 'animate__fadeIn');

    window.addEventListener('scroll', function() {
        const parallaxSections = document.querySelectorAll('.parallax-section');

        parallaxSections.forEach(section => {
            const distanceFromTop = section.getBoundingClientRect().top;
            const parallaxValue = distanceFromTop * 0.5;

            section.style.transform = `translateY(${parallaxValue}px)`;
        });
    });

    const hoverElements = document.querySelectorAll('.hover-effect');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('animate__animated', 'animate__bounce');
        });

        element.addEventListener('mouseleave', function() {
            this.classList.remove('animate__animated', 'animate__bounce');
        });
    });

    const slider = document.querySelector('.slider');

    slider.addEventListener('click', function() {
    });

    const formInputs = document.querySelectorAll('.form-input');

    formInputs.forEach(input => {
        input.addEventListener('input', function() {
        });
    });

    const menuButton = document.querySelector('.menu-button');
    const menuItems = document.querySelectorAll('.menu-item');

    menuButton.addEventListener('click', function() {
        menuItems.forEach(item => {
            item.classList.toggle('active');
        });
    });

    const testimonialCarousel = document.querySelector('.testimonial-carousel');

    testimonialCarousel.addEventListener('click', function() {
    });

    ScrollReveal().reveal('.reveal-element', { delay: 300, duration: 1000, distance: '50px', origin: 'bottom', easing: 'ease-in-out', reset: true });

    const customizationOptions = document.querySelectorAll('.customization-option');

    customizationOptions.forEach(option => {
        option.addEventListener('click', function() {
        });
    });

    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('mouseenter', function() {
        this.classList.add('animate__animated', 'animate__pulse');
    });

    ctaButton.addEventListener('mouseleave', function() {
        this.classList.remove('animate__animated', 'animate__pulse');
    });

    const footer = document.querySelector('footer');

    footer.classList.add('animate__animated', 'animate__fadeInUp');

    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Particles loaded');
    });

    const modalButton = document.querySelector('.modal-button');
    const modal = document.querySelector('.modal');

    modalButton.addEventListener('click', function() {
        modal.classList.add('visible');
    });

    modal.addEventListener('click', function(event) {
        if (!event.target.closest('.modal-content')) {
            modal.classList.remove('visible');
        }
    });
});
