import logo from './logo.svg';
import './App.css';
import {Container,Box,Grid,Button} from '@mui/material';
import Scarecrow from './Scarecrow.png';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const matches = useMediaQuery('(min-width:400px)');
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Box className="BOX" sx={{ height: '100vh', }}>
          <p>404 NOT FOUND</p>
          <Grid container spacing={2} sx={{marginTop:'100px',}}>
            <Grid item xs={6}>
              <img src={Scarecrow} alt="scarecrow"/>
            </Grid>
            <Grid item xs={6} sx={{display:'flex',flexDirection:'column'}}>
              <b style={{fontSize:'70px',color: '#333333'}}>I have bad news for you</b>
              <span>The page you are looking for might be removed or is temporarily unavailable</span>
             <Button variant="contained" sx={{width:"200px",backgroundColor: '#333333',fontSize: '12px', borderRadius: '0px'}} size="large">BACK TO HOMEPAGE</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
