import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({cantidad, setCantidad, stock, onAdd, detalle}) => {

    const [disableIncrease, setDisableIncrease] = useState(false);
    const [disableDecrease, setDisableDecrease] = useState(false);

    const decrease = () => {
      if (cantidad === 1) {
        setDisableDecrease(true);
        setCantidad(cantidad - 1);
        toast.error('No se puede selecciona menos', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          }
          )
      } else {
        setCantidad(cantidad - 1);
        setDisableIncrease(false);
      };
  };

    const increase = () => {
      if (cantidad === (stock - 1)) {
        setDisableIncrease(true);
        setCantidad(cantidad + 1);
        toast.error('No hay suficiente stock', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          }
          )
      } else {
        setCantidad(cantidad + 1);
        setDisableDecrease(false);
      }
    };

    const onAddCart = () => {
      if (cantidad <= stock) {
        onAdd(cantidad, detalle)
      }
    }

  return (
  <>
    <p>Stock: {stock}</p>
      <ButtonGroup>
    <Button variant="primary" onClick={decrease} disabled={disableDecrease}>-</Button>
    <p className='contador'>{cantidad}</p>
    <Button variant="primary" onClick={increase} disabled={disableIncrease}>+</Button>
    </ButtonGroup>
    <Button variant="primary" className='Carrito' onClick={onAddCart}>Añadir al carrito</Button>
    <ToastContainer />
  </>
  )
}

export default ItemCount;
