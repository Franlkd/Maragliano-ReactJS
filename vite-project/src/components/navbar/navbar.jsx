import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import logo from "./logo/logo.jpg"

function Navbar() {
    
    const shoppingBagIcon = <FontAwesomeIcon icon={faShoppingBag} />;

    return (
        <nav>
            <header>
                <div className="logo">
                    <a href="/"><img src={logo} alt="TecnoPC" /></a>
                </div>
                <div className="menu-interactive">
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/categorias">Categorías</a></li>
                        <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                        <li><a href="/carrito">{shoppingBagIcon}</a></li>
                    </ul>
                </div>
            </header>
        </nav>  
    );
}

export default Navbar;
