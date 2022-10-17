import { useEffect, useState } from "react";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
        getItem();
    });

    const getItem = () => {
        const db = getFirestore();
        const queryDoc = doc(db, "products", id);
        getDoc(queryDoc)
            .then((res) => {
                setProductDetail({ id: res.id, ...res.data() });
            })
            .catch((err) => console.log(err));
    };

    return <ItemDetail product={productDetail} />;
};

export default ItemDetailContainer;
