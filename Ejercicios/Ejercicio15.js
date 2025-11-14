//Control de entregas del sprint:
//Pide la fecha de inicio del sprint y su duración (en días). Calcula y muestra la fecha estimada de
//entrega.

let inicio = prompt("Ingrese la fecha de inicio del sprint (Ej: 12/08/2025): ")
let duracion = Number(prompt("Ingrese su duración (en días): "))

let partes = inicio.split("/")
let dia = Number(partes[0])
let mes = Number(partes[1]) - 1  
let año = Number(partes[2])

let fechaInicio = new Date(año, mes, dia)

fechaInicio.setDate(fechaInicio.getDate() + duracion)

let diaEntrega = fechaInicio.getDate()
let mesEntrega = fechaInicio.getMonth() + 1  
let añoEntrega = fechaInicio.getFullYear()

console.log("Fecha de entrega: " + diaEntrega + "/" + mesEntrega + "/" + añoEntrega)