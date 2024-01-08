import React, { useEffect, useState } from 'react'

const Market = () => {
  const [bitcoinData,setBitcoinData]=useState([]);
  // const [currentPage,setCurrentPage]=useState(1);
  // const
  useEffect(()=>{
    fetchCoinData();
  },[]);
  const fetchCoinData=async()=>{
    const response= await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`);

    const data =await response.json();
    // console.log(data);
    setBitcoinData(data);
  }
  return (
    <div id='market'>
      <div className="markets">
        <h1>Markets Details</h1>
        <br />
        <hr />
        <table>
          <thead>
            <tr>
              <th>Coins</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {bitcoinData.map((coin,index)=>(
              <tr>
                <td>
                  <img src={coin.image} alt={coin.name} />
                  <p>{coin.name}</p>
                </td>
                <td>${coin.current_price}</td>
                <td>{coin.market_cap_change_percentage_24h.toFixed(2)}%</td>
                <td>${coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Market