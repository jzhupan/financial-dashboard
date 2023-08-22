import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/esm/Col";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface StockPriceList {

  name: string,
  symbol: string,
  change: number,
  changesPercentage: number,
  price: number,
  timestamp: number
  stockPriceLists: any,
}

const HistoricalStocks = () => {
  const [stockList, setStockList] = useState<StockPriceList[]>([])
  const [error, SetError] = useState("");
  
  function timeConvert(timestamp){
    const dateTime = new Date(timestamp);
    const hr = dateTime.getUTCHours();
    const min = "0" + dateTime.getUTCMinutes();
    return hr + ':' + min.substring(1)
  }

  useEffect(() => {
    axios
      .get<StockPriceList[]>(import.meta.env.VITE_REACT_APP_COMPANY_QUOTE)
      .then((res) => {
        let OriginalRes = res.data
        let stockPriceLists = OriginalRes.map((OGRes) => (
          {
           "name": OGRes.name,
           "symbol": OGRes.symbol,
           "price": OGRes.price, 
           "change": OGRes.change,
           "changesPercentage": OGRes.changesPercentage,
           "timestamp": timeConvert(OGRes.timestamp) 
          }
       ))
        setStockList(stockPriceLists)
      })

      .catch((err) => SetError(err.message));
  }, []);


  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {/* {stockList.map((stock) => (
        {stock. }
      ))} */}
    </div>
  )
}

export default HistoricalStocks