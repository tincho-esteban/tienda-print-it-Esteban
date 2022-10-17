import { useState } from "react";
import { CartContext } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        if (isInCart(product.id)) {
            toast("El producto ya esta en el carrito", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
            });
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    const clear = () => {
        setCart([]);
    };

    const removeItem = (productId) => {
        let newArray = [];
        cart.forEach((product) => {
            if (product.id === productId) {
                console.log(product);
            } else {
                newArray.push(product);
            }
        });
        setCart(newArray);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear }}>
            {children}
            <ToastContainer />
        </CartContext.Provider>
    );
};
