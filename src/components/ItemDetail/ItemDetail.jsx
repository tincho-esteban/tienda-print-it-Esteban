import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({detalle}) => {
  const onAddCart = (cantidad) => {
    toast(`Agregaste ${cantidad} productos al carrito`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      })
  };
  return (
    <div className='contFondo'>
      <Card className='contPrincipalDetalles'>
    <img src={detalle.img} alt={detalle.nombre} className='fotoDetalles'/>
    <h4>{detalle.nombre}</h4>
    <p>{detalle.descripcion}</p>
    <h5>${detalle.precio}</h5>
    <div className='bloqueContador'>
    <ItemCount Stock={detalle.stock} Initial={1} onAdd={onAddCart}/>
    </div>
    <ToastContainer />
    </Card>
    </div>
  )
}

export default Item;