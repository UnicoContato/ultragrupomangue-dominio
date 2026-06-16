document.addEventListener('DOMContentLoaded', () => {
    
    let lastScrollTop = 0;
    const header = document.getElementById('dynamic-header');
    const scrollThreshold = 10;

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (Math.abs(lastScrollTop - currentScroll) <= scrollThreshold) return;

        if (currentScroll > lastScrollTop && currentScroll > 100) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    const privacyModal = document.getElementById('privacy-modal');
    const openPrivacyBtn = document.getElementById('open-privacy-btn');
    const closePrivacyBtn = document.getElementById('close-privacy-btn');
    const closePrivacyConfirm = document.getElementById('close-privacy-confirm');
    const closePrivacyOverlay = document.getElementById('close-privacy-overlay');

    function openModal() {
        privacyModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        privacyModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    openPrivacyBtn.addEventListener('click', openModal);
    closePrivacyBtn.addEventListener('click', closeModal);
    closePrivacyConfirm.addEventListener('click', closeModal);
    closePrivacyOverlay.addEventListener('click', closeModal);

    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});