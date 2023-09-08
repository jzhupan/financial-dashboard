import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import axios from "axios";
import { useState } from "react";




import {
  createTheme,
  ThemeProvider,
  alpha,
} from '@mui/material/styles';
import { teal, green } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: green,
    secondary: teal,
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto ',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function ResponsiveAppBar() {

  let router = useRouter();

  const [searchValid, setSearchValid] = useState(true);


  function handleRedirect(event){


    const historicalChartStock = `https://financialmodelingprep.com/api/v3/historical-chart/30min/${event.target.value}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`

      axios.get(historicalChartStock)
      .then((res) => {

        if(res.data.length > 1){
          router.push(`/stock-summary/${event.target.value}`);
        } else {
          setSearchValid(false);
        }

      })
      .catch(err => setError(err.message))
  }

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap={false}
            component="a"
            href="/"
            sx={{ flexGrow: 1, display: { xs: '1rem', sm: 'block' }, margin: 1}}
            style={{color: 'white'}}
          >
            FMP
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Ticker Search"
              inputProps={{ 'aria-label': 'search' }}
              onKeyUp={(event) =>{
                setSearchValid(true);
                if(event.code == "Enter"){
                  handleRedirect(event)
                }
              }}
              style={{
                color: searchValid ? "black": "red",
              }}
             
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}