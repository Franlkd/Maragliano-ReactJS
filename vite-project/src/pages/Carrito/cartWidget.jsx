import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context/cartContext';

function CartWidget() {

    const { cartCantidad } = useContext(CartContext)

    return (
        <div>
            <Link to="/carrito">
                <FontAwesomeIcon icon={faShoppingBag} />
                <span className='cartCantidad'> {cartCantidad()}</span>
            </Link>
        </div>
    );
};

export default CartWidget