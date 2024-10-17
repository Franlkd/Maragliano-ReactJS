import React from "react"
import datos from "../data.json"

function pedirDatos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos)
        }, 500)
    })
}


export default pedirDatos