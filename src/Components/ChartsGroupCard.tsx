import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';

interface Stock {
    symbol: string,
    name: string,
    price: number,
    changesPercentage: number
}

const ChartsGroupCard = () => {

    const [priceChangeList, setPriceChangeList] = useState<Stock[]>([]);
    const [error, SetError] = useState('')

    useEffect(() => {
        axios.get<Stock[]>((import.meta.env.VITE_REACT_APP_MARKET_MAJORS_INDEXES))
            .then((res) => {
                let tenStockPriceChange = res.data.slice(0, 10)
                let topFiveStock = tenStockPriceChange.slice(0, 5)
                console.log(topFiveStock)
                setPriceChangeList(topFiveStock)
            })
            .catch(err => SetError(err.message))
    }, [])


    return (
        <div>
            {error && <p className='text-danger'>{error}</p>}
            {priceChangeList.map(priceChange =>
                <CardGroup className='stockPrice-card-group'>
                    <Card className='card-single'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>{priceChange.symbol}</Card.Title>
                            <Card.Text>
                               {priceChange.name}
                               {priceChange.price} ({priceChange.changesPercentage}%)
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            )}
                
        </div>
    );
}

export default ChartsGroupCard