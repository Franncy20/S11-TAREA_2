//Cálculo de eficiencia del código:
//Implementa una función que calcule la eficiencia de un programa según el tiempo de ejecución
//y la cantidad de operaciones (eficiencia = operaciones/tiempo).

let t = Number(prompt("Ingrese el tiempo de ejecucion: "))
let c = Number(prompt("Ingrese la cantidad de operaciones: "))

function eficiencia(tiempo, cantidad){
    return cantidad/tiempo
}

let res = eficiencia(t, c)

console.log("La eficiencia del programa es: " + res)