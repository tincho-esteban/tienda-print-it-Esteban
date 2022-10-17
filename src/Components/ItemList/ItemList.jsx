import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ list }) => {
    return (
        <>
            {list.map((product) => {
                return (
                    <Link key={product.id} to={`/item/${product.id}`}>
                        <Item
                            key={product.id}
                            img={product.img}
                            title={product.name}
                            price={product.price}
                        />
                    </Link>
                );
            })}
        </>
    );
};

export default ItemList;
