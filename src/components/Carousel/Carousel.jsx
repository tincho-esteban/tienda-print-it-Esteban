
//ayuda no funciona :(
//el error esta en el css creo

import {Carousel} from 'react-bootstrap';
import "./Carousel.css";

const carousel = () => {
  return (
    <Carousel className='carrusel'>
      <Carousel.Item>
        <div className='carrusel-1'/> {/*no uso la etiqueta <img/> porque sino falla el responsive, en desarrollo web lo solucione de esta forma pero en react no funciona*/}
        <Carousel.Caption className='carousel-caption'>
          <h3>Imprimimos todas tus ideas en 3D</h3>
          <p>Vos lo pensas, print it lo materializa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carrusel-2'/>

        <Carousel.Caption className='carousel-caption'>
          <h3>Ultima tecnología en impresión FDM</h3>
          <p>contamos con la ultima tecnología en impresión FDM para poder brindar el mejor servicio</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carrusel-3'/>

        <Carousel.Caption className='carousel-caption'>
          <h3>Diseño personalizado 3D</h3>
          <p>Diseñamos tus ideas para poder materializarlas</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default carousel