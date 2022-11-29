import React from 'react'

const News = (props) => {
  return (
    <React.Fragment>
        <div style={{overflowY:'scroll',width:'40%'}} className='contentBox'>
            <h1>News</h1>
            <ul>
            {props.news.map(item => 
              <li key={item.headline}>
              <h2>{item.date}</h2>
              <a style={{textDecoration:'none',fontSize:'16px'}} href={item.link}><h3>{item.headline}</h3></a> 
              </li>     
            )}
            
            </ul>
        </div>
    </React.Fragment>
  )
}

export default News
