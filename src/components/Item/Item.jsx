import Card from 'react-bootstrap/Card';
import './Item.css';

const Item = ({img, titulo, precio}) => {
  return (
    <Card className='contPrincipal'>
    <img src={img} alt={titulo} className='foto'/>
    <h4>{titulo}</h4>
    <h5>${precio}</h5>
    <div className='bloqueContador'>
    </div>
    </Card>
    
  )
}

export default Item;