import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'

const StockSymbols = () => {
    const [stockSymbols, setStockSymbols] = useState([])
    const [error, setError] = useState("");
    let stockSymbol = stockSymbols;
    
  
        axios
        .get(import.meta.env.VITE_REACT_APP_REAL_TIME_STOCK_PRICE_LIST)
        .then((res) => {
          let stockRes = res.data.map((stock: { name: string; symbol: string; price: number; changesPercentage: number; }) => {
            return {
              "name": stock.name,
              "symbol": stock.symbol,
              "price": stock.price,
              "changesPercentage": stock.changesPercentage
            }
          })
            stockSymbol = stockRes
            //console.log(stockSymbol)
            setStockSymbols(stockSymbol)
        })
        .catch((err) => setError(err.message))
   
    
    console.log(stockSymbol)

  return (
    <div></div>
  )
}

export default StockSymbols