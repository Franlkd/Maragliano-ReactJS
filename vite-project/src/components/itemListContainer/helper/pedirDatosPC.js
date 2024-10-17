import React from "react"
import datoPC from "../PC.json"

function pedirDatos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datoPC)
        }, 500)
    })
}


export default pedirDatos