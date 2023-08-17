import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";


//const myUrl = (import.meta.env.VITE_REACT_APP_BASE_URL)

 interface Gainer {
  symbol: string,
  id: number,
  changesPercentage: number,
  price: number
}


const SideBar = () => {
     const [mostGainers, setMostGainers] = useState<Gainer[]>([])
    
     useEffect(() => {
      axios.get<Gainer[]>((import.meta.env.VITE_REACT_APP_MOST_GAINERS_URL))
        .then((res) => {
          setMostGainers(res.data.slice(0,10))})
     }, [])


  return (
    <Container className="sidebar-container" fluid>
      <h4>Most Gainers</h4>
      {mostGainers.map(mostGainer => 
      <Row className="sidebar-rows">
        <Col key={mostGainer.id}>{mostGainer.symbol}</Col>
        <Col key={mostGainer.id}>{mostGainer.changesPercentage.toFixed(2)}%</Col>
        <Col key={mostGainer.id}>${mostGainer.price}</Col>
      </Row>)}
    </Container>

  );
};


export default SideBar;
