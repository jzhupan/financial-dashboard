import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
}

const ChartsGroupCardTwo = () => {
  const [priceChangeList, setPriceChangeList] = useState<Stock[]>([]);
  const [error, SetError] = useState("");

  useEffect(() => {
    axios
      .get<Stock[]>(import.meta.env.VITE_REACT_APP_MARKET_MAJORS_INDEXES)
      .then((res) => {
        let tenStockPriceChange = res.data.slice(0, 10);
        let topFiveStock = tenStockPriceChange.slice(5, 10);
        //console.log(topFiveStock);
        setPriceChangeList(topFiveStock);
      })
      .catch((err) => SetError(err.message));
  }, []);

  return (
    <Container className="carousel-container">
      {error && <p className="text-danger">{error}</p>}
      {priceChangeList.map((priceChange) => (
        <Col className="card-single" key={priceChange.symbol}>
          <Card  style={{ width: "15rem" }}>
            <Card.Body>
            <Col>
                <Card.Img variant="right" src={"https://placehold.jp/100x50.png"} />
              </Col>
              <Col>
                <Card.Title>{priceChange.symbol.replace("^", "")} </Card.Title>

              </Col>

              <Col>
              <small>
                +{priceChange.price}$ 
                <br />
                ({priceChange.changesPercentage}%)
              </small>
              </Col>
            </Card.Body>
          </Card>
          </Col>
      ))}
      
    </Container>
  );
};

export default ChartsGroupCardTwo;
