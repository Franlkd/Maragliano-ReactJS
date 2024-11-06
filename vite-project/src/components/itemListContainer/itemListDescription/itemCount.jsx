import { useContext, useState } from "react";
import { CartContext } from "../../../Context/cartContext";

const ItemCount = ({item}) => {

    const { carrito, handleAgregar} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handlePlus = () => {
       cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const handleMenos = () => {
       cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleAddToCart = () => {
        handleAgregar(item, cantidad);
    };

    

    return(
    <div className="Btn-container">
        <button onClick={handlePlus} className="btn">+</button>
        <h2>{cantidad}</h2>
        <button onClick={handleMenos} className="btn">-</button>
        <button className="buy_cart" onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
    )
}

export default ItemCount