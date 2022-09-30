import './NavBar.css';
import Logo from './Logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from '../Context/CartContext';
import { Display } from 'react-bootstrap-icons';

const navbar = () => {

    const {cart} = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-md navbar-dark  nav-grid">
            <div className="container-fluid">
                <NavLink className="navbar-brand nav-item" to={"/"}>
                    <img className="logo" src={Logo} alt="logo-print-it-3D"/>
                    <h1 className="PrintIt">Print it 3D</h1>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/pla"}>Pla</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/petg"}>Petg</NavLink>
                        </li>
                        {cart.length > 0 &&
                            <li className="nav-item">
                            <NavLink className="nav-link" to={"/cart"}><CartWidget/></NavLink>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar
