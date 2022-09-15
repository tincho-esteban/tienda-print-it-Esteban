const ItemDetail = ({detalle}) => {
  return (
    <div>
        <h3>{detalle.precio}</h3> 
        <img src={detalle.img}/>
        <p>{detalle.descripcion}</p>   
        <h2>{detalle.nombre}</h2>
    </div>
  )
}

export default ItemDetail;