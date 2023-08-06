import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./parallex.css"
import Image_3 from "../images/airsonic3.jpeg"
import Image_1 from "../images/Water_img.jpg"
import Image_2 from "../images/airsonic.jpeg"
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section className="banner">
      </section>
      <div className="container">
        <section className="description panel blue" style={{ backgroundColor: 'black' }}>
        <p className="Aerial_survey">Aerial Survey</p>
          <p className='Aerial_survey_Desc'>
           Transform surveying 
       capabilities with our quadcopter operations,reaching inaccessible areas with ease.
          </p>
          <img src={Image_1} alt="Image 2" />
         
        </section>
        <section className="panel red">
          <img src={Image_2} alt="Image 5" />
          <p className='Aerial_Inspection'>Aerial Inspection</p>
        <p className='Aerial_Inspection_desc'>
        Experience the freedom of aerial inspections, providing unmatched effeciency and comprehensive coverage.
        </p>
        </section>
      </div>
      <section className="footer">
        <img src={Image_3} alt="Footer Image" />
        <p className='Aerial_Videography'>Aerial Videography</p>
        <p className='Aerial_Videography_desc'>
        Take your audience on a visual journey with our cinematic drones, leaving them in awe of your creation
        </p>
      </section>
    </div>
  );
};

export default HorizontalScroll;