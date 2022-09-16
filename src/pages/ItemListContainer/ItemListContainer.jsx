import data from "../../components/MockData";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const {categoryName} = useParams();
  console.log(categoryName);
  const [productList, setProductList] = useState([]);
  useEffect (() => {
      if(categoryName){
          const response = data.filter((response) => response.category === categoryName)
          setProductList(response);
      }else{
          getProducts.then((response) => {
              setProductList(response);
          })
      }        
  },[categoryName])

  const getProducts = new Promise((resolve, reject) => { 
          setTimeout(() => {
              resolve(data);
          }, 2000);
          
      });
    return (
            <ItemList lista={productList}/>
    );
}

export default ItemListContainer;