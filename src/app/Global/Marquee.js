import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import axios from 'axios';
import { useEffect, useState } from 'react';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function RealTimeStockPrices() {
  const [ priceStocks, setPriceStocks] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_REAL_TIME_STOCK_PRICE_LIST)
    .then((res) => {
      let realTimeStockPrices = res.data
      console.log(realTimeStockPrices)
      setPriceStocks(realTimeStockPrices)
    })
  }, [])


  return (
    <div className='animated-text-box'>
        <marquee direction="left" min-height="50px" behavior="scroll">
        <Stack direction="row" spacing={20}
        >
      {error && <p className='text-danger'>{error}</p>}
      {priceStocks.map((priceStock) => (
          <div>
          <h3>
          {priceStock.symbol} ${priceStock.price.toFixed(2)} {priceStock.changesPercentage.toFixed(2)}%
          </h3>
          </div>
          ))}
        </Stack>
        </marquee>  
    </div>
  );
}

export default RealTimeStockPrices