import { useContext } from "react";
import { CartContext } from "../../Components/Context/CartContext";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Cart.css';

const Cart = () => {

  const {cart, removeItem} = useContext(CartContext);

  return (
    <div className="cartPage">
      <h1>Carrito</h1>
      {cart.length ===0 ? (
          <>
              <h3>No hay productos en tu carrito</h3>
              <Link to={"/"}>Volver a inicio</Link>
          </>
          ) : (
          <>
          {cart.map((detalle, cantidad) => (
              <>
              <Card className='contPrincipal' key={detalle.id}>
              <img src={detalle.img} alt={detalle.nombre} className='foto'/>
              <h4>{detalle.nombre}</h4>
              <h5>Cantidad: {detalle.cantidad}</h5>
              <h5>Total: ${detalle.precio*detalle.cantidad}</h5>
              <Button onClick={() => removeItem(detalle.id)}>Eliminar producto</Button>
              </Card>
              </>
      ))}
          <h3>Total carrito: ${cart.reduce((acc,cartItem) => acc + (cartItem.precio*cartItem.cantidad), 0)} </h3>
          </>
      )}
  </div>
  )
}

export default Cart