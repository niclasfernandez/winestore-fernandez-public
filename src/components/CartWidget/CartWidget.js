import './CartWidget.css';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';

const CartWidget = () => {

    return (
        <IconButton color="secondary" className="Carrito" aria-label="add to shopping cart" size="large">
            <AddShoppingCartIcon />
        </IconButton>
    )
}

export default CartWidget;