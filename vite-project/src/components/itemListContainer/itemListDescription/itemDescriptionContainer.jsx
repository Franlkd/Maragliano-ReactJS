import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import pedirDatosPC from "../helper/pedirDatosPC";
import ItemDescription from "../itemListDescription/itemListDescription";

function ItemDescriptionContainer({items}) {
  const [item, setItem] = useState();
  const { Pc_name } = useParams(); 


  useEffect(() => {
    pedirDatosPC()
      .then((res) => {
        const selectedItem = res.find((item) => item.Pc_name === Pc_name);
        setItem(selectedItem);
      });
  }, [Pc_name]);

  return (
    <div>
      {item ? (
        <ItemDescription items={[item]} />
      ) : (
        <p>Cargando especificaciones...</p>
      )}
    </div>
  );
}

export default ItemDescriptionContainer;