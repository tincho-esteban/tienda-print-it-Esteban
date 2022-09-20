import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Item = ({detalle}) => {

  const [cart, setCart ] = useState(0);
  const [disableCount, setDisableCount] = useState(false);

  const onAddCart = (cantidad) => {
    toast(`Agregaste ${cantidad} productos al carrito`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      })
      setCart(cantidad);
      setDisableCount(true);
  };
  return (
    <div className='contFondo'>
      <Card className='contPrincipalDetalles'>
    <img src={detalle.img} alt={detalle.nombre} className='fotoDetalles'/>
    <h4>{detalle.nombre}</h4>
    <p>{detalle.descripcion}</p>
    <h5>${detalle.precio}</h5>
    <div className='bloqueContador'>
    {disableCount ? (<Link to={"/cart"} className='Carrito'><Button variant="warning">Ver el carrito</Button></Link>) : (<ItemCount Stock={detalle.stock} Initial={1} onAdd={onAddCart}/>)}
    </div>
    <ToastContainer />
    </Card>
    </div>
  )
}

export default Item;