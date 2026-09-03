import React from 'react'

const Header = (
    pageName: string, 
    tagLine: string, 
    description: string
) => {
    return (
        <section className="page-hero">
            <div className="wrap">
                <p className="eyebrow">{pageName}</p>
                <h1>M{tagLine}</h1>
                <p>{description}</p>
            </div>
        </section>
    )
}

export default Header