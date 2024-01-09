import React, { useEffect, useState } from 'react'

const Market = () => {
  const [bitcoinData,setBitcoinData]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [postPerpage]=useState(10);

  useEffect(()=>{
    fetchCoinData();
  },[]);
  const fetchCoinData=async()=>{
    const response= await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`);

    const data =await response.json();
    // console.log(data);
    setBitcoinData(data);
  }
//pagination
  const indexOfLastPage=currentPage * postPerpage;
  console.log(indexOfLastPage);
  const indexOfFirstPage=indexOfLastPage - postPerpage;
  console.log(indexOfFirstPage);
  const currentPosts=bitcoinData.slice(indexOfFirstPage,indexOfLastPage);
console.log(currentPosts);

const PageNumber=(pageNum)=>{
  setCurrentPage(pageNum);
  console.log(pageNum);
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
            {currentPosts.map((coin,index)=>(
              <tr key={index} style={{ "borderBottom":"1px solid black"}}>
                <td style={{"display":"flex","justifyContent":"flex-start"}}>
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
      <div className="pagination">
        {/* {console.log(Array.from)} */}
        {Array.from({ length: Math.ceil(bitcoinData.length / postPerpage)}).map((_,index)=>(
          <button key={index}
          className={currentPage === index + 1 ? 'active' : ''}
          onClick={()=> PageNumber(index +1)}>
            {index + 1}
          </button>
        ))}

      </div>
    </div>
  )
}

export default Market