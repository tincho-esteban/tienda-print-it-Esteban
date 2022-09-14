import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import './Item.css';

const Item = ({img, titulo, descripcion, precio}) => {
  return (
    <Card className='contPrincipal'>
    <img src={img} alt={titulo} className='foto'/>
    <h4>{titulo}</h4>
    <p>{descripcion}</p>
    <h5>${precio}</h5>
    <div className='bloqueContador'>
    <ItemCount Stock={5} Initial={0}/>
    </div>
    </Card>
  )
}

export default Item;