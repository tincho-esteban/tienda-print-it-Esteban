import Item from "../Item/Item";

const ItemList = ({lista}) => {
  return (
    <>
        {
        lista.map((producto)=>{
        return(
            <Item key={producto.id} img={producto.img} titulo={producto.nombre} descripcion={producto.descripcion} precio={producto.precio}/>
            );
        })}
    </>
  )
}

export default ItemList;