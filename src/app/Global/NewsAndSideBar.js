import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';

const NewsAndSideBar = () => {
    const [todaysNews, setTodaysNews] = useState([])
    const [error, setError] = useState('')
    let displayNews

    async function pullNewsData() {
        const response = await fetch(process.env.NEXT_PUBLIC_STOCK_NEWS_URL)
        const responseData = await response.json()
        const topFiveNews = responseData.slice(0, 5)

        setTodaysNews(topFiveNews)
        // displayNews = topFiveNews.map(function(news) {
        //     return (
        //         <Container className="news-container" fluid>
        //             <h2>Stock News</h2>
        //             {error && <p className='text-danger'>{error}</p>} 
        //             <Box key={news.ticker} className='news-section' sx={{ flexGrow: 1 }}>
        //                 <Grid xs={4}>
        //                 <img className='image-news' src={news.image} alt="article-image" />
        //                 <h3>{news.title} </h3>
        //                 </Grid>
        //                 <Grid xs={8}>
        //                     <Item>xs=8</Item>
        //                 </Grid>
        //                 {/* <Col>
        //                 <img className='image-news' src={news.image} alt="article-image" />
        //                 </Col>
        //                 <Col className='news-text-box'>
        //                 <h3>{news.title} </h3>

        //                 <h6>Published: {news.publishedDate}</h6>
        //                 <br />
        //                 <p className='content-paragraph'>"{news.text}"</p>
        //                 <br />
        //                 <h6>Source: {news.site}</h6>
        //                 <a href={`${news.url}`} target="_blank">Click to see full article...</a></Col> */}
        //             </Box>
        //         </Container>
        //     )
        // })   
    }

    useEffect(() => {
        pullNewsData()
    })




  return (
    <div>news</div>
    // <Box sx={{ flexGrow: 1 }}>
    // <Grid container spacing={2}>
    //   <Grid item xs={8}>
    //     <h1>News</h1>

    //   </Grid>
    //   <Grid item xs={4}>
    //     <h1>SideBar</h1>
    //   </Grid>
    // </Grid>
    // </Box>
  )
}

export default NewsAndSideBar