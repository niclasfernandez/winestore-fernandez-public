import './Cart.css';
import React, { useContext, useState, useEffect } from "react";
import cartContext from '../../context/cartContext'
import { Link } from 'react-router-dom' 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import RemoveShoppingCartSharpIcon from '@mui/icons-material/RemoveShoppingCartSharp';


export default function Carrito() {
    const properties= {
        color: "white",
        fontSize: "15px"
    }
    const titleProperties= {
        color: "white",
        fontSize: "20px",                         
        fontWeight: 800

    }

    const { cart, deleteCartItem, updateAmounts } = useContext(cartContext)
    const [totalAmount,setTotalAmount] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(() => {
        let totalAmount = 0;
        let totalPrice = 0;
        cart.forEach(element => {
            totalAmount += element.itemCount;
            totalPrice += element.itemCount * element.price;    
        });
        setTotalPrice(totalPrice) 
        setTotalAmount(totalAmount)
    }, [cart])

    return(
        <div className='cartContainer'>
            {!cart.length ? <div style={{justifyContent: "space-between",height: "200px",display: "flex", flexDirection: "column", alignItems: "center"}}><h1>Carrito Vacio!</h1><RemoveShoppingCartSharpIcon sx={{fontSize: "75px"}}/></div> :
            <div style={{width: "100%"}}>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300, backgroundColor: "#672A4E"}} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell sx={titleProperties}>Productos</TableCell>
                    <TableCell sx={titleProperties} align="right">Cantidad</TableCell>
                    <TableCell sx={titleProperties} align="right">Precio&nbsp;($)</TableCell>
                    <TableCell sx={titleProperties} align="right">Total&nbsp;($)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {cart.map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell sx={properties} component="th" scope="row">
                        {row.title}
                        &nbsp;
                        &nbsp;
                        <Button onClick={() => deleteCartItem(row.id)} sx={{ fontWeight: "600", backgroundColor: "whitesmoke" ,color: "#672A4E", ":hover": {
                        backgroundColor: 'white'} }} color="secondary" variant="outlined">Eliminar</Button>
                    </TableCell>
                    <TableCell sx={properties} align="right">{row.itemCount}</TableCell>
                    <TableCell sx={properties} align="right">{row.price}</TableCell>
                    <TableCell sx={properties} align="right">{row.itemCount * row.price}</TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell sx={titleProperties}>Total a pagar</TableCell>
                    <TableCell sx={properties} align="right">{totalAmount}</TableCell>
                    <TableCell sx={properties} align="right">-</TableCell>
                    <TableCell sx={properties} align="right">{totalPrice}</TableCell>
                </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
            <div style={{textDecorationLine: "none", display:"flex", height: "100px", justifyContent: "flex-end", alignItems:"flex-end"}}>
            <Link to={'/checkout'} style={{textDecorationLine: "none"}}>
                <Button onClick={() => updateAmounts(totalPrice, totalAmount)} sx={{  height:"50px",fontWeight: "600", backgroundColor: "whitesmoke" ,color: "#672A4E", ":hover": {
                        backgroundColor: 'white'} }} color="secondary" variant="outlined">Ir a Pagar</Button>
            </Link> 
            </div>
            </div>}
        </div>
    )
}