import React from 'react'
import {useState,useEffect} from 'react'
import { TextField } from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import { Box } from '@mui/material'
import axios from 'axios'

const LiveSearch = ({setResults}) => {
  const [stockResults, setStockResults] = useState([])
  const chosenStocks =`https://financialmodelingprep.com/api/v3/quote/AAPL,GOOG,META,MSFT,NVDA?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  
  useEffect(() => {
    axios.get(chosenStocks)
    .then((res) => {
      console.log(res.data)
    })
  })


  return (
    <Stack sx={{width: 300, margin: 'auto'}}>
      <Autocomplete 
      id="chosen_stocks"
      getOptionLabel={(stockResults) => `${stockResults.symbol}`}
      options={stockResults.symbol}
      sx={{width: 300}}
      isOptionEqualToValue={(option, value) => ( 
        option.symbol === value.symbol
      )}
      noOptionsText={'Not available'}
      renderOption={(props, stockResults) => (
        <Box component="li" {...props} key={stockResults.id}>
          {stockResults.symbol}
        </Box>
      )}
      renderInput={(params) => <TextField {...params} label={"Search for a stock"}></TextField>} 
      />
    </Stack>
  )
}

export default LiveSearch