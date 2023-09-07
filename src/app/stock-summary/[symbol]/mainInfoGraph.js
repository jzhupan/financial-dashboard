import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Divider } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';



export const MainInfoGraph = (props) => {
  const [stockInfo, setStockInfo] = useState(false)
  const [error, setError] = useState('')
  const companySymbol = props.symbol
  const singlePriceTarget = `
  https://financialmodelingprep.com/api/v3/financial-growth/${companySymbol}?limit=20&apikey=${process.env.NEXT_PUBLIC_API_KEY}`


  useEffect(() => {
    axios.get(singlePriceTarget)
    .then((res) => {
      const latestData = res.data.slice(0,5)
      //console.log(latestData)
      setStockInfo(latestData)
    })
    .catch(err => setError(err.message))
  },[])

  return stockInfo ? (

      <TableContainer component={Paper}>
        <h3>{companySymbol}'s Stock Financial Score</h3>
        <Divider />
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead >
              <TableRow>
                <TableCell align='left'>Date</TableCell>
                <TableCell align="right">Revenue Growth</TableCell>        
                <TableCell align="right">Gross Profit Growth</TableCell>
                <TableCell align="right">Earnings Per Share Growth</TableCell>
                <TableCell align="right">Free Cashflow Growth</TableCell>
              </TableRow>
            </TableHead>
            {error && <p className='text-danger'>{error}</p>}
            {stockInfo && stockInfo.map((info) => (
            <TableBody align="center">
                <TableRow
                  key={info.symbol}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {info.date}
                  </TableCell>
                  <TableCell align='right'
                  style={{
                    color: `${info.revenueGrowth}`.includes("-")
                      ? "red"
                      : "green",
                  }}
                  >
                    {info.revenueGrowth.toFixed(5)}%
                  </TableCell>
                  <TableCell align="right"
                  style={{
                    color: `${info.grossProfitGrowth}`.includes("-")
                      ? "red"
                      : "green",
                  }}                  
                  >
                    {info.grossProfitGrowth.toFixed(5)}%
                  </TableCell>           
                  <TableCell align="right"
                  style={{
                    color: `${info.epsgrowth}`.includes("-")
                      ? "red"
                      : "green",
                  }} 
                  >
                    {info.epsgrowth.toFixed(5)}%
                    </TableCell>
                  <TableCell align="right"
                  style={{
                    color: `${info.freeCashFlowGrowth}`.includes("-")
                      ? "red"
                      : "green",
                  }} 
                  >
                    {info.freeCashFlowGrowth.toFixed(5)}%
                    </TableCell>

                </TableRow>
            </TableBody>
            ))}
          </Table>
      </TableContainer>
  )  : (
    <>
    <br/>
    <Skeleton variant="rectangular" width={1080} height={276}/>
    <br />    
    </>
  );
}
