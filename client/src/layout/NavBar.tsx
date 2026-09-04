import React from 'react';
import Link from "next/link";

const NavBar = () => {
    return (
        <header id="siteHeader">
            <nav className="wrap">
                <Link href={"/"} target={"_blank"} className='brand'>
                    Logo
                    <span className="brand-text">
                        <span className="c-purple">{"Thistle's"}</span> 
                        <span className="c-green">Network</span>
                    </span>
                </Link>

                <ul className="nav-links">
                    <li><Link href={"#audience"}>{"Who it's for"}</Link></li>
                    <li><Link href={"gallery.html"}>Gallery</Link></li>
                    <li><Link href={"news.html"}>News</Link></li>
                    <li><Link href={"#aims"}>Our aims</Link></li>
                    <li><Link href={"#contact"}>Contact</Link></li>
                </ul>
                <div className="nav-cta">
                    <Link href={"#register"} className="btn btn-primary">Register to join</Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar