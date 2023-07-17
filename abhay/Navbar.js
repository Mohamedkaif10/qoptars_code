import React, { useState } from 'react'
import "./Navbar.css"
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
            <nav className="main-nav">
            {/*first logo */}
                <div className="logo">
                    <h2>
                        <span>Q</span>optars
                    </h2>
                </div>
            {/*Second Menu*/}
            <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
                <ul>
                    <li>
                        <a href="#">OneDrone</a>
                    </li>
                    <li>
                        <a href="#">AirFPV</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">Sign Up</a>
                    </li>
                </ul>
            </div>

             {/* 3rd social media links */}
             <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="#"
                target="_blank">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburger menu start  */}
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
        </div>
        </div>
      </nav>
            



            {/*hero section*/}
            <section className="hero-section">
            <p>Welcome to</p>
            <h1>Qoptars</h1>
            </section>
            <section className="hero-section">
            {/* <p>Welcome to</p>
            <h1>Qoptars</h1> */}
            </section>

    </>
  )
}

export default Navbar
