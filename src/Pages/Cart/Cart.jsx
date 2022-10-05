import { useContext } from "react";
import { CartContext } from "../../Components/Context/CartContext";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Cart.css';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import moment from "moment/moment";
import { useState } from "react";

const Cart = () => {

  const {cart, removeItem} = useContext(CartContext);

  const [order, setOrder] = useState({
    buyer: {
        name: ``,
        phone: ``,
        email: ``
    },
    items: cart,
    total: cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
    date:moment().format("DD/MM/YYYY, h:mm:ss a")
})

const db = getFirestore();
const createOrder = () =>{
    const query = collection(db, "orders");
    addDoc(query, order)
    .then(({id}) => {
        alert(`Felicidades ${order.buyer.name} por tu compra.
            Tu nro de orden es: ${id}`)
    })
    .catch(() => alert("Tu compora no pudo ser realizada. Intentalo mas tarde"))
    
}

const handleInputChange = (e) => {

  setOrder({
      ...order,
      buyer: {
          ...order.buyer,
          [e.target.name]: e.target.value,
      }
  });
};


  return (
    <div className="cartPage">

<div className="formFlex">
                        <div className="fleInputs">
                            <input className="input" name="name" type="text" placeholder="Nombre" value={order.buyer.name} onChange={handleInputChange} />
                        </div>
                        <div className="fleInputs">
                            <input className="input" name="phone" type="phone" placeholder="Phone" value={order.buyer.phone} onChange={handleInputChange} />
                        </div>
                        <div className="fleInputs">
                            <input className="input" name="email" type="email" placeholder="Email" value={order.buyer.email} onChange={handleInputChange} />
                    </div>
                    
                    </div> 

      <h1>Carrito</h1>
      {cart.length ===0 ? (
          <>
              <h3>No hay productos en tu carrito</h3>
              <Link to={"/"}>Volver a inicio</Link>
          </>
          ) : (
          <>
          {cart.map((detalle) => (
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
          <Button onClick={createOrder}>Terminar Compra</Button>
          </>
      )}
  </div>
  )
}

export default Cart
