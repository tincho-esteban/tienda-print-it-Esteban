import data from "../MockData";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

  const [ListaProductos , setListaProductos] = useState([])
    
    useEffect(() => {
        getProducts.then((response)=>{
          setListaProductos(response)
        });
      }, []);
    

    const getProducts =  new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(data);
            } , 2000);
        });
    
    return (
            <ItemList lista={ListaProductos}/>   
    );
}

export default ItemListContainer;