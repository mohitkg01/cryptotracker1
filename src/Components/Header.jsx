import React from 'react'
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <nav id='header'>
        <div className="left-section">
          <Link >
            <p>CryptoTracker</p>
          </Link>
        </div>
        <div className="right-section">
           <HashLink to="/#aboutus">About</HashLink>
            <HashLink to="/#market">Market</HashLink>
            <HashLink to="/#news">News</HashLink>
            <Link to="/footer">Contact</Link>
        </div>
    </nav>
  )
}

export default Header