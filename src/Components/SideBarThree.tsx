import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";


//const myUrl = (import.meta.env.VITE_REACT_APP_BASE_URL)

 interface Active {
  symbol: string,
  id: number,
  changesPercentage: number,
  price: number
}


const SideBarThree = () => {
    const [mostActives, setMostActives] = useState<Active[]>([])
    
    // useEffect(() => {
    //  axios.get<Active[]>((import.meta.env.VITE_REACT_APP_MOST_ACTIVE_URL))
    //    .then((res) => {
    //      setMostActives(res.data.slice(0,10))})
    // }, [])
    useEffect(() => {
        axios.get<Active[]>(require('../assets/MostActives.json'))
          .then((res) => {
            setMostActives(res.data.slice(0,10))})
       }, [])

 return (
   <Container className="sidebar-container" fluid>
          <h5>Most Actives</h5>

     {mostActives.map(mostActive => 
     <Row>
       <Col key={mostActive.symbol}><h6>{mostActive.symbol}</h6></Col>
       <Col key={mostActive.symbol}><h6>{mostActive.changesPercentage.toFixed(2)}%</h6></Col>
       <Col key={mostActive.symbol}><h6>${mostActive.price}</h6></Col>
     </Row>)}
   </Container>

 );
};

export default SideBarThree




