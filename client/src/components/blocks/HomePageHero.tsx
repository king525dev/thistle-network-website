import React from 'react'

const HomePageHero = () => {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Scotland · Apprentice-led community</p>
          <h1>Connecting apprentices across Scotland</h1>
          <p className="hero-sub">{"The Thistle's Network brings current and aspiring apprentices together — for advice, friendship, and the social side of work that's easy to miss when you didn't go down the university route."}</p>
          <div className="hero-ctas">
            <a href="#register" className="btn btn-primary">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20v-6M12 4v2M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/><circle cx="12" cy="12" r="4"/></svg>
              Register to join
            </a>
            <a href="#events" className="btn btn-ghost">See our events</a>
          </div>
          <p className="hero-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 2"/></svg>
            Free to join · WhatsApp access is granted after registration
          </p>
        </div>
        <div className="hero-stage">
          <div className="logo-lockup">
            <div className="logo-frame">
              <div className="glow"></div>
              Logo
              <svg className="overlay" id="networkOverlay" viewBox="0 0 668 373" xmlns="http://www.w3.org/2000/svg"></svg>
            </div>
          </div>
          <div className="wordmark-lockup">
            <div className="line1">T{"he Thistle's"}</div>
            <div className="line2">Network</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePageHero