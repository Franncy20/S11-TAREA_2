//Promedio de cobertura de código:
//Pide los porcentajes de cobertura de 5 módulos de software. Calcula el promedio e indica si
//cumple con el mínimo de 80%.

let suma = 0

for (let i = 0; i < 5; i++){
    let pCobertura = prompt("Modulo " + (i+1) + ": ")
    suma += Number(pCobertura)
}

let promedio = suma/5

if (promedio >= 80){
    console.log("Cumple.")
} else {
    console.log("No cumple.")
}