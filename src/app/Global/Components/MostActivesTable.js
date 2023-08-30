import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useState, useEffect} from 'react'
import axios from 'axios';



export default function MostActivesTable() {
  const [mostActives, setMostActives] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_MOST_ACTIVE_URL)
    .then((res) => { 
    const topFiveActives = res.data.slice(0,5)
    //console.log(topFiveActives)
    setMostActives(topFiveActives)
    })
    .catch(err => setError(err.message))
        

  },[])

  return (
    <TableContainer sx={{ minWidth: 100 }} >
      {error && <p className='text-danger'>{error}</p>}
      <Table sx={{ maxWidth: 350 }} aria-label="simple table" align="center">
        <TableHead align="center">
          <TableRow>
            <h1>Most Actives</h1>
          </TableRow>
        </TableHead>
        <TableBody  align="center">
          {mostActives.map((actives) => (
            <TableRow
              key={actives.symbol}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {actives.symbol}
              </TableCell>
              <TableCell align="center">{actives.changesPercentage.toFixed(2)}%</TableCell>
              <TableCell align="center">${actives.price.toFixed(2)}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}