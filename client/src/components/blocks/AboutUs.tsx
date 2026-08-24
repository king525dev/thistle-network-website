import React from 'react'

const AboutUs = () => {
    return (
        <>
            <section className="aims" id="aims">
                <div className="wrap aims-inner">
                    <p className="eyebrow" style={{justifyContent:"center"}}>Who we are</p>
                    <p className="lead reveal">Thistle Network is a Scottish apprentice community focused on connection, growth and shared opportunity.</p>
                    <p className="body-text reveal">We bring apprentices together across industries, universities and training providers to build confidence, expand networks and create a supportive space for early talent in Scotland.</p>
                    <p className="body-text reveal">Our aim is to make apprenticeships feel connected rather than isolated. Through meet-ups, peer support and collaborative events, we help apprentices develop personally and professionally while contributing to a stronger early-career ecosystem in Scotland.</p>
                    <p className="tagline reveal">Thistle Network is built by Scottish apprentices for Scottish apprentices.</p>
                </div>
            </section>

            
            <section className="how" id="how">
                <div className="wrap">
                    <div className="sec-head center reveal" style={{marginLeft:"auto", marginRight:"auto"}}>
                        <p className="eyebrow" style={{justifyContent:"center"}}>Getting involved</p>
                        <h2>Registration comes first — {"here's"} why.</h2>
                    </div>
                    <div className="how-row">
                        <div className="how-card reveal">
                            <span className="how-num">01 / Register</span>
                            <h4>Tell us about you</h4>
                            <p>A short form — your role, location and employer or training provider, so we can point you to the right group.</p>
                        </div>
                        <div className="how-card reveal">
                            <span className="how-num">02 / Get approved</span>
                            <h4>We review your details</h4>
                            <p>Every registration is checked before access is granted, so our groups stay safe, relevant and apprentice-only.</p>
                        </div>
                        <div className="how-card reveal">
                            <span className="how-num">03 / Join WhatsApp</span>
                            <h4>Get your invite</h4>
                            <p>Once approved, {"you'll"} receive a WhatsApp invite matched to your sector and area. Direct joining {"isn't"} available without registering first.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="activities on-dark">
                <div className="wrap">
                    <div className="sec-head reveal">
                        <p className="eyebrow">What we run</p>
                        <h2>Six ways we show up for apprentices.</h2>
                    </div>
                    <div className="act-grid reveal">
                        <div className="act-cell">
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5"/></svg>
                            <h4>Career access</h4>
                            <p>Insight days, company tours and online Q&amp;As focused on apprenticeship routes.</p>
                        </div>
                        <div className="act-cell">
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14.5 14a5 5 0 0 1 5.5 5"/></svg>
                            <h4>Community</h4>
                            <p>Regional and industry WhatsApp groups, run by apprentices for apprentices.</p>
                        </div>
                        <div className="act-cell">
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>
                            <h4>Events</h4>
                            <p>Career meetups, social mixers and retreats across Scotland.</p>
                        </div>
                        <div className="act-cell">
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                            <h4>Partnerships</h4>
                            <p>Corporate sponsors and organisations widening the apprenticeship pipeline.</p>
                        </div>
                        <div className="act-cell">
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
                            <h4>Visibility</h4>
                            <p>An annual stall at the Big Career Conference and presence at careers fairs.</p>
                        </div>
                        <div className="act-cell">
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"/><path d="M4 19h16M9 8h6M9 12h6"/></svg>
                            <h4>Education</h4>
                            <p>Budgeting, saving and leadership sessions built for people who start earning early.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs