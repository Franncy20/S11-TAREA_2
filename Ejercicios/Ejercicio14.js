//Cálculo del costo de desarrollo:
//Implementa una función que reciba las horas trabajadas y el costo por hora de cada
//desarrollador. Retorna el costo total del proyecto.

let suma = 0

while (true){
    let ht = Number(prompt("Ingrese las horas trabajadas (0 para terminar): "))
    let ch = Number(prompt("Ingrese el costo por hora: "))
    if(ht === 0 && ch === 0){
        break
    }
    let t = costo_desarrollo(ht, ch)
    suma += t
}

function costo_desarrollo(horas, costo){
    return horas * costo
}

console.log("El costo total del proyecto es: $" + suma)