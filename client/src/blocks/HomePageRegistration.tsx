import React from 'react'

const HomePageRegistration = () => {
    return (
        <section className="audience" id="audience">
            <div className="wrap">
            <div className="sec-head reveal">
                <p className="eyebrow">Two paths, one network</p>
                <h2>{"Whichever stage you're at, there's a place here."}</h2>
            </div>
            <div className="audience-grid">
                <div className="a-card aspiring reveal">
                <span className="a-tag">For Aspiring Apprentices</span>
                <h3>Get application-ready</h3>
                <p>Still at school or college and weighing up an apprenticeship? Get the insight, mentoring and confidence to apply well.</p>
                <ul className="a-list">
                    <li><span className="dot"></span>Apprenticeship-focused insight days with Scottish employers</li>
                    <li><span className="dot"></span>Mentoring and mock interviews from current apprentices</li>
                    <li><span className="dot"></span>Clear, honest guidance on pathways and providers</li>
                </ul>
                <a href="#register" className="btn btn-primary">Register to join</a>
                </div>
                <div className="a-card current reveal">
                <span className="a-tag">For Current Apprentices</span>
                <h3>Find your people</h3>
                <p>Already on the job? Get matched to a WhatsApp group by industry and location, plus the social side university apprentices often miss out on.</p>
                <ul className="a-list">
                    <li><span className="dot"></span>Industry and regional WhatsApp groups (registration required)</li>
                    <li><span className="dot"></span>Socials, trips and meet-ups across Scotland</li>
                    <li><span className="dot"></span>Financial literacy sessions built for early earners</li>
                </ul>
                <a href="#register" className="btn btn-ghost">Register to join</a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default HomePageRegistration