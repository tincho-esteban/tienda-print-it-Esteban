import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({ quantity, setQuantity, stock, onAdd, product }) => {
    const [disableIncrease, setDisableIncrease] = useState(false);
    const [disableDecrease, setDisableDecrease] = useState(false);

    const decrease = () => {
        if (quantity === 1) {
            setDisableDecrease(true);
            setQuantity(quantity - 1);
            toast.error("No se puede selecciona menos", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
            });
        } else {
            setQuantity(quantity - 1);
            setDisableIncrease(false);
        }
    };

    const increase = () => {
        if (quantity === stock - 1) {
            setDisableIncrease(true);
            setQuantity(quantity + 1);
            toast.error("No hay suficiente stock", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
            });
        } else {
            setQuantity(quantity + 1);
            setDisableDecrease(false);
        }
    };

    const onAddCart = () => {
        if (quantity <= stock) {
            onAdd(quantity, product);
        }
    };

    return (
        <>
            <ButtonGroup>
                <Button
                    variant="primary"
                    onClick={decrease}
                    disabled={disableDecrease}
                >
                    -
                </Button>
                <p className="counter">{quantity}</p>
                <Button
                    variant="primary"
                    onClick={increase}
                    disabled={disableIncrease}
                >
                    +
                </Button>
            </ButtonGroup>
            <Button variant="primary" className="cart" onClick={onAddCart}>
                Añadir al carrito
            </Button>
            <ToastContainer />
        </>
    );
};

export default ItemCount;
