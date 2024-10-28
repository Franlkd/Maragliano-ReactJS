import { useState } from "react";
import { pedirDatosPC } from "../helper/pedirDatosPC";

const ItemCount = ({item}) => {

    const [cantidad, setCantidad] = useState(1)

    const handlePlus = () => {
       cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const handleMenos = () => {
       cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleAgregar = () => {
        console.log( {...item, cantidad} );
    }

    return(
    <div className="Btn-container">
        <button onClick={handlePlus} className="btn">+</button>
        <h2>{cantidad}</h2>
        <button onClick={handleMenos} className="btn">-</button>
        <button className="buy_cart" onClick={handleAgregar}>Añadir al carrito</button>
    </div>
    )
}

export default ItemCount