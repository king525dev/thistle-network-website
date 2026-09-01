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