//Control de versiones de código:
//Solicita el número de versión actual y la nueva versión propuesta. Si la nueva versión es mayor,
//muestra “Actualización disponible”; si es igual, “Versión actualizada”.

let vActual = 1.0
let vPropuesta = 1.0

if (vPropuesta > vActual) {
    console.log("Actualización disponible")
} else if (vPropuesta === vActual) {
    console.log("Versión actualizada")
} else {
    console.log("Actualización no disponible")

}
