import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="newsletter">
                <div className="wrap nl-grid">
                <div>
                    <h3>Stay looped in</h3>
                    <p>One email a month — events, insight days, and network news.</p>
                </div>
                <form className="nl-form" id="nlForm">
                    <input type="email" placeholder="your@email.com" required/>
                    <button className="btn btn-primary" type="submit">Subscribe</button>
                </form>
                </div>
            </div>

            <div className="wrap foot-main">
                <div className="foot-col">
                <div className="foot-brand">
                    Logo
                    <span className="brand-text"><span className="c-purple">{"Thistle's"}</span> <span className="c-green">Network</span></span>
                </div>
                <p className="foot-desc">A community-led network for current and aspiring apprentices across Scotland.</p>
                <div className="foot-social">
                    <a href="mailto:thistlenetwork@gmail.com" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16v12H7l-3 3V4Z"/></svg></a>
                    <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.45-2.16 2.96V21H9z"/></svg></a>
                    <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
                </div>
                </div>
                <div className="foot-col">
                <h5>Network</h5>
                <ul>
                    <li><a href="index.html#audience">Aspiring apprentices</a></li>
                    <li><a href="index.html#audience">Current apprentices</a></li>
                    <li><a href="index.html#aims">Our aims</a></li>
                    <li><a href="index.html#about">About the committee</a></li>
                </ul>
                </div>
                <div className="foot-col">
                <h5>Get involved</h5>
                <ul>
                    <li><a href="index.html#register">Register to join</a></li>
                    <li><a href="gallery.html">Photo gallery</a></li>
                    <li><a href="news.html">News &amp; announcements</a></li>
                    <li><a href="index.html#contact">Contact us</a></li>
                </ul>
                </div>
                <div className="foot-col">
                <h5>Resources</h5>
                <ul>
                    <li><a href="#">Apprenticeship pathways</a></li>
                    <li><a href="#">Financial literacy guide</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="index.html#events">Event calendar</a></li>
                    <li><a href="index.html#contact">Contact us</a></li>
                </ul>
                </div>
            </div>
            <div className="wrap foot-bottom">
                <span>{"© 2026 The Thistle's Network. All rights reserved."}</span>
                <span>Made by apprentices, for apprentices — Scotland.</span>
            </div>
        </footer>
    )
}

export default Footer