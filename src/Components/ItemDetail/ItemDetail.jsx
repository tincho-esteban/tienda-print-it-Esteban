import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";
import "./ItemDetail.css";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [disableCount, setDisableCount] = useState(false);
    const { addToCart } = useContext(CartContext);

    function onAddCart(quantity, product) {
        toast(`Agregaste ${quantity} productos al carrito`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
        });
        addToCart(product, quantity);
        setDisableCount(true);
    }

    return (
        <div className="backgroundContainer">
            <Card className="mainContainerDetails">
                <img
                    src={product.img}
                    alt={product.name}
                    className="detailPicture"
                />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <h5>${product.price}</h5>
                <div className="counterContainer">
                    {disableCount ? (
                        <Link to={"/cart"} className="cart">
                            <Button variant="warning">Ver el carrito</Button>
                        </Link>
                    ) : (
                        <>
                            <p>stock: {product.stock}</p>
                            <ItemCount
                                setQuantity={setQuantity}
                                quantity={quantity}
                                stock={product.stock}
                                onAdd={onAddCart}
                                product={product}
                            />
                        </>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default ItemDetail;
