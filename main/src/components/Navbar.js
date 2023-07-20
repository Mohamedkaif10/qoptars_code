import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../images/logoW.png";
import Video from "../images/cover.mp4";
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
          <img src={Logo} alt="logo" />
        </div>
        {/*Second Menu*/}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
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
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a className="btn" href="#"><button>Sign Up</button></a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#" target="_blank">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
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
      <div className="Cover">
        <video src={Video} autoPlay loop muted></video>
      <section className="hero-section">
        <div className="hero-section-content">
          <p>Welcome<br />to</p>
          {/*<h1>Qoptars</h1>*/}
          <img src={Logo} alt="logo" />
          <p>Explore.Create.Inspire</p>
        </div>
      </section>
      </div>
    </>
  );
};

export default Navbar;
