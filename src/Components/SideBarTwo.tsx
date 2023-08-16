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
          <h5>Most Losers</h5>
     {mostLosers.map(mostLoser => 
     <Row>
       <Col key={mostLoser.symbol}><h6>{mostLoser.symbol}</h6></Col>
       <Col key={mostLoser.symbol}><h6>{mostLoser.changesPercentage.toFixed(2)}%</h6></Col>
       <Col key={mostLoser.symbol}><h6>${mostLoser.price}</h6></Col>
     </Row>)}
   </Container>

 );
};

export default SideBarTwo




