const products = [{id: '1', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHh0mQcIn4NDB27chEPpfnr9Dd6IyS4_1jw&usqp=CAU', title: 'Altos del Plata Malbec', category: 'Tintos', price: 500, detalle: 'Altos del Plata. La expresión frutal. Frutado. Espontáneo. Vibrante Es la expresión frutal de cada varietal cultivado a su altura ideal.', stock: 4},
{id: '2', picture: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/129/410/products/terrazas-de-los-andes-reserva-chardonnay-750ml1-9781b998d6b3ec319d15881725077989-1024-1024.jpg', title: 'Altos del Plata Chardonnay', category: 'Blancos', price: 600, detalle: 'Altos del Plata. La expresión frutal. Frutado. Espontáneo. Vibrante Es la expresión frutal de cada varietal cultivado a su altura ideal.', stock: 12},
{id: '3', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHh0mQcIn4NDB27chEPpfnr9Dd6IyS4_1jw&usqp=CAU', title: 'Altos del Plata Cabernet', category: 'Tintos', price: 700, detalle: 'Altos del Plata. La expresión frutal. Frutado. Espontáneo. Vibrante Es la expresión frutal de cada varietal cultivado a su altura ideal.', stock: 8},
{id: '4', picture: 'http://www.wine-concept.com.ar/uploads/5/7/9/4/57948649/rose-newsletter-nov_orig.jpg', title: 'Doña Paula Rose', category: 'Rosados', price: 400, detalle: 'En boca es un vino muy equilibrado, de gran cuerpo, concentrado y aterciopelado con un persistente final que recuerdan su paso por la madera.', stock: 15},
{id: '5', picture: 'https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/productos/b/0000012000/12749.jpg', title: 'Norton Cosecha Tardía', category: 'Rosados', price: 300, detalle: 'En boca es un vino muy equilibrado, de gran cuerpo, concentrado y aterciopelado con un persistente final que recuerdan su paso por la madera.', stock: 15},
{id: '6', picture: 'https://hiperlibertad.vteximg.com.br/arquivos/ids/177320-600-600/VINO-EL-BAUTISMO-ROS-750-CC-1-9210.jpg?v=637551487418100000', title: 'El Bautismo Rosado', category: 'Rosados', price: 900, detalle: 'En boca es un vino muy equilibrado, de gran cuerpo, concentrado y aterciopelado con un persistente final que recuerdan su paso por la madera.', stock: 15}]

export const getProducts = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)        
    })
}

export const getProductByCategoryId = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.filter(prod => prod.category === id)
        setTimeout(() => resolve(product), 2000)
    })
}

export const getDetailById = (id) => {    
    return new Promise((resolve, reject) => {
        const product = products.filter(prod => prod.id === id)
        setTimeout(() => {
            resolve(product)
        }, 2000)        
    })
}

export const countProducts = (cart) => {
  let count = 0;
  for(let i=0; i<cart.length;i++) {
      count = count + cart[i].itemCount
  }
  return count
}