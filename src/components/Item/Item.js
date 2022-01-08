import './Item.css'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

const theme = createTheme({
  typography: {
    fontSize: 12,
  }
});

export default function MediaCard({product}) {  

  return (
    <ThemeProvider theme={theme}>
      <div className="wineCardContainer">
        <Card sx={{ height: "600px", margin: "0 50px", borderRadius: "30px 30px 0 0"}}>
        <CardMedia
            component="img"
            height="140"
            image={product.picture}
            alt={product.title}
            sx={{width: "100%",
            height: "200px", 
              objectFit: "cover"}}
        />
        <CardContent sx={{width: "100%",
            height: "50vh"}}>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#672A4E', fontWeight: 500}}>
            {product.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            {'$ ' + product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
            <div className="containerDetails">
              <Link to={`/item/${product.id}`} className="detailButton"><Button sx={{color: "#672A4E", ":hover": {
        backgroundColor: '#33021f'} }} color="secondary" variant="contained">Ver Detalles</Button></Link>
          </div>
        </CardContent>
        </Card> 
        <ItemCount stock={product.stock} initial={0} prod={product}/>
    </div>
    </ThemeProvider>
  );
}