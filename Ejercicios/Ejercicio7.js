//Detección de errores de compilación:
//Pide ingresar el número de errores en cada intento de compilación hasta que se ingrese 0. Usa
//un while para contar cuántos intentos tuvieron más de 3 errores.

let numCompilacion = 0

while (true) {
    let ingreso = Number(prompt("Errores en compilación (0 para salir): "))
    
    if (ingreso === 0) {
        break
    }

    if (ingreso > 3) {
    numCompilacion++ 
    }
}

console.log("Intentos que tuvieron mas de 3 errores: " + numCompilacion)
