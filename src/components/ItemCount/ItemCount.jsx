import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({Stock, Initial}) => {

    const [Contador, setContador ] = useState(Initial);

    const decrease = () => {
      if (Contador === 1) {
        document.getElementById('decreaseButton').disabled = true;
        setContador(Contador - 1);
      } else {
        setContador(Contador - 1);
        document.getElementById('increaseButton').disabled = false;
      };
  };

    const increase = () => {
      if (Contador === (Stock - 1)) {
        document.getElementById('increaseButton').disabled = true;
        setContador(Contador + 1);
        toast.error('no hay suficiente stock', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          }
          )
      } else {
        setContador(Contador + 1);
        document.getElementById('decreaseButton').disabled = false;
      }
    };
  return (
  <>
    <p>Stock: {Stock}</p>
      <ButtonGroup>
    <Button variant="primary" onClick={decrease} id='decreaseButton'>-</Button>
    <p className='contador'>{Contador}</p>
    <Button variant="primary" onClick={increase}id='increaseButton'>+</Button>
    </ButtonGroup>
    <Button variant="primary" className='Carrito' id='cartButton'>Añadir al carrito</Button>
    <ToastContainer />
  </>
  )
}

export default ItemCount;