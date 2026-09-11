// header scroll state
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
});

// reveal on scroll
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// mock newsletter submission
const nlForm = document.getElementById('nlForm');
if (nlForm) {
    nlForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const input = this.querySelector('input');
        const btn = this.querySelector('button');
        btn.textContent = 'Subscribed ✓';
        input.value = '';
        setTimeout(() => { btn.textContent = 'Subscribe'; }, 2500);
    });
}

// smooth scroll for in-page TOC links (progressive enhancement)
document.querySelectorAll('.privacy-toc a').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

function toggleMenu() {
    const isOpen = navMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

hamburgerBtn.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
            toggleMenu();
        }
    });
});

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu();
    }
});