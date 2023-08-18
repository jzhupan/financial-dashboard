import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";


//const myUrl = (import.meta.env.VITE_REACT_APP_BASE_URL)

 interface Active {
  name: string,
  change: number,
  price: number,
  symbol: string
}


const SsymboleBarFive = () => {
    const [mostActives, setMostActives] = useState<Active[]>([])
    
    useEffect(() => {
     axios.get<Active[]>((import.meta.env.VITE_REACT_APP_CURRENCY))
       .then((res) => {
         //console.log(res.data.slice(0,10))
         setMostActives(res.data.slice(0,10))
        })
    }, [])


 return (
   <Container className="sidebar-container" >
      <h4>Currencies</h4>
     {mostActives.map(mostActive => 
     <Row className="sidebar-rows">
       <Col className="sidebar-cols" key={mostActive.symbol}>{mostActive.name}</Col>
       <Col className="sidebar-cols" key={mostActive.symbol}>{mostActive.change}</Col>
       <Col className="sidebar-cols" key={mostActive.symbol}>${mostActive.price}</Col>
     </Row>)}
   </Container>

 );
};

export default SsymboleBarFive




