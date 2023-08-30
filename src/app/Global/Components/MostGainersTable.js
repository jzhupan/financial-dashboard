import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useState, useEffect} from 'react'
import axios from 'axios';



export default function MostGainersTable() {
  const [mostGainers, setMostGainers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_MOST_GAINERS_URL)
    .then((res) => { 
    const topFiveGainers = res.data.slice(0,5)
    //console.log(topFiveGainers)
    setMostGainers(topFiveGainers)
    })
    .catch(err => setError(err.message))
        

  },[])

  return (
    <TableContainer sx={{ minWidth: 100 }} >
      {error && <p className='text-danger'>{error}</p>}
      <Table sx={{ maxWidth: 350 }} aria-label="simple table" align="center">
        <TableHead align="center">
          <TableRow>
            <h1>Most Gainers</h1>
          </TableRow>
        </TableHead>
        <TableBody  align="center">
          {mostGainers.map((gainer) => (
            <TableRow
              key={gainer.symbol}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {gainer.symbol}
              </TableCell>
              <TableCell align="center">{gainer.changesPercentage.toFixed(2)}%</TableCell>
              <TableCell align="center">${gainer.price.toFixed(2)}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}