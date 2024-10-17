import React from "react";
import pedirDatosPC from "../helper/pedirDatos"

const ItemList = ({}) => {

    
    return(
        <div>
            <h1>
                Productos:
            </h1>
            {
                items && items.length > 0 ? (

                items.map((item) => {
                    return(
                        <div key={item.PC} className="product-list">
                            <h2>CPU: {item.CPU}</h2>
                            <h2>GPU: {item.GPU}</h2>
                            <h2>RAM: {item.RAM}</h2>
                            <h2>Almacenamiento: {item.Almacenamiento}</h2>
                            <h2>Fuente de Poder: {item.Fuente_de_Poder}</h2>
                            <h2>Refrigeración: {item.Refrigeración}</h2>
                            <h2>Placa Madre: {item.Placa_Madre}</h2>
                            <h2>Gabinete: {item.Gabinete}</h2>
                        </div>
                    );
                })
                ) : (
                    <p className="not-found">No hay productos disponibles.</p>
                )
            }
        </div>
    );
}

export default ItemList;