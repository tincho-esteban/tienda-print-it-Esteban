import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import './Item.css';

const Item = ({img, titulo,precio}) => {
  return (
    <Card className='contPrincipal'>
    <img src={img} alt={titulo} className='foto'/>
    <h4>{titulo}</h4>
    <h5>${precio}</h5>
    <div className='bloqueContador'>
    <ItemCount Stock={5} Initial={0}/>
    </div>
    </Card>
  )
}

export default Item;