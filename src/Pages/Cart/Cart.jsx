import { useContext } from "react";
import { CartContext } from "../../Components/Context/CartContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Cart.css";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import moment from "moment/moment";
import { useState } from "react";

const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext);

    const [order, setOrder] = useState({
        buyer: {
            name: ``,
            phone: ``,
            email: ``,
        },
        items: cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        date: moment().format("DD/MM/YYYY, h:mm:ss a"),
    });

    const db = getFirestore();
    const createOrder = () => {
        const query = collection(db, "orders");
        addDoc(query, order)
            .then(({ id }) => {
                alert(`Felicidades ${order.buyer.name} por tu compra.
            Tu nro de orden es: ${id}`);
            })
            .catch(() =>
                alert("Tu compora no pudo ser realizada. Intentalo mas tarde"),
            );
    };

    const handleInputChange = (e) => {
        setOrder({
            ...order,
            buyer: {
                ...order.buyer,
                [e.target.name]: e.target.value,
            },
        });
    };

    return (
        <div className="cartPage">
            <h1>Carrito</h1>
            {cart.length === 0 ? (
                <>
                    <h3>No hay productos en tu carrito</h3>
                    <Link to={"/"}>Volver a inicio</Link>
                </>
            ) : (
                <div className="cartContent">
                    {cart.map((product) => (
                        <>
                            <Card className="contPrincipal" key={product.id}>
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="foto"
                                />
                                <h4>{product.name}</h4>
                                <h5>Cantidad: {product.quantity}</h5>
                                <h5>
                                    Total: ${product.price * product.quantity}
                                </h5>
                                <Button onClick={() => removeItem(product.id)}>
                                    Eliminar producto
                                </Button>
                            </Card>
                        </>
                    ))}
                    <div className="cartPage">
                        <Button onClick={() => clear()}>Vaciar Carrito</Button>
                        <h3>
                            Total carrito: $
                            {cart.reduce(
                                (acc, cartItem) =>
                                    acc + cartItem.price * cartItem.quantity,
                                0,
                            )}{" "}
                        </h3>
                        <Button onClick={createOrder}>Terminar Compra</Button>
                        <Card className="cartForm">
                            <div>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Nombre"
                                    value={order.buyer.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <input
                                    name="phone"
                                    type="phone"
                                    placeholder="celular"
                                    value={order.buyer.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={order.buyer.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
