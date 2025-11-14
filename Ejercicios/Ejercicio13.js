//Registro de módulos desarrollados:
//Con un ciclo while, pide el nombre del módulo y las líneas de código hasta ingresar “fin”.
//Calcula la cantidad total de líneas desarrolladas.

let c = 0

while (true){
    let modulo = prompt("Nombre del módulo (o escribe 'fin' para terminar): ")
    if (modulo === "fin"){
        break
    }
    let lineasCodigo = Number(prompt("Lineas de codigo del módulo " + modulo + ": "))
    c+= lineasCodigo
}

console.log("Total de líneas de código desarrolladas: " + c)