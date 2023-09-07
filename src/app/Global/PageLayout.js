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
          }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={9}>
                <Item><NewsSection /></Item>
                </Grid>
                <Grid item xs={12} md={3} sx={{paddingBottom: '15rem'}}>
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