import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(product => product.id === id);
            cart[pos].quantity += quantity; 
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }

    const removeItem = (id) => {
        const items = cart.filter(product => product.id != id);
        setCart([...items]);
    }

    const clear = () => {
        setCart([]);
        Toastify({

            text: "¡Carrito vaciado!",
            duration: 4000,
            style: {
                background: "linear-gradient(to right, red, #8B0000)",
              },
            
            }).showToast();
    }

    const purchaseClear = () => {
        setCart ([]);
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id);
    }

    const TotalProductsQuantity = () => {
        return cart.reduce((acum, product) => acum += product.quantity, 0);
    }

    const TotalProductsSum = () => {
        return cart.reduce((acum, product) => acum += product.quantity * product.price, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, TotalProductsQuantity, TotalProductsSum, purchaseClear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;