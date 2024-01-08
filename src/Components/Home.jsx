import React, { useEffect, useState } from 'react'
import { server } from '../index'
import axios from 'axios'
import bitcoinimg from "../Assets/bitcoin.png"
import bitcoinimg2 from "../Assets/ethereum.webp"
import CoinCard from './CoinCard'
import About from './About'
import Market from './Market'
import News from './News'


const Home = () => {
  const[coins,setCoins]=useState([]);
  useEffect(()=>{
    const fetchCoins= async ()=>{
      const {data}=await axios.get(`${server}/coins/markets?vs_currency=USD`)
      // console.log(data);
      setCoins(data);
    }
    fetchCoins();
  },[])
  return (
    <>
    <div className="home">
      <div className="bitcoin-left">
        <img src={bitcoinimg} alt="" />
      </div>
      <div className="center-text">
        <h1>Crypto Made Simple <br/> <span>Get Started Today</span></h1>
      </div>
      <div className="bitcoin-right">
        <img src={bitcoinimg2} alt="" />
      </div>
    </div>
    {coins.map((i,index)=>(
      <CoinCard
        name={i.name}
        img={i.image}
        price={i.current_price}
      />
    ))}
    <About/>
    <Market/>
    <News/>
    </>
  )
}

export default Home