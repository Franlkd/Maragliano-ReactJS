import React from "react";
import logo from "./logo/logo.jpg"
import { Link } from 'react-router-dom'
import CartWidget from "../../pages/Carrito/cartWidget";

function Navbar() {


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
                        <li><CartWidget /></li>
                    </ul>
                </div>
            </header>
        </nav>  
    );
}

export default Navbar