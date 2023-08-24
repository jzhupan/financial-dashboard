import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/esm/Col";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StockSymbols from "./StockSymbols";

interface Stock {
  symbol: string,
  name: string,
  price: number,
  changesPercentage: number,
  timestamp: number
}

const ChartsGroupCard = () => {
  const [priceChangeList, setPriceChangeList] = useState<Stock[]>([]);
  const [error, SetError] = useState("");

  useEffect(() => {
    axios
      .get<Stock[]>(import.meta.env.VITE_REACT_APP_MARKET_MAJORS_INDEXES)
      .then((res) => {
        let tenStockPriceChange = res.data.slice(0, 10);
        let topFiveStock = tenStockPriceChange.slice(0, 5);
        console.log(topFiveStock);
        setPriceChangeList(topFiveStock);
      })
      .catch((err) => SetError(err.message));
  }, []);
  
  let funData = [
    {
      "name": "AAPL",
      "symbol": "Apple",
      "price": 30,
      "changesPercentage": 5,

      "prices": [
        {
          'timestamp': 1,
          'price': 1
        },
        {
          'timestamp': 1,
          'price': 10
        },
        {
          'timestamp': 1,
          'price': 10
        },
        {
          'timestamp': 1,
          'price': 15
        },
        {
          'timestamp': 1,
          'price': 5
        },
        {
          'timestamp': 1,
          'price': 3
        },
        {
          'timestamp': 1,
          'price': 4
        },
        {
          'timestamp': 1,
          'price': 20
        }
      ]
    },
    {
      "name": "GOOL",
      "symbol": "Google",
      "price": 30,
      "changesPercentage": 17.2,
      "prices": [
        {
          'timestamp': 1,
          'price': 10
        },
        {
          'timestamp': 1,
          'price': 5
        },
        {
          'timestamp': 1,
          'price': 10
        },
        {
          'timestamp': 1,
          'price': 15
        },
        {
          'timestamp': 1,
          'price': 400
        },
        {
          'timestamp': 1,
          'price': 3
        },
        {
          'timestamp': 1,
          'price': 230
        },
        {
          'timestamp': 1,
          'price': 20
        }
      ]
    },
  ]
  // let funData = StockSymbols
  // console.log(funData)
  return (
    <Container className="carousel-container">      
      {error && <p className="text-danger">{error}</p>}

      {funData.map((cardInfo) =>(

        <Col className="card-single" key={cardInfo.symbol}>
          <Card  style={{ width: "15rem" }}>
            <Card.Body>
            <Col className="chart">
                {/* <Card.Img variant="right" src={"https://placehold.jp/100x50.png"} /> */}

                {priceChangeList && cardInfo && (
                <ResponsiveContainer width={200} height={100}>
                <AreaChart
                  width={100}
                  height={50}
                  data={cardInfo.prices}
                >
                  <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
                )}   
              </Col>
              <Col>
                <Card.Title>{cardInfo.symbol.replace("^", "")}</Card.Title>
              </Col>
              <Col>
              <small>
                +{cardInfo.price}$ 
                <br />
                ({cardInfo.changesPercentage}%)
              </small>
              </Col>
            </Card.Body>
          </Card>
          </Col>
      ))}
      
    </Container>
  );
};

export default ChartsGroupCard;
