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
      axios.get<Gainer[]>((import.meta.env.VITE_REACT_APP_BASE_URL))
        .then((res) => {
          setMostGainers(res.data.slice(0,10))})
     }, [])

  return (
    <Container className="sidebar-container" fluid>
      {mostGainers.map(mostGainer => 
      <Row>
        <Col key={mostGainer.id}><h6>{mostGainer.symbol}</h6></Col>
        <Col key={mostGainer.id}><h6>{mostGainer.changesPercentage.toFixed(2)}%</h6></Col>
        <Col key={mostGainer.id}><h6>${mostGainer.price}</h6></Col>
      </Row>)}
    </Container>

  );
};


export default SideBar;
