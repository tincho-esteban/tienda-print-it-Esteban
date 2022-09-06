import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './ItemCount.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({Img, Nombre, Precio, Descripcion, Stock, Initial}) => {

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
    <Card className='contPrincipal' id='cont'>
      <Card.Img variant="top" src={Img} />
      <Card.Body>
        <Card.Title>{Nombre}</Card.Title>
        <Card.Text>Precio: ${Precio}</Card.Text>
        <Card.Text>{Descripcion}</Card.Text>
        <Card.Text>Stock: {Stock}</Card.Text>
        <ButtonGroup>
      <Button variant="primary" onClick={decrease} id='decreaseButton'>-</Button>
      <p className='contador'>{Contador}</p>
      <Button variant="primary" onClick={increase}id='increaseButton'>+</Button>
    </ButtonGroup>
    <Button variant="primary" className='Carrito' id='cartButton'>Añadir al carrito</Button>
      </Card.Body>
      <ToastContainer />
    </Card>
  )
}

export default ItemCount;