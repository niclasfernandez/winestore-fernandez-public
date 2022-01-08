var myHeaders = new Headers();
myHeaders.append("Authorization", process.env.REACT_APP_MERCADOPAGO_AUTH);
myHeaders.append("Content-Type", "application/json");

export const mercadopagoOrder = (amount, congrats, firebaseOrderId) => {
  
  var raw = JSON.stringify({
    "external_reference": firebaseOrderId,
    "items": [
      {
        "title": "Producto WINESTORE",
        "description": "Producto WINESTORE",
        "quantity": 1,
        "currency_id": "$",
        "unit_price": amount
      }
    ],
    "back_urls": {
      "success": congrats
    }
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

return new Promise((resolve, reject) => {
  fetch("https://api.mercadopago.com/checkout/preferences", requestOptions)
    .then(response => response.json())
    .then(result => {resolve(result.id)})
    .catch(error => console.log('error', error));
  })
}