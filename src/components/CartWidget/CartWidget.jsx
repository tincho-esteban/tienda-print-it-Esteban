import { Cart } from 'react-bootstrap-icons';
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <>
    <Cart />
    <span className='spanCarrito'>0</span>
    </>
  )
}

export default CartWidget;