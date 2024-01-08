import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({name,price,img}) => {
    // console.log(name);
  return (
    <Link>
    <div className="coincard">
        <img src={img} alt="" />
        <p>$ {price}</p>
        <h3>{name}</h3>
    </div>
    </Link>
  )
}

export default CoinCard