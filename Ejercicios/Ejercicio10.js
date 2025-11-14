//Cálculo de productividad del equipo:
//Solicita el número de historias completadas y las horas invertidas. Calcula la velocidad
//promedio (historias/hora) y muestra si supera el objetivo establecido.

const objetivo = 1.5
let numHistorias = prompt("Ingrese el numero de historias completadas: ")
let horas = prompt("Ingrese el numero de horas invertidas: ")
let promedio = numHistorias/horas

if (promedio > objetivo){
    console.log("Supera el objetivo establecido (" + objetivo + ")")
} else {
    console.log("Objetivo no superado (" + objetivo + ")")
}
