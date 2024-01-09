import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import { BsArrowUpCircleFill } from "react-icons/bs";
import {HashLink} from "react-router-hash-link";

const url="https://newsapi.org/v2/everything?q=bitcoin&apiKey=81132434456849cea39990a91a68bf02";

const Footer = () => {
  const [news,setNews]=useState([]);
  useEffect(()=>{
   urldata();
  },[]);

  const urldata = async() =>{

    const data= await axios.get(`${url}`); 
    // console.log(data.data.articles);
    const firstTwoarticles=data.data.articles.slice(0,2);
    setNews(firstTwoarticles);
  }
  return (
    <footer className="footer">
      <div className="footerlogo">
        <h2>CryptoTracker</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, corrupti.</p>
      </div>
      <div className="socialMedia">
        <AiFillFacebook size="2rem" color='red'/>
        <AiFillInstagram size="2rem" color='red'/>
        <AiFillTwitterSquare size="2rem" color='red'/>
        <AiFillYoutube size="2rem" color='red'/>
      </div>
  
      <HashLink to="/#header" className='scrollup'><BsArrowUpCircleFill/></HashLink>
      
      <div className="location">
        <h2>Location</h2>
        <div className="locationIcon">
          <FiMapPin size="2rem"/>
          <h4>London</h4>
        </div>
        <p>221B Baker Street London</p>
      </div>
    </footer>
  )
};

export default Footer