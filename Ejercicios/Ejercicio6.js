//Registro diario de commits (uso de for):
//Lee cuántos commits se hicieron en cada día de la semana. Calcula el promedio y muestra el
//día con más actividad.

let acomulador = 0
let mayorCommits = 0
let diaMayor = ""

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

for (let i = 0; i < dias.length; i++){
    let hoy = Number(prompt("Commits realizados el día " + dias[i] + ": "))
    acomulador+=hoy
    if (hoy > mayorCommits) {
    mayorCommits = hoy
    diaMayor = dias[i]
    }
}

let promedio = acomulador / 7

console.log("El promedio de los commits realizados en la semana es: " + promedio.toFixed(2))
console.log("El día con mas actividad fue: " + diaMayor)            
