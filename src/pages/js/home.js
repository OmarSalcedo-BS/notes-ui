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
        autor: Usuarios.nombre
    }

    Notas.push(nota)
    console.log(Notas)
    guardarLocalStorage("notas", Notas)
})