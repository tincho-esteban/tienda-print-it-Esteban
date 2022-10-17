import Card from "react-bootstrap/Card";
import "./Item.css";

const Item = ({ img, title, price }) => {
    return (
        <Card className="mainContainer">
            <img src={img} alt={title} className="picture" />
            <h4>{title}</h4>
            <h5>${price}</h5>
        </Card>
    );
};

export default Item;
