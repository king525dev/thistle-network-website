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

// ===== Dense, professional network-growth animation =====
// The logo itself is static. Edges grow outward from the flower's existing
// mesh; each node only appears once the edge reaching it has finished drawing.
(function () {
    const svg = document.getElementById('networkOverlay');
    if (!svg) return;
    const svgNS = 'http://www.w3.org/2000/svg';
    const C = [334, 150]; // approx. centre of the flower's existing node mesh
    const key = p => p[0] + ',' + p[1];
    const created = new Set([key(C)]);

    const purple = ['#6B3FA0', '#7A5AAE', '#8F6BC0'];
    const green = ['#2C7A4B', '#3E9564', '#5AAE7D'];

    // { a:[x,y], b:[x,y], color, size } — size is the radius of the node spawned at b (and a, if a is also new)
    const edges = [
        // primary spokes out of the flower — left (purple)
        { a: C, b: [234, 120], color: purple[0], size: 6 },
        { a: C, b: [194, 150], color: purple[0], size: 6 },
        { a: C, b: [214, 190], color: purple[1], size: 6 },
        { a: C, b: [254, 205], color: purple[1], size: 6 },
        // primary spokes — right (green)
        { a: C, b: [434, 120], color: green[0], size: 6 },
        { a: C, b: [474, 150], color: green[0], size: 6 },
        { a: C, b: [454, 190], color: green[1], size: 6 },
        { a: C, b: [414, 205], color: green[1], size: 6 },
        // triangulation across the primary ring — left
        { a: [234, 120], b: [194, 150], color: purple[0], size: 6 },
        { a: [194, 150], b: [214, 190], color: purple[1], size: 6 },
        { a: [214, 190], b: [254, 205], color: purple[1], size: 6 },
        // triangulation — right
        { a: [434, 120], b: [474, 150], color: green[0], size: 6 },
        { a: [474, 150], b: [454, 190], color: green[1], size: 6 },
        { a: [454, 190], b: [414, 205], color: green[1], size: 6 },
        // second ring, branching further out — left
        { a: [234, 120], b: [174, 95], color: purple[1], size: 4.5 },
        { a: [194, 150], b: [134, 150], color: purple[1], size: 4.5 },
        { a: [214, 190], b: [164, 225], color: purple[2], size: 4.5 },
        // second ring — right
        { a: [434, 120], b: [494, 95], color: green[1], size: 4.5 },
        { a: [474, 150], b: [534, 150], color: green[1], size: 4.5 },
        { a: [454, 190], b: [504, 225], color: green[2], size: 4.5 },
        // outer triangulation — left
        { a: [174, 95], b: [134, 150], color: purple[2], size: 4.5 },
        { a: [134, 150], b: [164, 225], color: purple[2], size: 4.5 },
        // outer triangulation — right
        { a: [494, 95], b: [534, 150], color: green[2], size: 4.5 },
        { a: [534, 150], b: [504, 225], color: green[2], size: 4.5 },
        // small floating clusters, further out still — left
        { a: [80, 130], b: [100, 160], color: purple[0], size: 3.5 },
        { a: [100, 160], b: [70, 180], color: purple[1], size: 3.5 },
        { a: [70, 180], b: [80, 130], color: purple[2], size: 3.5 },
        // small floating clusters — right
        { a: [588, 130], b: [568, 160], color: green[0], size: 3.5 },
        { a: [568, 160], b: [598, 180], color: green[1], size: 3.5 },
        { a: [598, 180], b: [588, 130], color: green[2], size: 3.5 },
    ];

    const startDelay = 300;
    const stagger = 130;
    const duration = 600;

    edges.forEach((edge, i) => {
        const { a, b, color, size } = edge;
        const spawnA = !created.has(key(a));
        const spawnB = !created.has(key(b));
        created.add(key(a));
        created.add(key(b));

        const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        const line = document.createElementNS(svgNS, 'line');
        line.setAttribute('x1', a[0]); line.setAttribute('y1', a[1]);
        line.setAttribute('x2', b[0]); line.setAttribute('y2', b[1]);
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-width', size > 5 ? 1.8 : 1.3);
        line.classList.add('net-edge');
        line.style.strokeDasharray = len;
        line.style.strokeDashoffset = len;
        svg.appendChild(line);

        const fireAt = startDelay + i * stagger;
        setTimeout(() => { line.style.strokeDashoffset = 0; }, fireAt);

        function spawnNode(pt, r) {
            const c = document.createElementNS(svgNS, 'circle');
            c.setAttribute('cx', pt[0]); c.setAttribute('cy', pt[1]); c.setAttribute('r', r);
            c.setAttribute('fill', color);
            c.classList.add('net-node');
            svg.appendChild(c);
            setTimeout(() => c.classList.add('show'), fireAt + duration);
        }
        if (spawnA) spawnNode(a, size);
        if (spawnB) spawnNode(b, size);
    });
})();