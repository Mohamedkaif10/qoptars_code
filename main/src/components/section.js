import React from "react";
import './section.css';

function Section() {
  return (
    <div>
      <section className="section">
        <div className="box-1">
          <div className="content">
            <div className="heading">Dive into Stunning Aerial <br /> Views with our OneDrone</div>
            <br />
            <br />
            <p className="paragraph">
              Get ready to conquer the skies with our cutting-edge <br />
              quadcopters, packed with features that deliver <br />
              an unmatched aerial experience. Choose OneDrone <br />
              for cinematic aerial videos, surveying landscapes, and<br />
              more.
            </p>
            <br /><br /><br />
            <a href="">
              <button className="button">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div className="box-2">
          <img className="image" src="https://drive.google.com/uc?export=view&amp;id=1EFbb2m_7LadPrnGG1V2B7Rl4hQEUKCr4" alt="Image" />
        </div>
      </section>

      <section className="section">
        <div className="box-1">
          <img className="image" src="https://drive.google.com/uc?export=view&amp;id=1AN1qcD8zvRqV9UgfctbB_ccGxTLKs2i-" alt="Image" />
        </div>
        <div className="box-2">
          <div className="content">
            <div className="heading">FPV Drones for the Ultimate Flying Adventure</div>
            <br />
            <br />
            <p className="paragraph">
              Take your drone piloting skills to the next level with our <br />
              fast and agile FPV drones! These high-performance beasts<br />
              are perfect for racing, exploration, and a truly immersive<br />
              flying experience.
            </p>
            <br /><br /><br />
            <a href="www.google.com">
              <button className="button">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Section