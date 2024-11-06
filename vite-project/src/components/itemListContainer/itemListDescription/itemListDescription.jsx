import React, { useState } from "react";
import ItemCount from "./itemCount";

const ItemDescription = ( {items, stock} ) => {
    

    return(
        <div>
            <h1>
                {items[0].Pc_name}
            </h1>
            {
                items && items.length > 0 ? (

                items.map((item) => {
                    return(
                        <div key={item.PC} className="descrption-List">
                            <img src={item.pc_Img} alt={item.Pc_name} className="img"/>
                            <h2 className="descriptions">CPU: {item.CPU}</h2>
                            <h2 className="descriptions">GPU: {item.GPU}</h2>
                            <h2 className="descriptions">RAM: {item.RAM}</h2>
                            <h2 className="descriptions">Almacenamiento: {item.Almacenamiento}</h2>
                            <h2 className="descriptions">Fuente de Poder: {item.Fuente_de_Poder}</h2>
                            <h2 className="descriptions">Refrigeración: {item.Refrigeración}</h2>
                            <h2 className="descriptions">Placa Madre: {item.Placa_Madre}</h2>
                            <h2 className="descriptions">Gabinete: {item.Gabinete}</h2>
                            <ItemCount item={item}/>
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

export default ItemDescription;