import {
    getFirestore,
    getDocs,
    collection,
    query,
    where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { categoryName } = useParams();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts();
    }, [categoryName]);

    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, "products");
        if (categoryName) {
            const queryFiltered = query(
                querySnapshot,
                where("category", "==", categoryName),
            );
            getDocs(queryFiltered).then((response) => {
                const data = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setProductList(data);
            });
        } else {
            getDocs(querySnapshot).then((response) => {
                const data = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setProductList(data);
            });
        }
    };

    return <ItemList list={productList} />;
};

export default ItemListContainer;
