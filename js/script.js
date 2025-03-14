
const opciones = ["piedra", "papel", "tijera"];
const botones = document.getElementsByClassName("boton-jugada");
const resultados = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");
let puntosUsuario = 0;
let puntosOrdenador = 0;
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
        const eleccionJugador = botones[i].getAttribute("data-jugada");
        const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];
        let mensaje = `Tú elegiste ${eleccionJugador}. La máquina eligió ${eleccionMaquina}. `;
        if (eleccionJugador === eleccionMaquina) {
            mensaje += "¡Empate!";
        } else if (
            (eleccionJugador === "piedra" && eleccionMaquina === "tijera") ||
            (eleccionJugador === "papel" && eleccionMaquina === "piedra") ||
            (eleccionJugador === "tijera" && eleccionMaquina === "papel")
        ) {
            mensaje += "¡Ganaste!";
            puntosUsuario++;
        } else {
            mensaje += "Perdiste...";
            puntosOrdenador++;
        }
        resultados.textContent = mensaje;
        contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
        contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
    });
}












