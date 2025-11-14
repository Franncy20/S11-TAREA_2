//Promedio de satisfacción del usuario:
//Usa un for para leer 6 calificaciones de usuarios (1 a 5). Calcula el promedio y determina si la
//aplicación supera el estándar de 4.0.

let estandar = 4.0
let suma = 0

for (let i = 0; i < 6; i++){
    let calificacion = Number(prompt("Calificacion " + (i+1) + " (1-5): "))
    suma += calificacion
}

let promedio = suma / 6

if (promedio > 4.0){
    console.log("Promedio: " + promedio.toFixed(2))
    console.log("Supera el estandar " + estandar)
} else {
    console.log("Promedio: " + promedio.toFixed(2))
    console.log("No supera el estandar establecido " + estandar)
}