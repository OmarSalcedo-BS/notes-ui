import { consultarLocalStorage, limpiarLocalStorage } from "../../config/local-storage.js";
import { alertaRedireccion } from "../../utils/alertas.js";

let usuario = consultarLocalStorage("usuario")
let inicialesUsuario = usuario.nombre.split(" ").map((item) => item[0]).join("")
console.log(inicialesUsuario)
document.querySelector("#inicialesUsuario").textContent = inicialesUsuario

let btnCerrarSesion = document.querySelector("#btnCerrarSesion")
btnCerrarSesion.addEventListener("click", () => {
    limpiarLocalStorage("usuario")
    alertaRedireccion("Sesión finalizada", "info", "/index.html")
})