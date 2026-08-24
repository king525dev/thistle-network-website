import React from 'react'

const HomePageContact = () => {
    return (
        <section className="contact" id="contact">
            <div className="wrap contact-inner">
                <p className="eyebrow" style={{justifyContent:"center"}}>Get in touch</p>
                <h2>Say hello.</h2>
                <a className="contact-email" href="mailto:thistlenetwork@gmail.com">thistlenetwork@gmail.com</a>
            <div className="contact-socials">
                <a className="contact-social" href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.45-2.16 2.96V21H9z"/></svg>
                    LinkedIn
                    </a>
                    <a className="contact-social" href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
                Instagram
                </a>
            </div>
            </div>
        </section>
    )
}

export default HomePageContact