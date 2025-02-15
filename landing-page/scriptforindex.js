document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        offset: 100,
        once: false,
        mirror: true
    });
    
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loadingOverlay);

    window.addEventListener('load', () => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.remove();
        }, 500);
    });

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

    const templateSlider = document.querySelector('.template-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    templateSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - templateSlider.offsetLeft;
        scrollLeft = templateSlider.scrollLeft;
    });

    templateSlider.addEventListener('mouseleave', () => isDown = false);
    templateSlider.addEventListener('mouseup', () => isDown = false);

    templateSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - templateSlider.offsetLeft;
        const walk = (x - startX) * 2;
        templateSlider.scrollLeft = scrollLeft - walk;
    });

    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.transform = 'translateY(0)';
            return;
        }
        
        navbar.style.transform = currentScroll > lastScroll ? 'translateY(-100%)' : 'translateY(0)';
        lastScroll = currentScroll;
    });


    const heroText = document.querySelector('.hero-content h1');
    const originalText = heroText.textContent;
    heroText.textContent = '';
    let charIndex = 0;

    function writeText() {
        if (charIndex < originalText.length) {
            heroText.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(writeText, 100);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                writeText();
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(heroText);
});