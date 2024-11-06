import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);

  const handleAgregar = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const NewCart = [...carrito];
    const itemOnCart = NewCart.find((item) => item.Pc_name === itemAgregado.Pc_name);

    if (itemOnCart) {
      itemOnCart.cantidad += cantidad;
    } else {
      NewCart.push(itemAgregado);
    }
    setCarrito(NewCart);
  };

  const cartCantidad = () => {
    return carrito.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const totalPrice = () => {
    return carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const buyCart = () => {
    
  }

useEffect(() => {
  localStorage.setItem("carrito", JSON.stringify(carrito))
}, [carrito])


return(
    <CartContext.Provider value={{ 
        carrito,
        handleAgregar, 
        cartCantidad, 
        totalPrice, 
        vaciarCarrito,
        buyCart
        }}>
        {children}
    </CartContext.Provider>
)
}