//Control de recursos de servidor:
//Crea una función que reciba el uso de CPU, RAM y disco. Si alguno supera el 90%, muestra
//“Advertencia: sobrecarga detectada”.

function usabilidad (CPU, RAM, disco){
    let res = ""
    if (CPU > 90 || RAM > 90 || disco > 90){
        res = "Advertencia: sobrecarga detectada."
    } else {
        res = "Sin advertencias."
    }
    return res
}

let usoCPU = Number(prompt("Uso de la CPU: "))
let usoRAM = Number(prompt("Uso del RAM: "))
let usoDisco = Number(prompt("Uso del disco: "))
let resultado = usabilidad(usoCPU, usoRAM, usoDisco)

console.log(resultado)