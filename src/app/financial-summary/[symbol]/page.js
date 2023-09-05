'use client';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Example from './mainGraph';


export default function Page({ params })  {
  const ticker = params.symbol
  const [stockdata, setStockData] = useState([])
  const [error, setError] = useState('')
    
  const historicalChartStock = `https://financialmodelingprep.com/api/v3/historical-chart/30min/${ticker}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`

    useEffect(() => {
      axios.get(historicalChartStock)
      .then((res) => {
        console.log(res.data.slice(0,14))
        setStockData(res.data.slice(0,14))
      })
      .catch(err => setError(err.message))

    },[])

  return (
    <>
    <h1>{ticker}'s Daily Historical Chart</h1>
    <Example 
      data={stockdata} 
      componentHeight={570}
      componentWidth={370}
    />
    </>
  )
}