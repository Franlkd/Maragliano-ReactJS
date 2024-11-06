import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/cartContext';

function Cart() {
    const { carrito, totalPrice, vaciarCarrito, buyCart } = useContext(CartContext);
    const [showForm, setShowForm] = useState(false)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    const handleBuy = () => {
        setShowForm(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        buyCart();
        setShowForm(false);
        alert('¡Compra realizada con éxito!');
    }


    return (
        <div className='buy-container'>
            <h1>Su compra</h1>
            {
                carrito.map((item) => (
                    <div className="product-list" key={item.marca}>
                        <img src={item.pc_Img} alt={item.Pc_name} />
                        <h2>{item.Pc_name}</h2>
                        <h2>Precio: ${item.price}</h2>
                        {item.cantidad > 1 && <h2>
                            Cantidad total: {item.cantidad} <br />
                            Total: ${item.price * item.cantidad} </h2>}
                        <br />
                    </div>
                ))
            }

            {
                carrito.length > 0 ?

                <>
                    <h2>Precio total: ${totalPrice()}</h2>
                    <button onClick={handleVaciar} className='buy_cart'>Vaciar</button>
                    <button onClick={handleBuy} className='buy_cart'>Comprar</button>
                </> :
                <h2 className='carritoVacio'>El carrito esta vacio</h2>
            }

            {showForm && (
                            <form onSubmit={handleSubmit} onSubmitCapture={handleVaciar} className="compraForm">
                                <h2>Formulario de compra</h2>
                                <label>
                                    Nombre:
                                    <input type="text" name="nombre" required className='textInput'/>
                                </label>
                                <label>
                                    Dirección:
                                    <input type="text" name="direccion" required className='textInput'/>
                                </label>
                                <label>
                                    Email:
                                    <input type="email" name="email" required className='textInput'/>
                                </label>
                                <button type="submit" className='buy_cart'>Confirmar compra</button>
                            </form>
                        )}
                

        </div>
    );
}

export default Cart;