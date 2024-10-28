import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import pedirDatosPC from '../itemListContainer/helper/pedirDatosPC';
import ItemList from '../itemListContainer/itemList';


const Marcas = () => {
    const [items, setItems] = useState([]);
    const { marca } = useParams(); // 

    useEffect(() => {
        pedirDatosPC()
            .then((res) => {
                const filteredItems = res.filter(items => items.Pc_name.includes(marca));
                setItems(filteredItems);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="bodyItem">
            <h1>Productos {marca}</h1>
            {items.length > 0 ? (
                <ItemList items={items} />
            ) : (
                <p>No se encontraron productos para {marca}</p>
            )}
        </div>
    );
}

export default Marcas;
