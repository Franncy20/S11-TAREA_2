//Clasificación de commits por autor:
//Pide al usuario ingresar el nombre del desarrollador y la cantidad de commits. Usa un
//diccionario para almacenar los datos y mostrar quién fue el más activo.

let diccionario = {}

while (true){
    let nombre = prompt("Ingresar nombre del desarrollador ('none' para finalizar): ")
    if (nombre === "none"){
        break
    }
    let cantidad = Number(prompt("Ingresar la cantidad de commits de " + nombre + ": "))

    diccionario[nombre] = cantidad
}

let masActivo = ""
let maxCommits = 0

for (let nombre in diccionario) {
    if (diccionario[nombre] > maxCommits) {
        maxCommits = diccionario[nombre]
        masActivo = nombre
    }
}

for (let nombre in diccionario) {
    console.log(nombre + ": " + diccionario[nombre] + " commits")
}

console.log("Desarrollador más activo: " + masActivo + " con " + maxCommits + " commits")

