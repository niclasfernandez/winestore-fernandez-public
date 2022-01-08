import './ItemCount.css';
import React, { useState, useContext } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import CartContext from '../../context/cartContext'

const theme = createTheme({
  palette: {
    primary: {
      main: '#AF9AB2'
    },
    secondary: {
      main: '#672A4E',
    },
  },
});
  
export default function Counter({stock, initial, prod}) {
  const [itemCount] = useState(initial);
  const { cart } = useContext(CartContext);

  const realStockFunc = () => {

    let productCheck = cart.findIndex(x => x.id === prod.id)
  
    if(productCheck !== -1) {
      return itemCount + cart[productCheck].itemCount
    } else {
      return itemCount
    }
  }
  
  return (
    <ThemeProvider theme={theme}>
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: 30, backgroundColor: '#672A4E', margin: "0 50px" ,borderRadius: "0 0 30px 30px"}}>
        <Badge color="primary" badgeContent={realStockFunc()}>
          <ShoppingCartIcon color="primary" />
        </Badge>
      <Link to={`/item/${prod.id}`} className="buttonBuy"><Button sx={{color: "#672A4E", fontWeight: 600, ":hover": {
        backgroundColor: '#33021f', color: '#AF9AB2', fontWeight: 800} }} color="primary" variant="contained">Modificar carrito</Button></Link>
    </div>
    </ThemeProvider>
  );
}