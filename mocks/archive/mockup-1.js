// header scroll state
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
});

// reveal on scroll
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// logo bloom -> network sprouting animation
window.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('.node');
    const edges = document.querySelectorAll('.edge');
    const order = ['1', '2', '3', '4', '5', '6'];
    order.forEach((n, i) => {
        setTimeout(() => {
            document.querySelector('.edge[data-n="' + n + '"]').classList.add('show');
            document.querySelector('.node[data-n="' + n + '"]').classList.add('show');
        }, 1550 + i * 160);
    });
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
    });
});

// mock join form submission
document.getElementById('joinForm').addEventListener('submit', function (e) {
    e.preventDefault();
    this.classList.add('hidden-form');
    document.getElementById('confirmMsg').classList.add('show');
});

// mock newsletter submission
document.getElementById('nlForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('input');
    const btn = this.querySelector('button');
    btn.textContent = 'Subscribed ✓';
    input.value = '';
    setTimeout(() => { btn.textContent = 'Subscribe'; }, 2500);
});