import data from "../../components/MockData";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const {categoryName} = useParams();
  const [productList, setProductList] = useState([]);
  
  useEffect (() => {
    
    const getProducts = new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
        getProducts.then((response) => {
            if(categoryName){
                setProductList(data.filter((response) => response.category === categoryName));
            } else {
                setProductList(response);
            }
        });
    },[categoryName])

    return (
            <ItemList lista={productList}/>
    );
}

export default ItemListContainer;