//Conteo de pruebas aprobadas:
//Pide cuántas pruebas unitarias se ejecutaron y, por cada una, si fue “ok” o “fail”. Usa un
//contador para mostrar cuántas aprobaron.

let pruebasU = prompt("Ingrese el número de pruebas unitarias realizadas:")
let totalPruebas = Number(pruebasU)
let contador = 0

for (let i=0; i < totalPruebas; i++){
    let resultado = prompt("Prueba " + (i + 1) + ": ¿ok o fail?")

    if(resultado === "ok"){
        contador++
    }
}

console.log("Puebas aprobadas: " + contador)