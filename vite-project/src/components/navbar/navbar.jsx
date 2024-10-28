import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import logo from "./logo/logo.jpg"
import { Link } from 'react-router-dom'

function Navbar() {
    
    const shoppingBagIcon = <FontAwesomeIcon icon={faShoppingBag} />;

    return (
        <nav>
            <header>
                <div className="logo">
                    <Link to="/"><img src={logo} alt="TecnoPC" /></Link>
                </div>
                <div className="menu-interactive">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Categorias">Categorías</Link></li>
                        <li><Link to="/Sobre-Nosotros">Sobre Nosotros</Link></li>
                        <li><Link to="/Contacto">Contacto</Link></li>
                        <li><Link to="/Carrito">{shoppingBagIcon}</Link></li>
                    </ul>
                </div>
            </header>
        </nav>  
    );
}

export default Navbar