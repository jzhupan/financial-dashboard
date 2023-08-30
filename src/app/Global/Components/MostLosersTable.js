import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useState, useEffect} from 'react'
import axios from 'axios';
import { Title } from '@mui/icons-material';



export default function MostLosersTable() {
  const [mostLosers, setMostLosers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_MOST_LOSERS_URL)
    .then((res) => { 
    const topFiveLosers = res.data.slice(0,5)
    //console.log(topFiveLosers)
    setMostLosers(topFiveLosers)
    })
    .catch(err => setError(err.message))
        

  },[])

  return (
    <TableContainer sx={{ minWidth: 100 }} >
      {error && <p className='text-danger'>{error}</p>}
      <Table sx={{ maxWidth: 350 }} aria-label="simple table" align="center">
        <TableHead align="center">
          <TableRow>
            <h1>Most Losers</h1>
          </TableRow>
        </TableHead>
        <TableBody  align="center">
          {mostLosers.map((loser) => (
            <TableRow
              key={loser.symbol}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {loser.symbol}
              </TableCell>
              <TableCell align="center">{loser.changesPercentage.toFixed(2)}%</TableCell>
              <TableCell align="center">${loser.price.toFixed(2)}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}