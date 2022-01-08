import React, { useState, useContext } from 'react';
import './Checkout.css'
import { db } from '../../services/firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'
import CartContext from '../../context/cartContext'
import { mercadopagoOrder } from '../../services/mercadopago/mercadopago'
import { useMercadopago } from 'react-sdk-mercadopago';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const CheckOut = () => {

    const mercadopago = useMercadopago.v2(process.env.REACT_APP_MERCADOPAGO_APP_USER, {
        locale: 'es-AR'
    });

    const { cart, amounts } = useContext(CartContext)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [cp, setCp] = useState("")
    const [telephone, setTelephone] = useState("")


    const checkoutMP = async () => {

        var firebaseOrderId = ""
        const newOrder = {
            "timeStamp": Date.now(),
            "email": email,
            "name": name,
            "address": address,
            "city": city,
            "cp": cp,
            "telephone": telephone,
            "items": cart
        }

        addDoc(collection(db, 'orders'), newOrder).then(({id}) => {
            firebaseOrderId = id;
        }).catch((error) => {
            console.log('Error creating order', error)
        }).finally(async () => {
            const idOrder =  await mercadopagoOrder(amounts.totalAmount, window.location.origin + '/congrats', firebaseOrderId)
            if (mercadopago) {
                mercadopago.checkout({
                    preference: {
                        id: idOrder
                    },
                    render: {
                        container: '.cho-container',
                        label: 'Pagar por MercadoPago',
                    }
                })
            }
        })
    }

    return (
        <ThemeProvider theme={theme}>
        <div className='checkOutContainer'>
            <script src="https://sdk.mercadopago.com/js/v2"></script>
            <div className='formContainer'>
                <form className='deliveryForm'>
                    <label htmlFor="email">Correo electronico</label>
                    <input type="email" id='email' name="email" placeholder="Ingresa tu email" onChange={e => setEmail(e.target.value)}></input>
                    <label htmlFor='name'>Nombre y Apellido</label>
                    <input type="text" id='name' name="name" placeholder="Ingresa tu Nombre y Apellido" onChange={e => setName(e.target.value)}></input>
                    <label htmlFor='address'>Dirección a ser enviado</label>
                    <input type="text" id='address' name="address" placeholder="Ingresa tu dirección" onChange={e => setAddress(e.target.value)}></input>
                    <label htmlFor='city'>Ciudad</label>
                    <input type="text" id='city' name="city" placeholder="Ingresa tu ciudad" onChange={e => setCity(e.target.value)}></input>
                    <label htmlFor='cp'>Código Postal</label>
                    <input type="text" id='cp' name="cp" placeholder="Ingresa tu codigo postal" onChange={e => setCp(e.target.value)}></input>
                    <label htmlFor='telephone'>Número de teléfono</label>
                    <input type="number" id='telephone' name="telephone" placeholder="Ingresa tu teléfono" onChange={e => setTelephone(e.target.value)}></input>
                    <Button disabled={email && name && address && city && cp && telephone ? false : true} color="primary" variant="contained" sx={{color:"whitesmoke"}} onClick={() => {checkoutMP()}}>Ya complete mis datos!</Button>
                </form>
            </div>
            <div className='mercadoPago'>
                <h3>Usted esta pagando {amounts.totalAmount}$ por {amounts.totalItems} productos en total.</h3>
                <div className="cho-container" />
                <div>
                    <p>Para probar el flujo completo de pago no tenes que estar logueado con tu cuenta personal ya que esta configurado con cuentas de prueba, te dejo las tarjetas:</p>
                    <a href='https://www.mercadopago.com.ar/developers/en/guides/online-payments/checkout-pro/test-integration#bookmark_test_the_payment_flow'>Tarjetas de Prueba</a>
                </div>
            </div>
        </div>
        </ThemeProvider>
    )
}

export default CheckOut;