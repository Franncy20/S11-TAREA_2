//Conteo de bugs críticos:
//Usa un for para registrar la severidad de 10 errores (de 1 a 5). Si alguno tiene severidad ≥ 4,
//incrementa un contador de “bugs críticos”.

let c = 0

for (let i = 0; i < 10; i++){
    let errores = Numero(prompt("Nivel de severidad (1 a 5) de error " + (i+1) + ": "))
    if (errores >= 4){
        c++
    }
}

console.log("Total de bugs críticos: " + contador)