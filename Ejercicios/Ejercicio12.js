//Verificación de despliegue exitoso:
//Pide el porcentaje de pruebas superadas y el número de errores post-despliegue. Usa una
//función verificar_despliegue() que indique si puede liberarse a producción (≥ 95% y errores ≤
//2).

let pruSuperadas = Number(prompt("Ingrese el porcentaje de las pruebas superadas: "))
let numErrores = Number(prompt("Ingrese el número de errores post-despliegue: "))

function verificar_despliegue(pruebas, errores){
    let res = ""
    if (pruebas >= 95 && errores <= 2){
        res = "Liberarse a producción."        
    } else {
        res = "Liberación no permitida."
    }
    return res
}

let resultado = verificar_despliegue(pruSuperadas, numErrores)

console.log(resultado)