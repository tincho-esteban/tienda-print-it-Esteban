import { useState } from "react"
import { CartContext } from "./CartContext";
import { ToastContainer, toast } from 'react-toastify';

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (detalle , cantidad) => {
        if (isInCart(detalle.id)) {
            toast('El producto ya esta en el carrito', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                })
        }else {
            setCart([...cart, {...detalle, cantidad}]);
        }
    };

    const isInCart = (id) => {
        return cart.some((detalle) =>detalle.id === id);
    };

    const clear = () => {
        setCart([]);
    };

    const removeItem = (productId) => {
        let nuevoArreglo = [];
        cart.forEach((product) => {
            if(product.id === productId){
                console.log(product);
            }else {
                nuevoArreglo.push(product);
            }
        });
        setCart(nuevoArreglo);
    };
    
    return (
        <CartContext.Provider value={{cart , addToCart , removeItem,}}>
            {children}
            <ToastContainer />
        </CartContext.Provider>
    );
};

