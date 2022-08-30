import './navbar.css';
import logo from './logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark  nav-grid">
            <div className="container-fluid">
                <a className="navbar-brand nav-item" href="index.html">
                    <img className="logo" src={logo} alt="logo-print-it-3D"/>
                    <h1 className="PrintIt">Print it 3D</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="a">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="a">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="a">Trabajos</a>
                        </li>
                        <NavDropdown title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Diseño 3D</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Impresión 3D</NavDropdown.Item>
                        </NavDropdown>
                        <li className="nav-item">
                            <a className="nav-link" href="a">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar