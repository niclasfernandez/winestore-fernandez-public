import './NavBar.css';
import wineLogo from '../../wineLogo.png';
import Button from '@mui/material/Button';
import React, {useContext} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from 'react-router-dom'
import CartContext from '../../context/cartContext'

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

function NavBar() {

  const { cart } = useContext(CartContext)

  const contar = () => {
    let count = 0;
    for(let i=0; i<cart.length;i++) {
        count = count + cart[i].itemCount
    }
    return count
  }

    return (
      <ThemeProvider theme={theme}>
      <header className="NavBar">
        <ul className="WineList">
          <Link to={'/'}><img src={wineLogo} alt="Wine Inc. logo"/></Link>
          <div className="buttonsContainer">
            <Link to={'/'} className="CategoryName"><Button color="secondary" variant="contained">Inicio</Button></Link>
            <Link to={'/category/Tintos'} className="CategoryName"><Button color="secondary" variant="contained">Tintos</Button></Link>
            <Link to={'/category/Blancos'} className="CategoryName"><Button color="secondary" variant="contained">Blancos</Button></Link>
            <Link to={'/category/Rosados'} className="CategoryName"><Button color="secondary" variant="contained">Rosados</Button></Link>
          </div>
          <div className="CarritoContainer">
          <Link to={'/cart'}>
            <Badge color="secondary" badgeContent={contar()} >
              {/* <Badge color="secondary" badgeContent={countProducts(cart)} > */}
                <ShoppingCartIcon color="secondary" />
            </Badge>
          </Link> 
          <Button color="secondary" variant="contained">Login</Button>
          </div>  
        </ul>
      </header>
      </ThemeProvider>
    );
  }
  
  export default NavBar;