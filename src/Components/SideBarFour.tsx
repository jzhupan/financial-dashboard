import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";


//const myUrl = (import.meta.env.VITE_REACT_APP_BASE_URL)

 interface Active {
  exchangeShortName: string,
  price: number,
  type: string,
  index: number
}


const SideBarFour = () => {
    const [mostActives, setMostActives] = useState<Active[]>([])
    
    useEffect(() => {
     axios.get<Active[]>((import.meta.env.VITE_REACT_APP_STOCK_LIST))
       .then((res) => {
        //console.log(res.data.slice(0,10))
         setMostActives(res.data.slice(0,10))
        })
    }, [])


 return (
   <Container className="sidebar-container" fluid>
      <h4>Stock List</h4>
     {mostActives.map(mostActive => 
     <Row className="sidebar-rows">
       <Col className="sidebar-cols" key={mostActive.index}>{mostActive.exchangeShortName}</Col>
       <Col className="sidebar-cols" key={mostActive.index}>${mostActive.price}</Col>
       <Col className="sidebar-cols" key={mostActive.index}>{(mostActive.type).toUpperCase()}</Col>
     </Row>)}
   </Container>

 );
};

export default SideBarFour




