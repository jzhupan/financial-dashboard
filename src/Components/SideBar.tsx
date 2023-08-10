import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";

// let StockList = [
//   {
//   "symbol": "ZVZZT",
//   "name": "",
//   "change": 40.49,
//   "price": 59.2,
//   "changesPercentage": 216.4084
//   },
//   {
//   "symbol": "TNGX",
//   "name": "Tango Therapeutics, Inc.",
//   "change": 3.98,
//   "price": 7.81,
//   "changesPercentage": 103.9165
//   },
//   {
//   "symbol": "DBTX",
//   "name": "Decibel Therapeutics, Inc.",
//   "change": 2.24,
//   "price": 5.03,
//   "changesPercentage": 80.2868
//   },
//   {
//   "symbol": "BNTC",
//   "name": "Benitec Biopharma Inc.",
//   "change": 1.27,
//   "price": 3.2,
//   "changesPercentage": 65.8031
//   },
//   {
//   "symbol": "IDAI",
//   "name": "T Stamp Inc.",
//   "change": 0.87,
//   "price": 2.45,
//   "changesPercentage": 55.0633
//   },
//   {
//   "symbol": "SNCE",
//   "name": "Science 37 Holdings, Inc.",
//   "change": 0.1438,
//   "price": 0.4139,
//   "changesPercentage": 53.2395
//   },
//   {
//   "symbol": "HUDAR",
//   "name": "Hudson Acquisition I Corp.",
//   "change": 0.1099,
//   "price": 0.32,
//   "changesPercentage": 52.3084
//   },
//   {
//   "symbol": "KBNT",
//   "name": "Kubient, Inc.",
//   "change": 0.209,
//   "price": 0.68,
//   "changesPercentage": 44.3737
//   },
//   {
//   "symbol": "SCPS",
//   "name": "Scopus BioPharma Inc.",
//   "change": 0.017,
//   "price": 0.057,
//   "changesPercentage": 42.5
//   },
//   {
//   "symbol": "PSTX",
//   "name": "Poseida Therapeutics, Inc.",
//   "change": 0.75,
//   "price": 2.73,
//   "changesPercentage": 37.8788
//   },
//   {
//   "symbol": "PLAG",
//   "name": "Planet Green Holdings Corp.",
//   "change": 0.1684,
//   "price": 0.651,
//   "changesPercentage": 34.8943
//   },
//   {
//   "symbol": "ACGN",
//   "name": "Aceragen, Inc.",
//   "change": 0.15,
//   "price": 0.58,
//   "changesPercentage": 34.8837
//   },
//   {
//   "symbol": "GSUN",
//   "name": "Golden Sun Education Group Limited",
//   "change": 0.268,
//   "price": 1.06,
//   "changesPercentage": 33.8384
//   },
//   {
//   "symbol": "MRTX",
//   "name": "Mirati Therapeutics, Inc.",
//   "change": 9.2,
//   "price": 37,
//   "changesPercentage": 33.0935
//   },
//   {
//   "symbol": "OPRT",
//   "name": "Oportun Financial Corporation",
//   "change": 1.59,
//   "price": 6.84,
//   "changesPercentage": 30.2857
//   },
//   {
//   "symbol": "BIRD",
//   "name": "Allbirds, Inc.",
//   "change": 0.38,
//   "price": 1.66,
//   "changesPercentage": 29.6875
//   },
//   {
//   "symbol": "UIHC",
//   "name": "United Insurance Holdings Corp.",
//   "change": 1.58,
//   "price": 7.21,
//   "changesPercentage": 28.0639
//   },
//   {
//   "symbol": "PMVP",
//   "name": "PMV Pharmaceuticals, Inc.",
//   "change": 1.88,
//   "price": 8.67,
//   "changesPercentage": 27.6878
//   },
//   {
//   "symbol": "CTG",
//   "name": "Computer Task Group, Incorporated",
//   "change": 2.2,
//   "price": 10.2,
//   "changesPercentage": 27.5
//   },
//   {
//   "symbol": "BOOM",
//   "name": "DMC Global Inc.",
//   "change": 4.71,
//   "price": 22.26,
//   "changesPercentage": 26.8376
//   },
//   {
//   "symbol": "TDUP",
//   "name": "ThredUp Inc.",
//   "change": 0.84,
//   "price": 4.06,
//   "changesPercentage": 26.087
//   },
//   {
//   "symbol": "AHG",
//   "name": "Akso Health Group",
//   "change": 0.072,
//   "price": 0.369,
//   "changesPercentage": 24.2424
//   },
//   {
//   "symbol": "ARRY",
//   "name": "Array Technologies, Inc.",
//   "change": 4.3,
//   "price": 22.18,
//   "changesPercentage": 24.0492
//   },
//   {
//   "symbol": "DMAQR",
//   "name": "Deep Medicine Acquisition Corp.",
//   "change": 0.044,
//   "price": 0.23,
//   "changesPercentage": 23.6559
//   },
//   {
//   "symbol": "EMKR",
//   "name": "EMCORE Corporation",
//   "change": 0.146,
//   "price": 0.8198,
//   "changesPercentage": 21.6682
//   },
//   {
//   "symbol": "CLEU",
//   "name": "China Liberal Education Holdings Limited",
//   "change": 0.44,
//   "price": 2.56,
//   "changesPercentage": 20.7547
//   },
//   {
//   "symbol": "CELH",
//   "name": "Celsius Holdings, Inc.",
//   "change": 29.31,
//   "price": 172.67,
//   "changesPercentage": 20.445
//   },
//   {
//   "symbol": "AZTA",
//   "name": "Azenta, Inc.",
//   "change": 9.76,
//   "price": 57.76,
//   "changesPercentage": 20.3333
//   },
//   {
//   "symbol": "ASCBR",
//   "name": "A SPAC II Acquisition Corporation",
//   "change": 0.0171,
//   "price": 0.1026,
//   "changesPercentage": 20
//   },
//   {
//   "symbol": "LPSN",
//   "name": "LivePerson, Inc.",
//   "change": 0.76,
//   "price": 4.75,
//   "changesPercentage": 19.0476
//   },
//   {
//   "symbol": "BROS",
//   "name": "Dutch Bros Inc.",
//   "change": 5,
//   "price": 32.99,
//   "changesPercentage": 17.8635
//   },
//   {
//   "symbol": "BNOX",
//   "name": "Bionomics Limited",
//   "change": 0.23,
//   "price": 1.53,
//   "changesPercentage": 17.6923
//   },
//   {
//   "symbol": "GNS",
//   "name": "Genius Group Limited",
//   "change": 0.112,
//   "price": 0.75,
//   "changesPercentage": 17.5549
//   },
//   {
//   "symbol": "BIMI",
//   "name": "BIMI International Medical Inc.",
//   "change": 0.37,
//   "price": 2.52,
//   "changesPercentage": 17.2093
//   },
//   {
//   "symbol": "AVXL",
//   "name": "Anavex Life Sciences Corp.",
//   "change": 1.34,
//   "price": 9.37,
//   "changesPercentage": 16.6874
//   },
//   {
//   "symbol": "PAVMZ",
//   "name": "PAVmed Inc",
//   "change": 0.01,
//   "price": 0.07,
//   "changesPercentage": 16.6667
//   },
//   {
//   "symbol": "LILA",
//   "name": "Liberty Latin America Ltd.",
//   "change": 1.39,
//   "price": 9.79,
//   "changesPercentage": 16.5476
//   },
//   {
//   "symbol": "LILAK",
//   "name": "Liberty Latin America Ltd.",
//   "change": 1.37,
//   "price": 9.67,
//   "changesPercentage": 16.506
//   },
//   {
//   "symbol": "BTBD",
//   "name": "BT Brands, Inc.",
//   "change": 0.35,
//   "price": 2.5,
//   "changesPercentage": 16.2791
//   },
//   {
//   "symbol": "BRACR",
//   "name": "Broad Capital Acquisition Corp",
//   "change": 0.02,
//   "price": 0.145,
//   "changesPercentage": 16
//   },
//   {
//   "symbol": "OXBR",
//   "name": "Oxbridge Re Holdings Limited",
//   "change": 0.24,
//   "price": 1.77,
//   "changesPercentage": 15.6863
//   },
//   {
//   "symbol": "RPD",
//   "name": "Rapid7, Inc.",
//   "change": 6.21,
//   "price": 46,
//   "changesPercentage": 15.6069
//   },
//   {
//   "symbol": "SCPL",
//   "name": "SciPlay Corporation",
//   "change": 3.05,
//   "price": 22.7,
//   "changesPercentage": 15.5216
//   },
//   {
//   "symbol": "CPIX",
//   "name": "Cumberland Pharmaceuticals Inc.",
//   "change": 0.22,
//   "price": 1.65,
//   "changesPercentage": 15.3846
//   },
//   {
//   "symbol": "REAL",
//   "name": "The RealReal, Inc.",
//   "change": 0.33,
//   "price": 2.5,
//   "changesPercentage": 15.2074
//   },
//   {
//   "symbol": "REAX",
//   "name": "The Real Brokerage Inc.",
//   "change": 0.24,
//   "price": 1.83,
//   "changesPercentage": 15.0943
//   },
//   {
//   "symbol": "SHLT",
//   "name": "SHL Telemedicine Ltd.",
//   "change": 1.13,
//   "price": 8.8,
//   "changesPercentage": 14.7327
//   },
//   {
//   "symbol": "VFF",
//   "name": "Village Farms International, Inc.",
//   "change": 0.089,
//   "price": 0.694,
//   "changesPercentage": 14.7107
//   },
//   {
//   "symbol": "IDYA",
//   "name": "IDEAYA Biosciences, Inc.",
//   "change": 3.17,
//   "price": 24.81,
//   "changesPercentage": 14.6488
//   },
//   {
//   "symbol": "TOST",
//   "name": "Toast, Inc.",
//   "change": 2.96,
//   "price": 23.18,
//   "changesPercentage": 14.639
//   }
//   ]
// let TenStockList = StockList.slice(0,10)
//console.log(TenStockList)

interface Gainer {
  symbol: string;
  name: string;
  change: number;
  changePercentage: number;
  price: number;

}

const SideBar = () => {
    const [gainersList, setGainersList] = useState<Gainer[]>([])

    // useEffect(() => {
    //   axios.get<Gainer[]>(`https://site.financialmodelingprep.com/developer/docs/#Most-Gainer-Stock-Companies`)
    //   .then(res => setGainersList(res.data))
    // })


  return (
    <Container className="sidebar-container" fluid>
      {gainersList.map(gainer => 
      <Row>
      <Col > 
        <h6>{gainer.symbol}</h6>
      </Col>
      <Col >
        <h6>{gainer.changePercentage}</h6>
      </Col>
      <Col>
        <h6>{gainer.price}</h6>
      </Col>
    </Row>
      )}
    </Container>
  );
};

export default SideBar;
