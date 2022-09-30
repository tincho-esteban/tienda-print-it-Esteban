import { Cart } from 'react-bootstrap-icons';
import "./CartWidget.css";
import { useContext } from "react"
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {

  const {cart} = useContext(CartContext);

  return (
    <>
    <Cart />
    <span className='spanCarrito'>{cart.reduce((acc,cartItem) => acc + cartItem.cantidad, 0)}</span>
    </>
  )
}

export default CartWidget;
