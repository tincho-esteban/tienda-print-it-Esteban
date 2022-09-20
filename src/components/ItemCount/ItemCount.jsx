import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({Stock, Initial, onAdd}) => {

    const [Contador, setContador ] = useState(Initial);
    const [disableIncrease, setDisableIncrease] = useState(false);
    const [disableDecrease, setDisableDecrease] = useState(false);

    const decrease = () => {
      if (Contador === 1) {
        setDisableDecrease(true);
        setContador(Contador - 1);
        toast.error('No se puede selecciona menos', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          }
          )
      } else {
        setContador(Contador - 1);
        setDisableIncrease(false);
      };
  };

    const increase = () => {
      if (Contador === (Stock - 1)) {
        setDisableIncrease(true);
        setContador(Contador + 1);
        toast.error('No hay suficiente stock', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          }
          )
      } else {
        setContador(Contador + 1);
        setDisableDecrease(false);
      }
    };

    const onAddCart = () => {
      if (Contador <= Stock) {
        onAdd(Contador)
      }
    }

  return (
  <>
    <p>Stock: {Stock}</p>
      <ButtonGroup>
    <Button variant="primary" onClick={decrease} disabled={disableDecrease}>-</Button>
    <p className='contador'>{Contador}</p>
    <Button variant="primary" onClick={increase} disabled={disableIncrease}>+</Button>
    </ButtonGroup>
    <Button variant="primary" className='Carrito' onClick={onAddCart}>Añadir al carrito</Button>
    <Link to={"/cart"}><Button variant="primary" className='Carrito'>Finalizar compra</Button></Link>
    <ToastContainer />
  </>
  )
}

export default ItemCount;