import React, {useState, useEffect} from "react";
import pedirDatosPC from "./helper/pedirDatosPC";
import ItemList from "./itemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        pedirDatosPC()
            .then((res) => {
                setItems(res)
            })
    }, [])
    
    
    return(
        <div className="bodyItem">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer