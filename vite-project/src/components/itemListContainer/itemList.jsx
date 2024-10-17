import React from "react";
import pedirDatosPC from "./helper/pedirDatosPC";

const ItemList = ({items}) => {

    console.log(items)
    
    return(
        <div className="product-container">
            {items && items.length > 0 ? (
                items.map((item) => (
                        <div key={item.Pc_name} className="product-list">
                            <img src={item.pc_Img} alt={item.Pc_name} className="imgPC" />
                            <h2>{item.Pc_name}</h2>
                            <h2>${item.price}</h2>
                            <a href={`/item/${item.Pc_name}`} className="ver-mas">Ver mas</a>
                        </div>
                ))
            ) : (
                <p className="not-found">No hay productos disponibles.</p>
            )}
        </div>
    );
}

export default ItemList;
