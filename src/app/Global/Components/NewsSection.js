import React, { useEffect, useState } from 'react'
import { Box, Container } from '@mui/system';
import axios from 'axios';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { Divider } from '@mui/material';


const Item = styled('div')(({ theme }) => ({

  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '2px 0 2px 0 solid ',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

const NewsSection = () => {

  const [todaysNews, setTodaysNews] = useState([])
  const [error, setError] = useState('')
  

    useEffect(() => {
      axios.get(process.env.NEXT_PUBLIC_STOCK_NEWS_URL)
      .then((res) => { 
      const topFiveNews = res.data.slice(0, 10)
      //console.log(topFiveNews)
      setTodaysNews(topFiveNews)
      })
      .catch(err => setError(err.message))
          
    },[])

    

  return (
    <Container maxWidth="false" >
      <h1 className='news-title'>Latest News</h1>
      <Divider />
      <Box sx={{ maxwidth: '100vh',  alignItems: 'center'}}>
        {error && <p className='text-danger'>{error}</p>}
        {todaysNews && todaysNews.map((news) => (
          <Grid container spacing={2} xs={{flexGrow: 1 }}>
          <Grid item xs={12} md={4}>
            <Item>
            <img src={news.image} width={300} />
            </Item>       
          </Grid>
          <Grid item xs={12} md={8}>
            <Item>
            <h2>{news.title}</h2>
            <p width={800}>{news.text}</p>            
            <a href={news.url}>See full article...</a>         
            </Item>   
          </Grid>
          </Grid>
        ))}
        </Box>
</Container>
  )}

export default NewsSection