import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/esm/Col";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


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
  
 
  return (
    <Container className="carousel-container">      
      {error && <p className="text-danger">{error}</p>}
      {priceChangeList.map((priceChange) =>(

        <Col className="card-single" key={priceChange.symbol}>
          <Card  style={{ width: "15rem" }}>
            <Card.Body>
            <Col className="chart">
                {/* <Card.Img variant="right" src={"https://placehold.jp/100x50.png"} /> */}

                {priceChangeList && priceChangeList.length > 0 && new Date(priceChange.timestamp) && (
              //     <ResponsiveContainer width={200} height={100}>
              //     <AreaChart
              //       width={100}
              //       height={50}
              //       data={priceChangeList}
              //     >
              //       <CartesianGrid strokeDasharray="3 3" />
              //       <XAxis dataKey="timestamp" />
              //       <YAxis />
              //       <Tooltip />
              //       <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
              //     </AreaChart>
              // </ResponsiveContainer>
                <ResponsiveContainer width={200} height={100}>
                <AreaChart
                  width={100}
                  height={50}
                  data={priceChangeList}
                >
                  <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
                )}   
              </Col>
              <Col>
                <Card.Title>{priceChange.symbol.replace("^", "")}</Card.Title>
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

export default ChartsGroupCard;
