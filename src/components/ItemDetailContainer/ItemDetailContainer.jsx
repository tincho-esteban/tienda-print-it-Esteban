import data from "../MockData";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [DetalleProducto, setDetalleProducto] = useState([]);

    useEffect(() => {
    getProducts.then((response) => {
        setDetalleProducto(response);
    });
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.find(()=> data.id === '1'));
    }, 2000);
  });

  return <ItemDetail detalle={DetalleProducto}/>;
};

export default ItemDetailContainer;
