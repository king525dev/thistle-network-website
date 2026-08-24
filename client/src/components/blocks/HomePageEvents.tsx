import React from 'react';
import Link from "next/link";
import Image from "next/image";

const HomePageEvents = () => {
    return (
        <section className="events" id="events">
            <div className="wrap">
                <div className="sec-head reveal">
                    <p className="eyebrow">Events</p>
                    <h2>{"What's"} coming up, and what just happened.</h2>
                </div>
                <div className="events-grid">
                    <div className="flier reveal">
                        <span className="flier-tag">Next event</span>
                        <h3>Apprentice Insight Night — Edinburgh</h3>
                        <div className="flier-meta">
                            <div>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>
                                Thursday 24 September · 6:00–8:30pm
                            </div>
                            <div>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21c-4.5-3.5-8-7-8-11a8 8 0 0 1 16 0c0 4-3.5 7.5-8 11Z"/><circle cx="12" cy="10" r="3"/></svg>
                                Venue confirmed on registration
                            </div>
                        </div>
                        <p className="desc">An evening of speed-networking with employer partners, plus a short panel on switching sectors mid-apprenticeship. Open to registered apprentices only.</p>
                        <a href="#register" className="btn">Register to attend</a>
                    </div>
                    <div className="last-event reveal">
                        <span className="a-tag" style={{color:"var(--fern-deep)", opacity:"1"}}>Last event</span>
                        <h3>Summer Meet-Up — Glasgow</h3>
                        <p className="recap">Over 60 apprentices came together in Glasgow for an evening of speed-networking, giveaways, and easily the loudest quiz round of the year.</p>
                        <div className="gallery-preview">
                            <Link href="gallery.html"><Image src="https://picsum.photos/seed/thistle-event-a/700/900" alt="Apprentices chatting at the Glasgow summer meet-up"/></Link>
                            <Link href="gallery.html"><Image src="https://picsum.photos/seed/thistle-event-b/500/440" alt="Group photo from the summer meet-up"/></Link>
                            <Link href="gallery.html"><Image src="https://picsum.photos/seed/thistle-event-c/500/440" alt="Apprentices networking over drinks"/></Link>
                        </div>
                        <a href="gallery.html" className="btn btn-ghost" style={{marginTop: "18px"}}>See the full gallery →</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePageEvents