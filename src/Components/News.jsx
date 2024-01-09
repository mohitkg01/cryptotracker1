import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';

const url="https://newsapi.org/v2/everything?q=bitcoin&pageSize=30&sortBy=publishedAt&apiKey=81132434456849cea39990a91a68bf02";
// const api="ec754296cf0079a77a28a049f4b6d6205b8663d2e2ce6869e578bbba5724c6ad";

const News = () => {
  const [news,setNews]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [newsPerPage]=useState(4);

  const indexOfLastPage=currentPage * newsPerPage;
  // console.log(indexOfLastPage);
  const indexOfFirstPage=indexOfLastPage - newsPerPage;

  const currentPageNum=news.slice(indexOfFirstPage,indexOfLastPage);
  // console.log(currentPageNum);

  const paginate=(pageNumber)=>setCurrentPage(pageNumber);

  useEffect(()=>{
    fetchNews();
  },[]);

  const fetchNews=async ()=>{
    const {data}=await axios.get(`${url}`);
    //console.log(data.articles);
    setNews(data.articles);
  }
  return (
    <div id="news">
      <h1 style={{textAlign:"center",padding:"1rem 0 0 0"}}>Latest News</h1>
      {currentPageNum.map((i,index)=>(
        <NewsCard
        key={index}
        id={i.source.id}
        title={i.title}
        url={i.url}
        author={i.author}
        img={i.urlToImage}/>
      ))}
      <div className="pagination">
        {Array.from({ length: Math.ceil(news.length / newsPerPage)}).map((_, index)=>(
          <button key={index}
          className={currentPage === index + 1 ? 'active':''}
          onClick={() => paginate( index + 1)}>
            {index +1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default News