import { Usuarios } from "./src/config/database.js"
import { alertaRedireccion } from "./src/utils/alertas.js"

let btnLogin = document.querySelector("#login")

btnLogin.addEventListener("click", () => {
    let correo = document.querySelector("#email").value
    let contrasena = document.querySelector("#password").value
    let usuarioAuth = Usuarios.find((usuario) => correo == usuario.Correo && contrasena == usuario.Contraseña)

    if (usuarioAuth) {
        return alertaRedireccion()
    }
        return alertaRedireccion()

}
)