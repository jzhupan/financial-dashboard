import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useState, useEffect} from 'react'
import axios from 'axios';



export default function CurrencyTable() {
  const [mostCurrencies, setMostCurrencies] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_CURRENCY)
    .then((res) => { 
    const topFiveCurrencies = res.data.slice(0,5)
    //console.log(topFiveCurrencies)
    setMostCurrencies(topFiveCurrencies)
    })
    .catch(err => setError(err.message))
        

  },[])

  return (
    <TableContainer sx={{ minWidth: 100 }} fluid>
      {error && <p className='text-danger'>{error}</p>}
      <Table sx={{ maxWidth: 350 }} aria-label="simple table" align="center">
        <TableHead align="center">
          <TableRow>
            <h1>Currency</h1>
          </TableRow>
        </TableHead>
        <TableBody  align="center">
          {mostCurrencies.map((Currency) => (
            <TableRow
              key={Currency.symbol}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {Currency.symbol}
              </TableCell>
              <TableCell align="center">{Currency.changesPercentage.toFixed(2)}%</TableCell>
              <TableCell align="center">${Currency.price.toFixed(2)}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}