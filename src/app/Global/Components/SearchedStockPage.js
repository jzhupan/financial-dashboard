import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};



const SearchedStockPage = () => {
    const [searchedStock, setSearchedStock] = useState([])
    const [error, setError] = useState('')
    


    useEffect(() => {
      axios.get(process.env.NEXT_PUBLIC_100_STOCK_SEARCH)
      .then((res) => {
        const top50Stocks = res.data.slice(0,1)
        //console.log(top50Stocks)
        setSearchedStock(top50Stocks)
      })
      .catch(err => setError(err.message))
    },[])


  return (
    <div>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {error && <p className='text-danger'>{error}</p>}
                  
        <TableContainer >
          <Table sx={{ maxWidth: 350 }} aria-label="simple table" align="center">
            <TableHead align="center">
              <TableRow>
                <h1>stocks</h1>
              </TableRow>
            </TableHead>
          <TableBody  align="center">
            {searchedStock.map((searchStock) => (
            <TableRow
            key={searchStock.symbol}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {searchStock.symbol}
            </TableCell>
            <TableCell align="center">{searchStock.companyName}%</TableCell>
            <TableCell align="center">${searchStock.price}</TableCell>

          </TableRow>
        ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem>
                         <ListItemText primary="Symbol" secondary={searchStock.symbol} />
                       </ListItem>
                       <Divider />
                       <ListItem divider>
                           <ListItemText primary="Company Name" secondary={searchStock.companyName} />
                         </ListItem><ListItem>
                           <ListItemText primary="Market Cap" secondary={searchStock.marketCap} />
                         </ListItem><Divider light /><ListItem>
                           <ListItemText primary="Sector" secondary={searchStock.sector} />
                         </ListItem><Divider /><ListItem>
                           <ListItemText primary="Industry" secondary={searchStock.industry} />
                         </ListItem><Divider /><ListItem divider>
                           <ListItemText primary="Beta" secondary={searchStock.beta} />
                         </ListItem>
                         <ListItem>
                           <ListItemText primary="Price" secondary={searchStock.price} />
                         </ListItem>
                         <Divider light /> 
                  </List>
                  </Grid>
                  <Grid item xs={6}>
                  <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem >
                      <ListItemText primary="Last Annual Dividend" secondary={searchStock.lastAnnualDividend} />
                    </ListItem>
                    <Divider />
                    <ListItem  divider>
                      <ListItemText primary="Volume" secondary={searchStock.volume} />
                    </ListItem>
                    <ListItem >
                      <ListItemText primary="Exchange" secondary={searchStock.exchange} />
                    </ListItem>
                    <Divider light />
                    <ListItem >
                      <ListItemText primary="Exchange Short Name" secondary={searchStock.exchangeShortName} />
                    </ListItem>
                    <Divider />
                    <ListItem >
                      <ListItemText primary="Country" secondary={searchStock.country} />
                    </ListItem>
                    <Divider />
                    <ListItem  divider>
                      <ListItemText primary="Exchange-traded funds(Etf)" secondary={searchStock.isEtf} />
                    </ListItem>
                    <ListItem >
                      <ListItemText primary="Is Actively Trading" secondary={searchStock.isActivelyTrading} />
                    </ListItem>
                    <Divider light />
                  </List> */}

      </Container>
    </React.Fragment>
    </div>
  )
}

export default SearchedStockPage