import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '@/app/Global/AppBar';
import RealTimeStockPrices from '@/app/Global/Marquee';

export const NotFoundPage = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <RealTimeStockPrices />
     <Container maxWidth="none">
        <Box sx={{height: '100vh', fontSize: '30px', textAlign: 'center' }} >
        <h1>Not Found</h1>
        </Box>
      </Container>
    </>
  )
}
