/*
   Car Customization Website
   Created by lilmutton
   Github : https://github.com/LilMuttonJr
*/

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission animation
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulate submission
        setTimeout(function() {
            alert('Form submitted successfully!');
            // Reset form fields
            document.getElementById('contact-form').reset();
        }, 1000);
    });

    // Hero section animation
    const heroSection = document.querySelector('.hero-section');
    heroSection.classList.add('animate__animated', 'animate__fadeIn');

    // Parallax scrolling effect
    window.addEventListener('scroll', function() {
        const parallaxSections = document.querySelectorAll('.parallax-section');

        parallaxSections.forEach(section => {
            const distanceFromTop = section.getBoundingClientRect().top;
            const parallaxValue = distanceFromTop * 0.5;

            section.style.transform = `translateY(${parallaxValue}px)`;
        });
    });

    // Hover effects
    const hoverElements = document.querySelectorAll('.hover-effect');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('animate__animated', 'animate__bounce');
        });

        element.addEventListener('mouseleave', function() {
            this.classList.remove('animate__animated', 'animate__bounce');
        });
    });

    // Slider transition
    const slider = document.querySelector('.slider');

    slider.addEventListener('click', function() {
        // Code to transition between slides
    });

    // Form validation animation
    const formInputs = document.querySelectorAll('.form-input');

    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            // Code to validate input and apply animation
        });
    });

    // Menu animation
    const menuButton = document.querySelector('.menu-button');
    const menuItems = document.querySelectorAll('.menu-item');

    menuButton.addEventListener('click', function() {
        menuItems.forEach(item => {
            item.classList.toggle('active');
        });
    });

    // Testimonial carousel animation
    const testimonialCarousel = document.querySelector('.testimonial-carousel');

    testimonialCarousel.addEventListener('click', function() {
        // Code to transition between testimonials
    });

    // Scroll reveal effects
    ScrollReveal().reveal('.reveal-element', { delay: 300, duration: 1000, distance: '50px', origin: 'bottom', easing: 'ease-in-out', reset: true });

    // Interactive car customization animation
    const customizationOptions = document.querySelectorAll('.customization-option');

    customizationOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Code to update car visualization based on selected options
        });
    });

    // Animated call-to-action buttons
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('mouseenter', function() {
        this.classList.add('animate__animated', 'animate__pulse');
    });

    ctaButton.addEventListener('mouseleave', function() {
        this.classList.remove('animate__animated', 'animate__pulse');
    });

    // Footer animation
    const footer = document.querySelector('footer');

    footer.classList.add('animate__animated', 'animate__fadeInUp');

    // Background particle animation
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Particles loaded');
    });

    // Modal animation
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
