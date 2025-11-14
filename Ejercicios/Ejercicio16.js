//Simulación de usuarios activos:
//Usa un while para simular el crecimiento de usuarios activos en una app (por ejemplo, +5%
//cada día). Detén el ciclo cuando superen los 1000.

let usuarios = 100
let dias = 0
let porcentaje = 0.05

while (true){
    dias++ 

    usuarios = Math.round(usuarios * (1 + porcentaje))

    console.log("Día " + dias + ": " + usuarios + " usuarios")

    if (usuarios > 1000) {
        break 
    }
}