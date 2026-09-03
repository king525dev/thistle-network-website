import React from 'react'

const Header = (
    pageName: string, 
    tagLine: string, 
    description: string
) => {
    return (
        <section className="page-hero">
            <div className="wrap">
                <p className="eyebrow">Gallery</p>
                <h1>Moments from the network.</h1>
                <p>A look back at insight days, socials and meet-ups from across Scotland — new photos go up after every event.</p>
            </div>
        </section>
    )
}

export default Header