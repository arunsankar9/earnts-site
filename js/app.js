// Earn Technologies Website Interactions

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = mainNav ? mainNav.querySelectorAll('a') : [];

    const setNavState = (open) => {
        if (!navToggle || !mainNav) return;
        navToggle.setAttribute('aria-expanded', String(open));
        mainNav.classList.toggle('open', open);
        document.body.classList.toggle('nav-open', open);
    };

    navToggle?.addEventListener('click', () => {
        const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
        setNavState(!isOpen);
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => setNavState(false));
    });

    document.addEventListener('click', (event) => {
        if (!mainNav || !navToggle) return;
        if (!mainNav.classList.contains('open')) return;
        const clickTarget = event.target;
        if (clickTarget instanceof Node && !mainNav.contains(clickTarget) && !navToggle.contains(clickTarget)) {
            setNavState(false);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setNavState(false);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1100) {
            setNavState(false);
        }
    });

    const handleScroll = () => {
        if (!header) return;
        if (window.scrollY > 24) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const animateElements = document.querySelectorAll('[data-animate]');
    if (animateElements.length > 0) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            animateElements.forEach((element) => {
                element.classList.add('is-visible');
            });
        } else {
            const observer = new IntersectionObserver(
                (entries, obs) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.remove('is-hidden');
                            entry.target.classList.add('is-visible');
                            obs.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.18,
                    rootMargin: '0px 0px -5% 0px'
                }
            );

            animateElements.forEach((element) => {
                element.classList.add('is-hidden');
                observer.observe(element);
            });
        }
    }

    const videoButton = document.querySelector('.video-play');
    videoButton?.addEventListener('click', () => {
        const caption = document.querySelector('.video-caption');
        if (caption) {
            caption.classList.add('is-visible');
            caption.textContent = 'We’ll share the full transformation story after your strategy workshop.';
        }
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });

    const currentYear = new Date().getFullYear();
    const footerCopy = document.querySelector('.footer-bottom p');
    if (footerCopy) {
        footerCopy.innerHTML = `&copy; ${currentYear} Earn Technologies LLC. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>`;
    }

    console.info('%cEarn Technologies — AI Career Transformation', 'color: #61f3d9; font-size: 14px;');
});
