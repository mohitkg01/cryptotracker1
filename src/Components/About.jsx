import React from 'react'
import img from "../Assets/aboutUs.webp";
import { LuPiggyBank } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineSyncLock } from "react-icons/md";

const About = () => {
  return (
    <div id='aboutus'>
      <h1>Everything About Us</h1>
      <div className="aboutusdiv">
        <div>
          <h3>Innovation Brings Life to Our Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis laudantium velit qui ipsa sed, rem dolore repellendus recusandae non.</p>
        </div>
        <img src={img} alt="" />
      </div>
      <div className='services'  >
        <h1>Our Services</h1>
        <div className="ourservices">
            <div>
              <LuPiggyBank size={70}/>
             <p>Safe transaction</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div><LuPiggyBank size={70}/>
            <p>Safe transaction</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div><MdOutlineSyncLock size={70}/>
            <p>Real Time Query about crypto</p>
            <p>Lorem ipsum dolor sit amet consectetur,elit maiores ox.</p>
            </div>
            <div><TfiHeadphoneAlt size={70}/>
            <p>Phone Support and Help</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About