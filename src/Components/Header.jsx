import React from 'react'
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <nav>
        <div className="left-section">
          <Link >
            <p>CryptoTracker</p>
          </Link>
        </div>
        <div className="right-section">
           <HashLink to="/#aboutus">Aboutusss</HashLink>
            <HashLink to="/#market">Market</HashLink>
            <HashLink to="/#news">News</HashLink>
            <Link to="/#contact">Contact us</Link>
        </div>
    </nav>
  )
}

export default Header