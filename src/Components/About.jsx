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
      <div>
        <h1>Our Services</h1>
        <div className="ourservices">
            <div><LuPiggyBank size={70}/>
            </div>
            <div><LuPiggyBank size={70}/>
            </div>
            <div><MdOutlineSyncLock size={70}/>
            </div>
            <div><TfiHeadphoneAlt size={70}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About