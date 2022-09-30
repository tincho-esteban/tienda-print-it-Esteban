import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({detalle}) => {

  const [cantidad, setCantidad ] = useState(1);
  const [disableCount, setDisableCount] = useState(false);
  const {addToCart} = useContext(CartContext);
  
    function onAddCart (cantidad, detalle) {  
      toast(`Agregaste ${cantidad} productos al carrito`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        })
        addToCart(detalle, cantidad);
        setDisableCount(true);
    }

  return (
    <div className='contFondo'>
      <Card className='contPrincipalDetalles'>
    <img src={detalle.img} alt={detalle.nombre} className='fotoDetalles'/>
    <h4>{detalle.nombre}</h4>
    <p>{detalle.descripcion}</p>
    <h5>${detalle.precio}</h5>
    <div className='bloqueContador'>
    {disableCount ? (<Link to={"/cart"} className='Carrito'><Button variant="warning">Ver el carrito</Button></Link>) : (<ItemCount setCantidad={setCantidad} cantidad={cantidad} stock={detalle.stock} onAdd={onAddCart} detalle={detalle}/>)}
    </div>
    </Card>
    </div>
  )
}

export default ItemDetail;
