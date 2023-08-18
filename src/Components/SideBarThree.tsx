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
    
    useEffect(() => {
     axios.get<Active[]>((import.meta.env.VITE_REACT_APP_MOST_ACTIVE_URL))
       .then((res) => {
         setMostActives(res.data.slice(0,10))})
    }, [])


 return (
   <Container className="sidebar-container" >
      <h4>Most Actives</h4>
     {mostActives.map(mostActive => 
     <Row className="sidebar-rows">
       <Col className="sidebar-cols" key={mostActive.id}>{mostActive.symbol}</Col>
       <Col className="sidebar-cols" key={mostActive.id}>{mostActive.changesPercentage.toFixed(2)}%</Col>
       <Col className="sidebar-cols" key={mostActive.id}>${mostActive.price}</Col>
     </Row>)}
   </Container>

 );
};

export default SideBarThree




