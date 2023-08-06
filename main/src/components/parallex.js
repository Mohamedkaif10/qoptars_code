import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


import "./parallex.css"
const HorizontalScroll = () => {
  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);

    
    const sections = gsap.utils.toArray('.panel');
    const container = document.querySelector('.container');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.container',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => '+=' + container.offsetWidth,
      },
    });

    // Cleanup ScrollTrigger when the component is unmounted
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <nav>
        <img src="logo.svg" alt="Logo" />
        <div>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Quotes</a>
        </div>
      </nav>
      <section className="banner">
        <div>
          <h2>Welcome</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <img src="1.svg" alt="Banner Image" />
      </section>
      <div className="container">
        <section className="description panel blue">
          <img src="2.svg" alt="Image 2" />
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
        <section className="panel red">
          <img src="5.svg" alt="Image 5" />
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
      </div>
      <section className="footer">
        <img src="6.svg" alt="Footer Image" />
        <h2>Get A Quote</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi labore
          eius cum perferendis consectetur culpa laboriosam quam, sed ea nihil,
          suscipit, quidem est expedita. Nihil enim obcaecati deleniti eaque
          sed.
        </p>
      </section>
    </div>
  );
};

export default HorizontalScroll;