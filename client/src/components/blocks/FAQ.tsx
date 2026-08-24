import React from 'react'

const FAQ = () => {
    return (
        <section className="about" id="about">
            <div className="wrap about-grid">
                <div className="reveal">
                    <p className="eyebrow">About the committee</p>
                    <h2>Run by apprentices {"who've"} been where you are.</h2>
                    <p style={{marginTop:"16px", maxWidth:"400px"}}>The {"Thistle's"} Network is led by a small volunteer committee covering events, partnerships, communications and community management — supported by a pool of mentors from across Scottish industry.</p>
                </div>
                <div className="reveal">
                    <div className="faq">
                        <div className="faq-item open">
                            <button className="faq-q">Who can join? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg></button>
                            <div className="faq-a"><p>Any current or aspiring apprentice in Scotland aged 16–25. If {"you're"} an employer or training provider wanting to partner with us, use the contact section below.</p></div>
                        </div>
                        <div className="faq-item">
                            <button className="faq-q">Is it free? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg></button>
                            <div className="faq-a"><p>Yes — joining the network and the WhatsApp groups is free. Some events may have a small ticket cost to cover venue and travel.</p></div>
                        </div>
                        <div className="faq-item">
                            <button className="faq-q">Why {"can't"} I join WhatsApp directly? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg></button>
                            <div className="faq-a"><p>Registration lets us check {"who's "}joining and match you to the right group by sector and location, keeping the space safe and relevant for everyone in it.</p></div>
                        </div>
                        <div className="faq-item">
                            <button className="faq-q">Can employers get involved? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg></button>
                            <div className="faq-a"><p>Absolutely — through insight days, sponsorship, or hosting a stall with us. Reach out via the contact section below.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ