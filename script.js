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

// logo: network expands outward from the existing mesh (logo itself stays static)
window.addEventListener('DOMContentLoaded', () => {
     const order = ['1', '2', '3', '4', '5', '6', '7', '8'];
     order.forEach((n, i) => {
          setTimeout(() => {
               const edge = document.querySelector('.edge[data-n="' + n + '"]');
               const node = document.querySelector('.node[data-n="' + n + '"]');
               if (edge) edge.classList.add('show');
               if (node) node.classList.add('show');
          }, 500 + i * 260);
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