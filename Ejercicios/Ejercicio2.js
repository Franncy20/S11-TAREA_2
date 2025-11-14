//Validación de contraseña segura:
//Pide una contraseña e indica con if si cumple las condiciones mínimas: longitud ≥ 8 y contiene
//al menos un número.

let password = prompt("Ingrese su contraseña:")
let tieneNumero = false

for (let i = 0; i < password.length; i++) {
    if (!isNaN(Number(password[i]))) {
        tieneNumero = true
        break
    }
}

if (password.length >= 8 && tieneNumero){
    console.log("Contraseña válida.")
}else{
    console.log("Contraseña inválida.")
}