import ItemDetail from "../Item/ItemDetail";

const ItemList = ({lista}) => {
  return (
    <>
        {
        lista.map((producto)=>{
        return(
            <ItemDetail key={producto.id} img={producto.img} titulo={producto.nombre} descripcion={producto.descripcion} precio={producto.precio}/>
            );
        })}
    </>
  )
}

export default ItemList;