import datoPC from "../PC.json"

export const pedirDatosPC = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datoPC)
        }, 500)
    })
}

const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(datoPC)
    }, 500)
})
}

export default pedirDatos