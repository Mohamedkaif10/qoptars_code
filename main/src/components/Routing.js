import React from 'react';
import './Routing.css'; // Import the external CSS file
import Img_1 from "../images/RoutingImgone.jpg"
import Button from '../assests/Button';
import Img_2 from "../images/airsonic3.jpeg"
const Routing = () => {
  return (
    <>
    <div className="container">
      <div className="column" ><img  className="image" src={Img_1}></img></div>
      <div className="column_2">
        <p className='Vayu'>Vayu</p>
        <p className='Cam'>Camera</p>
        <p className='Stab'>Stability</p>
        <p className='Endu'>Endurance</p>
        <button>rtwagy</button>
      </div>
    </div>
    <div className="container">
      <div className="column_2" >
        <p className='Air'>Air FPV</p>
        <p className='AirS'>Air SonicS</p>
        <p className='AirC'>Air Cine</p>
        <button className='button_2'>eioagj</button>
      </div>
      <div className="column"><img className="image" src={Img_2}></img></div>
    </div>
    </>
  );
};

export default Routing;