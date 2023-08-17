import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";


//const myUrl = (import.meta.env.VITE_REACT_APP_BASE_URL)

 interface Loser {
  symbol: string,
  id: number,
  changesPercentage: number,
  price: number
}


const SideBarTwo = () => {
    const [mostLosers, setMostLosers] = useState<Loser[]>([])
    
    useEffect(() => {
     axios.get<Loser[]>((import.meta.env.VITE_REACT_APP_MOST_LOSERS_URL))
       .then((res) => {
         setMostLosers(res.data.slice(0,10))})
    }, [])


 return (
   <Container className="sidebar-container" fluid>
          <h4>Most Losers</h4>
     {mostLosers.map(mostLoser => 
     <Row className="sidebar-rows">
       <Col key={mostLoser.symbol}>{mostLoser.symbol}</Col>
       <Col key={mostLoser.symbol}>{mostLoser.changesPercentage.toFixed(2)}%</Col>
       <Col key={mostLoser.symbol}>${mostLoser.price}</Col>
     </Row>)}
   </Container>

 );
};

export default SideBarTwo




