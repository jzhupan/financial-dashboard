import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
//import * as StockList from '../assets/StockList.json'
import axios from "axios";

//const TenStockList = StockList.slice(0,10)
//console.log(typeof TenStockList)

export interface Gainer {
  symbol: string;
  name: string;
  change: number;
  changePercentage: number;
  price: number;

}

const SideBar = () => {
     const [gainersList, setGainersList] = useState([])
    
     useEffect(() => {
      axios.get('https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=ba2ee6b27eb00ef8fa8f9c9d556a82bb')
        .then(res => {
          setGainersList(res.data.slice(0,10))})
     })

  return (
    <Container className="sidebar-container" fluid>
      {}
    </Container>
  );
};

export default SideBar;
