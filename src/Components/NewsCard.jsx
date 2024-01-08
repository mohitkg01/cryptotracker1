import React from 'react'

const NewsCard = ({id,title,url,author,img}) => {
  return (
    <div className='newsCard'>
        <img src={img} alt="img" />
        <div>
            <h3>{title}</h3>
            <a href={url} target='blank'><button>Read More</button></a>
        </div>
    </div>
  )
}

export default NewsCard