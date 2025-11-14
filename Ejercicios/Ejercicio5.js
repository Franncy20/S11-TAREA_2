//Clasificación de complejidad algorítmica:
//Solicita el número de líneas de código (LOC). Usa if-else para clasificarlo como “Simple” (<100),
//“Moderado” (100–500), o “Complejo” (>500).

let numLineas = Number(prompt("Ingrese el número de líneas de código:"))

if (numLineas < 100){
    console.log("Simple.")
} else if (numLineas >= 100 && numLineas <= 500){
    console.log("Moderado.")
} else {
    console.log("Complejo.")
}