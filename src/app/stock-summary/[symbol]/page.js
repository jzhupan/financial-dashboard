'use client';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Example from './mainGraph';
import ResponsiveAppBar from '@/app/Global/AppBar';
import RealTimeStockPrices from '@/app/Global/Marquee';
import { MainInfoGraph } from './mainInfoGraph'
import { MainNews } from './mainNews';
import MostActivesTable from '@/app/Global/Components/MostActivesTable';
import MostLosersTable from '@/app/Global/Components/MostLosersTable';
import MostGainersTable from '@/app/Global/Components/MostGainersTable';
import CurrencyTable from '@/app/Global/Components/CurrencyTable';


const Item = styled('div')(({ theme }) => ({

  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));


export default function Page({ params })  {
  const ticker = params.symbol
  const [stockData, setStockData] = useState(false)
  const [error, setError] = useState('')
    
  const historicalChartStock = `https://financialmodelingprep.com/api/v3/historical-chart/30min/${ticker}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`

    useEffect(() => {
      axios.get(historicalChartStock)
      .then((res) => {
        //console.log(res.data.slice(0,14))
        setStockData(res.data.slice(0,14))
      })
      .catch(err => setError(err.message))

    },[])

  return  (
    <>
    <ResponsiveAppBar/>
    <RealTimeStockPrices />

      <Grid container spacing={2} xs={{flexGrow: 1 }}>
        <Grid item xs={12} md={9}>
          <Item >
            <MainInfoGraph symbol={params.symbol}/> 
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <br/>
            <Example 
              data={stockData} 
              componentWidth={370}
              componentHeight={250}
            />
         
        </Grid>
        <Grid item xs={12} md={9} >
          <Item>
            <MainNews symbol={params.symbol}/>            
          </Item>
        </Grid>
        <Grid item xs={12} md={3} sx={{paddingBottom: '15rem'}}>
                <Item><MostGainersTable /></Item>
                <Item><MostLosersTable /></Item>
                <Item><MostActivesTable /></Item>
                <Item><CurrencyTable /></Item> 
        </Grid>
      </Grid>
    </>
  ) 
}