import './ItemCountDetail.css';
import React, { useState, useContext } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CartContext from '../../context/cartContext'
import { useNavigate } from "react-router-dom";

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
  
export default function Counter({stock, initial, item}) {

  let history = useNavigate();
  const [itemCount, setItemCount] = useState(initial);
  const { cart ,setCartItem } = useContext(CartContext)

  const realStockFunc = () => {

  let productCheck = cart.findIndex(x => x.id === item.id)

  if(productCheck !== -1) {
    return itemCount + cart[productCheck].itemCount
  } else {
    return itemCount
  }
}
  
  return (
    <ThemeProvider theme={theme}>
    <div style={{ width: "450px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: 30, backgroundColor: '#672A4E', margin: "0 50px" ,borderRadius: "0 0 30px 30px"}}>
      {/* <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}> */}
        <Badge color="primary" badgeContent={realStockFunc()}>
          <ShoppingCartIcon color="primary" />
        </Badge>
        <ButtonGroup>
          <Button color="primary"
            onClick={() => {
                if (realStockFunc() > initial) {
                    setItemCount(itemCount - 1);
                }
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button color="primary"
            onClick={() => {
                if (realStockFunc() < stock) {
                    setItemCount(itemCount + 1);
                }
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      <Button onClick={() => {setCartItem(item, itemCount); history(-1)}} color="primary" variant="outlined">Agregar/Quitar</Button>
    </div>
    </ThemeProvider>
  );
}