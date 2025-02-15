
function createParticles() {
    for(let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.width = `${Math.random() * 6 + 2}px`;
        particle.style.height = particle.style.width;
            particle.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(particle);
    }
        }

function initializeCards() {
    document.querySelectorAll('.dev-card').forEach(card => {
        const randomRotation = (Math.random() - 0.5) * 4;
        card.style.setProperty('--rotation', `${randomRotation}deg`);
        
        const polaroid = card.querySelector('.polaroid');
        if (polaroid) {
            const randomImgRotation = (Math.random() - 0.5) * 3;
            polaroid.style.setProperty('--img-rotation', `${randomImgRotation}deg`);
        }
    });
        }

        createParticles();
 initializeCards()
// Intersection Observer for card animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) rotate(var(--rotation))';
        }
    });
        }, {
    threshold: 0.1
})
document.querySelectorAll('.dev-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px) rotate(var(--rotation))';
    observer.observe(card);
});