import './Footer.css';
import wineLogo from '../../wineLogo.png';
import Button from '@mui/material/Button';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: '#AF9AB2',
    },
    secondary: {
      main: '#672A4E',
    },
  },
});

function Footer() {
    return (
      <ThemeProvider theme={theme}>
      <footer className="Footer">
        <ul className="WineList">
          <Link to={'/'}><img src={wineLogo} alt="Wine Inc. logo"/></Link>
          <div className="buttonsContainer">
            <Link to={'/contact'} className="CategoryName"><Button color="secondary" variant="contained">Contáctanos</Button></Link>
          </div>
          <div id="copyright">Copyright 2021 github.com/niclasfernandez</div>
        </ul>
      </footer>
      </ThemeProvider>
    );
  }
  
  export default Footer;