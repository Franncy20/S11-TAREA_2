//Simulación de peticiones al servidor:
//Con un while, simula peticiones HTTP a un servidor. Cada iteración genera entre 50 y 100
//solicitudes (usa random). Detén el ciclo cuando el total supere 1000.

let totalSolicitudes = 0

while (totalSolicitudes <= 1000) {
    let solicitudesAhora = Math.floor(Math.random() * 51 + 50)
    totalSolicitudes += solicitudesAhora
    console.log("Solicitudes: " + solicitudesAhora + " (Total: " + totalSolicitudes + ")")
}

console.log("Total final: " + totalSolicitudes)