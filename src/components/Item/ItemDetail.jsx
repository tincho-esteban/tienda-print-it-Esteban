import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import './Item.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({img, titulo, descripcion, precio}) => {
  const onAddCart = (cantidad) => {
    toast(`Agregaste ${cantidad} productos al carrito`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      })
  };
  return (
    <Card className='contPrincipal'>
    <img src={img} alt={titulo} className='foto'/>
    <h4>{titulo}</h4>
    <p>{descripcion}</p>
    <h5>${precio}</h5>
    <div className='bloqueContador'>
    <ItemCount Stock={5} Initial={1} onAdd={onAddCart}/>
    </div>
    <ToastContainer />
    </Card>
    
  )
}

export default Item;