import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';

const url="https://newsapi.org/v2/everything?q=bitcoin&pageSize=30&sortBy=publishedAt&apiKey=81132434456849cea39990a91a68bf02";
const api="ec754296cf0079a77a28a049f4b6d6205b8663d2e2ce6869e578bbba5724c6ad";

const News = () => {
  const [news,setNews]=useState([]);
  useEffect(()=>{
    fetchNews();
  },[]);

  const fetchNews=async ()=>{
    const {data}=await axios.get(`${url}`);
    console.log(data.articles);
    setNews(data.articles);
  }
  return (
    <div id="news">
      <h1>Latest News</h1>
      {news.map((i,index)=>(
        <NewsCard
        key={index}
        id={i.source.id}
        title={i.title}
        url={i.url}
        author={i.author}
        img={i.urlToImage}/>
      ))}
    </div>
  )
}

export default News