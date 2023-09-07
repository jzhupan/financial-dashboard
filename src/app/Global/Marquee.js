import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TableRow} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function RealTimeStockPrices() {
  const [ priceStocks, setPriceStocks] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_MARKET_MAJORS_INDEXES)
    .then((res) => {
      let realTimeStockPrices = res.data
      //console.log(realTimeStockPrices)
      setPriceStocks(realTimeStockPrices)
    })
  }, [])


  return priceStocks ? (
    <div className='animated-text-box'>
        <marquee direction="left" min-height="50px" behavior="scroll" >
        <Stack direction="row" spacing={3}
        >
      {error && <p className='text-danger'>{error}</p>}
      {priceStocks.map((priceStock) => (
          <>
          <TableRow component="th" >{priceStock.symbol.replace(/[^a-zA-Z0-9]/g, '')}</TableRow> 
          <TableRow >${priceStock.price.toFixed(2)}</TableRow> 
          <TableRow
          style={{
            color: `${priceStock.changesPercentage}`.includes("-")
              ? "red"
              : "green",
          }}
          >
            {priceStock.changesPercentage.toFixed(2)}%
            </TableRow>
          </>
          ))}
        </Stack>
        </marquee>  
    </div>
  ) : (
    <>
    <Skeleton variant="rectangular" maxWidth={false} height={51}/>
    <br />    
    </>

  );
}

export default RealTimeStockPrices