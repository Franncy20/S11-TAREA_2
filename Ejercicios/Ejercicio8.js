//Conversión de tiempo de ejecución:
//Implementa una función que convierta segundos a minutos y segundos, y úsala para mostrar el
//tiempo de ejecución de un algoritmo.

function convertirSegundos(segundos) {
    let minutos = Math.floor(segundos / 60)
    let segundosRestantes = segundos % 60
    return minutos + " minutos y " + segundosRestantes + " segundos"
}

let tiempoEjecucion = Number(prompt("Ingrese los segundos del algoritmo: "))
let resultado = convertirSegundos(tiempoEjecucion)

console.log("Tiempo de ejecución: " + resultado)