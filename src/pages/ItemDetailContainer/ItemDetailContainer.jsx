import data from "../../components/MockData";
import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
  const {id} = useParams();
    

    const [producDetail, setProductDetail] = useState([]);
    useEffect (() => {
        getItem.then((response) => {
            const dataFiltrada = response.filter((product) => product.id === id);
            setProductDetail(...dataFiltrada);
        })
    },[id])

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

  return <ItemDetail detalle={producDetail}/>;
};

export default ItemDetailContainer;
