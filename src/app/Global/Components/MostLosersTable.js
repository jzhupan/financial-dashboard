import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from '@mui/material/Skeleton';

export default function MostLosersTable() {
  const [mostLosers, setMostLosers] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_MOST_LOSERS_URL)
      .then((res) => {
        const topFiveLosers = res.data.slice(0, 5);
        //console.log(topFiveLosers)
        setMostLosers(topFiveLosers);
      })
      .catch((err) => setError(err.message));
  }, []);

  return mostLosers ? (
    <TableContainer sx={{ minWidth: 100 }}>
      {error && <p className="text-danger">{error}</p>}
      <Table
        sx={{ maxWidth: 350, textAlign: "center" }}
        aria-label="simple table"
        align="center"
      >
        <TableHead sx={{ textAlign: "center" }}>
          <TableRow>
            <h1>Most Losers</h1>
          </TableRow>
        </TableHead>
        <TableBody sx={{ textAlign: "center" }}>
          {mostLosers.map((loser) => (
            <TableRow
              key={loser.symbol}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <a href={`/stock-summary/${loser.symbol}`}>
                {loser.symbol}
                </a>
              </TableCell>
              <TableCell 
              align="center"
              style={{
                color: `${loser.changesPercentage}`.includes("-")
                  ? "red"
                  : "green",
              }}>
                {loser.changesPercentage.toFixed(2)}%
              </TableCell>
              <TableCell align="center">${loser.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
  ) : (
    <>
    <Skeleton variant="rectangular" width={350} height={380}/>
    <br />    
    </>

  );
}
