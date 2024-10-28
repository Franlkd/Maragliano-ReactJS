import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
    
    return(
        <div className="product-container">
            {items && items.length > 0 ? (
                items.map((item) => (
                        <div key={item.Pc_name} className="product-list">
                            <img src={item.pc_Img} alt={item.Pc_name} className="imgPC" />
                            <h2>{item.Pc_name}</h2>
                            <h2>${item.price}</h2>
                            <Link to={`/item/${item.Pc_name}`} className="ver-mas">Ver más</Link>
                        </div>
                ))
            ) : (
                <p className="not-found">No hay productos disponibles.</p>
            )}
        </div>
    );
}

export default ItemList;
