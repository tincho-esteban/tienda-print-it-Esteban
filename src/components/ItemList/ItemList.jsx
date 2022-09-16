import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({lista}) => {
  return (
    <>
        {
        lista.map((producto)=>{
        return(
          <Link key={producto.id} to={"/item/"+ producto.id}>
            <Item key={producto.id} img={producto.img} titulo={producto.nombre} precio={producto.precio}/>
            </Link>
            );
        })}
    </>
  )
}

export default ItemList;