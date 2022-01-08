import './ItemDetailComponent.css'
import React from 'react';
import ItemCountDetail from '../ItemCountDetail/ItemCountDetail'
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        custom: "#672A4E",
        '&:hover': {
            backgroundColor: '#AF9AB2',
            color: '#AF9AB2',
        },
    },
    typography: {
      fontSize: 12,
    }
  });

const MoreDetails = ({vino}) => {

    let history = useNavigate();

    function onClick(event) {
        console.log(event)
    }


  return (
    <ThemeProvider theme={theme}>
      <div className="wineCardDetails">
        <Card sx={{ height: "100%", width: "450px", margin: "0 50px", borderRadius: "30px 30px 0 0"}}>
        <CardMedia
            component="img"
            height="140"
            image={vino.picture}
            alt={vino.title}
            sx={{width: "100%",
              height: "15vh",
              objectFit: "cover"}}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{  color: '#672A4E', fontWeight: 500}}>
            {vino.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
                <div style={{backgroundColor: "#AF9AB2", borderRadius: "20px", boxShadow: "0px 1px 7px rgba(0,0,0,1)", marginBottom: "15px" }}>
                {'Precio: $ ' + vino.price}
                </div>
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            <div style={{backgroundColor: "#AF9AB2", borderRadius: "20px", boxShadow: "0px 1px 7px rgba(0,0,0,1)", marginBottom: "15px" }}>
                    {'Categoría: ' + vino.category}
                </div>
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            <div style={{backgroundColor: "#AF9AB2", borderRadius: "20px", boxShadow: "0px 1px 7px rgba(0,0,0,1)", marginBottom: "15px" }}>
                    {vino.detalle}
                </div>
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            <div style={{backgroundColor: "#AF9AB2", borderRadius: "20px", boxShadow: "0px 1px 7px rgba(0,0,0,1)", marginBottom: "15px" }}>
                    {'Stock: ' + vino.stock}
                </div>
            </Typography>
            <Button onClick={() => history(-1)} sx={{color: "#672A4E", ":hover": {
        backgroundColor: '#33021f'} }} color="custom" variant="contained">Volver</Button>
        </CardContent>
        </Card>
        <ItemCountDetail onClick={onClick} stock={vino.stock} initial={0} item={vino}/> 
    </div>
    </ThemeProvider>
  );
}

export default MoreDetails;