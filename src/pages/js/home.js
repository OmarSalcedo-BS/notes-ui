import { consultarLocalStorage, guardarLocalStorage, limpiarLocalStorage } from "../../config/local-storage.js";
import { alertaRedireccion } from "../../utils/alertas.js";
import { generarId } from "../../utils/generadores-codigos.js";
import { Notas } from "../../config/database.js";
import { Usuarios } from "../../config/database.js";


let token = consultarLocalStorage("token")
if (!token) {
    window.location.href = "/index.html"
}

let usuario = consultarLocalStorage("usuario")
let inicialesUsuario = usuario.nombre.split(" ").map((item) => item[0]).join("")
console.log(inicialesUsuario)
document.querySelector("#inicialesUsuario").textContent = inicialesUsuario

let btnCerrarSesion = document.querySelector("#btnCerrarSesion")
btnCerrarSesion.addEventListener("click", () => {
    limpiarLocalStorage("usuario")
    limpiarLocalStorage("token")
    alertaRedireccion("Sesión finalizada", "info", "/index.html")
})

let form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    let descripcion = document.getElementById("descripcion").value
    let fecha = new Date()
    let nota = {
        id: generarId(),
        descripcion,
        fecha,
        autor: usuario.nombre
    }

    Notas.push(nota)
    console.log(Notas)
    guardarLocalStorage("notas", Notas)
    mostrarNotas()
})

function mostrarNotas() {
    let notas = consultarLocalStorage("notas")
    notas.map((nota) => {
        let card = document.createElement("div")
        let autor = document.createElement("p")
        let fecha = document.createElement("p")
        let descripcion = document.createElement("p")

        autor.textContent = nota.autor
        fecha.textContent = nota.fecha
        descripcion.textContent = nota.descripcion


    })

}