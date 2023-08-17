import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {useEffect , useState} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


interface Stock {
    symbol: string,
    name: string,
    price: number,
    changesPercentage: number
}

const StockPriceChangeCharts = () => {
    const [priceChangeList, setPriceChangeList] = useState<Stock[]>([]);
    const [error, SetError] = useState('')

    useEffect(() => {
        axios.get<Stock[]>((import.meta.env.VITE_REACT_APP_MARKET_MAJORS_INDEXES))
        .then((res) => {
            let stockPriceData = res.data.slice(0,10)
            console.log(stockPriceData)
            setPriceChangeList((stockPriceData))
        })
        .catch(err => SetError(err.message))
    }, [])


  return (
    <div>
        <h6>US Market closes in</h6>
        {error && <p className='text-danger'>{error}</p>}
        {priceChangeList.map(priceChange => 
        <Row key={priceChange.name}>
        <Col>{priceChange.symbol}</Col>
        <Col>{priceChange.price}({priceChange.changesPercentage}%)</Col>
        </Row>
           
        )}
    </div>
  )
}

export default StockPriceChangeCharts