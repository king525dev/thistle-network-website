const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30));

const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.getElementById('nlForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('input');
    const btn = this.querySelector('button');
    btn.textContent = 'Subscribed ✓';
    input.value = '';
    setTimeout(() => { btn.textContent = 'Subscribe'; }, 2500);
});

// lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.querySelectorAll('.masonry img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
    });
});
document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });