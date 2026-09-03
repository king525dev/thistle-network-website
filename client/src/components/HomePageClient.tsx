'use client';

import { useEffect } from 'react';
import HomePageRegistration from "@/components/blocks/HomePageRegistration";
import HomePageHero from "@/components/blocks/HomePageHero";
import HomePageEvents from "@/components/blocks/HomePageEvents";
import AboutUs from "@/components/blocks/AboutUs";
import HomePageContact from "@/components/blocks/HomePageContact";
import FAQ from "@/components/blocks/FAQ";

export default function HomePageClient() {
    useEffect(() => {
        // 1. Reveal on scroll
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('in');
                        io.unobserve(e.target); // optional: only animate once
                    }
                });
            },
            { threshold: 0.15 }
        );
        document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

        // 2. FAQ accordion
        const faqButtons = document.querySelectorAll('.faq-q');
        const handleFaqClick = (e: Event) => {
            const btn = e.currentTarget as HTMLElement;
            const item = btn.closest('.faq-item');
            if (!item) return;
            const wasOpen = item.classList.contains('open');
            // close all
            document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
            if (!wasOpen) item.classList.add('open');
        };
        faqButtons.forEach((btn) => btn.addEventListener('click', handleFaqClick));

        // 3. Network overlay animation (simplified from original index.js)
        const svg = document.getElementById('networkOverlay');
        if (svg) {
            const svgNS = 'http://www.w3.org/2000/svg';
            const C = [334, 150];
            const created = new Set([`${C[0]},${C[1]}`]);

            const purple = ['#6B3FA0', '#7A5AAE', '#8F6BC0'];
            const green = ['#2C7A4B', '#3E9564', '#5AAE7D'];

            const edges = [
                { a: C, b: [234, 120], color: purple[0], size: 6 },
                { a: C, b: [194, 150], color: purple[0], size: 6 },
                { a: C, b: [214, 190], color: purple[1], size: 6 },
                { a: C, b: [254, 205], color: purple[1], size: 6 },
                { a: C, b: [434, 120], color: green[0], size: 6 },
                { a: C, b: [474, 150], color: green[0], size: 6 },
                { a: C, b: [454, 190], color: green[1], size: 6 },
                { a: C, b: [414, 205], color: green[1], size: 6 },
                { a: [234, 120], b: [194, 150], color: purple[0], size: 6 },
                { a: [194, 150], b: [214, 190], color: purple[1], size: 6 },
                { a: [214, 190], b: [254, 205], color: purple[1], size: 6 },
                { a: [434, 120], b: [474, 150], color: green[0], size: 6 },
                { a: [474, 150], b: [454, 190], color: green[1], size: 6 },
                { a: [454, 190], b: [414, 205], color: green[1], size: 6 },
                { a: [234, 120], b: [174, 95], color: purple[1], size: 4.5 },
                { a: [194, 150], b: [134, 150], color: purple[1], size: 4.5 },
                { a: [214, 190], b: [164, 225], color: purple[2], size: 4.5 },
                { a: [434, 120], b: [494, 95], color: green[1], size: 4.5 },
                { a: [474, 150], b: [534, 150], color: green[1], size: 4.5 },
                { a: [454, 190], b: [504, 225], color: green[2], size: 4.5 },
                { a: [174, 95], b: [134, 150], color: purple[2], size: 4.5 },
                { a: [134, 150], b: [164, 225], color: purple[2], size: 4.5 },
                { a: [494, 95], b: [534, 150], color: green[2], size: 4.5 },
                { a: [534, 150], b: [504, 225], color: green[2], size: 4.5 },
                { a: [80, 130], b: [100, 160], color: purple[0], size: 3.5 },
                { a: [100, 160], b: [70, 180], color: purple[1], size: 3.5 },
                { a: [70, 180], b: [80, 130], color: purple[2], size: 3.5 },
                { a: [588, 130], b: [568, 160], color: green[0], size: 3.5 },
                { a: [568, 160], b: [598, 180], color: green[1], size: 3.5 },
                { a: [598, 180], b: [588, 130], color: green[2], size: 3.5 },
            ];

            const startDelay = 300;
            const stagger = 130;
            const duration = 600;

            edges.forEach((edge, i) => {
                const { a, b, color, size } = edge;
                const key = (p: number[]) => `${p[0]},${p[1]}`;
                const spawnA = !created.has(key(a));
                const spawnB = !created.has(key(b));
                created.add(key(a));
                created.add(key(b));

                const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
                const line = document.createElementNS(svgNS, 'line');
                line.setAttribute('x1', a[0].toString());
                line.setAttribute('y1', a[1].toString());
                line.setAttribute('x2', b[0].toString());
                line.setAttribute('y2', b[1].toString());
                line.setAttribute('stroke', color);
                line.setAttribute('stroke-width', size > 5 ? '1.8' : '1.3');
                line.style.strokeDasharray = len.toString();
                line.style.strokeDashoffset = len.toString();
                line.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(.3,.1,.2,1)`;
                svg.appendChild(line);

                setTimeout(() => {
                    line.style.strokeDashoffset = '0';
                }, startDelay + i * stagger);

                function spawnNode(pt: number[], r: number) {
                    if (svg !== null && typeof svg === 'object') {
                        const c = document.createElementNS(svgNS, 'circle');
                        c.setAttribute('cx', pt[0].toString());
                        c.setAttribute('cy', pt[1].toString());
                        c.setAttribute('r', r.toString());
                        c.setAttribute('fill', color);
                        c.style.opacity = '0';
                        c.style.transform = 'scale(0.4)';
                        c.style.transition = 'opacity 300ms ease, transform 300ms ease';
                        c.style.transformOrigin = 'center';
                        c.style.transformBox = 'fill-box';
                        svg.appendChild(c);
                        setTimeout(() => {
                            c.style.opacity = '1';
                            c.style.transform = 'scale(1)';
                        }, startDelay + i * stagger + duration);
                    }
                }
                if (spawnA) spawnNode(a, size);
                if (spawnB) spawnNode(b, size);
            });
        }

        // Cleanup
        return () => {
            io.disconnect();
            faqButtons.forEach((btn) => btn.removeEventListener('click', handleFaqClick));
        };
    }, []);

    return (
        <>
            <HomePageHero />
            <HomePageRegistration />
            <HomePageEvents />
            <HomePageContact />
            <AboutUs />
            <FAQ />
        </>
    );
}