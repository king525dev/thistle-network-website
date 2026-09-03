import React from 'react'

type Header = {
    pageName: string, 
    tagLine: string, 
    description: string
}

const Header = (
    {pageName, tagLine, description}: Header
) => {
    return (
        <section className="page-hero">
            <div className="wrap">
                <p className="eyebrow">{pageName}</p>
                <h1>{tagLine}</h1>
                <p>{description}</p>
            </div>
        </section>
    )
}

export default Header