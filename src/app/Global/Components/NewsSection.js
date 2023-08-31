import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));



const NewsSection = () => {

  const [todaysNews, setTodaysNews] = useState([])
    const [error, setError] = useState('')
  

    useEffect(() => {
      axios.get(process.env.NEXT_PUBLIC_STOCK_NEWS_URL)
      .then((res) => { 
      const topFiveNews = res.data.slice(0, 5)
      //console.log(topFiveNews)
      setTodaysNews(topFiveNews)
      })
      .catch(err => setError(err.message))
          

    },[])

    

  return (
    <Box sx={{ maxwidth: 600, minWidth:200 }}>
        {error && <p className='text-danger'>{error}</p>}
        {todaysNews && todaysNews.map((news) => (
          
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
              <Item><h2>{news.title}</h2>
              <img src={news.image} />
              <br />
              <p>{news.text}</p>
              <br />
                <a href={news.url}>See full article...</a>
              </Item>

            </Stack>
          
        ))
        }
        </Box>

  )}

export default NewsSection