// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Keep FormSubmit redirect on this site's thank-you page for local and live domains.
const membershipNextUrl = document.getElementById('membership-next-url');
if (membershipNextUrl) {
    membershipNextUrl.value = `${window.location.origin}/danke.html`;
}

const eventSlideshow = document.querySelector('.event-slideshow');
if (eventSlideshow) {
    const slides = Array.from(eventSlideshow.querySelectorAll('.event-slide'));
    const dots = Array.from(eventSlideshow.querySelectorAll('.event-slide-dot'));
    const previousButton = eventSlideshow.querySelector('.event-slide-prev');
    const nextButton = eventSlideshow.querySelector('.event-slide-next');
    let activeSlide = 0;
    let slideTimer;

    const showSlide = (index) => {
        activeSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle('is-active', slideIndex === activeSlide);
        });

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('is-active', dotIndex === activeSlide);
        });
    };

    const startSlideshow = () => {
        slideTimer = window.setInterval(() => {
            showSlide(activeSlide + 1);
        }, 5000);
    };

    const restartSlideshow = () => {
        window.clearInterval(slideTimer);
        startSlideshow();
    };

    previousButton.addEventListener('click', () => {
        showSlide(activeSlide - 1);
        restartSlideshow();
    });

    nextButton.addEventListener('click', () => {
        showSlide(activeSlide + 1);
        restartSlideshow();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            restartSlideshow();
        });
    });

    startSlideshow();
}

// Navbar background stays solid (optional - remove if not needed)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

console.log('Skateboard Verein Uster website loaded! 🛹');
