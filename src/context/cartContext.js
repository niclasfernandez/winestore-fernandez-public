import React, {useState} from 'react';

const CartContext = React.createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [amounts, setAmounts] = useState({'totalAmount': 0, 'totalItems': 0})
    // const [cartWidgetAmount, setcartWidgetAmount] = useState(0)

    const updateAmounts = (totalAmount, totalItems) => {
        setAmounts({'totalAmount': totalAmount, 'totalItems': totalItems})

    }

    const deleteCartItem = (id) => {
        let newCart = [];
        for(let i = 0; i<cart.length; i++) {
            if(cart[i].id !== id) {
                newCart.push(cart[i])
            }
        }
        setCart(newCart)
    }

    const setCartItem = (item, itemCount) => {
        let newItem = {...item, 'itemCount': itemCount}
        let arrayPosition = cart.findIndex(x => x.id === newItem.id)

        if(arrayPosition !== -1) {  
            
            let newItemWithQuantity = cart[arrayPosition]
            newItemWithQuantity.itemCount += itemCount

            cart.splice(arrayPosition, 1)
            setCart(cart.concat(newItemWithQuantity))
        } else {
            setCart(cart.concat(newItem))
        }        
    }

    return (
        <CartContext.Provider value={{
            cart,
            amounts,
            setCartItem,
            deleteCartItem,
            updateAmounts
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext

