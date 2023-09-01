import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NewsSection from './Components/NewsSection';
import MostGainersTable from './Components/MostGainersTable';
import MostLosersTable from './Components/MostLosersTable';
import MostActivesTable from './Components/MostActivesTable';
import CurrencyTable from './Components/CurrencyTable';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const PageLayout = () => {
  return (
        <Box sx={{ 
          flexGrow: 1 , 
          display: 'grid',
          gridAutoFlow: 'row',
          maxHeight: 3000,
          }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                <Item><NewsSection /></Item>
                </Grid>
                <Grid item xs={6} md={4}>
                <Item><MostGainersTable /></Item>
                <Item><MostLosersTable /></Item>
                <Item><MostActivesTable /></Item>
                <Item><CurrencyTable /></Item>
                </Grid>
            </Grid>
        </Box>
  )
}

export default PageLayout