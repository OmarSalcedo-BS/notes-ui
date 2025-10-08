import { Usuarios } from "./src/config/database.js"
import { alertaRedireccion, alertaGeneral } from "./src/utils/alertas.js"
import { guardarLocalStorage } from "./src/config/local-storage.js"
import { generarToken } from "./src/utils/generadores-codigos.js"



let btnLogin = document.querySelector("#login")
btnLogin.addEventListener("click", () => {
    let correo = document.querySelector("#email").value
    let contrasena = document.querySelector("#password").value
    let usuarioAuth = Usuarios.find((usuario) => correo == usuario.correo && contrasena == usuario.contraseña)
    if (usuarioAuth) {
        let token = generarToken()
        console.log(token)
        guardarLocalStorage("token", token)
        guardarLocalStorage("usuario", usuarioAuth)
        return alertaRedireccion("Bienvenido al sistema", "success", "/src/pages/html/home.html")
    }
    return alertaGeneral("Error de credenciales", "Usuario y/o contraseña no coinciden, intentar nuevamente", "error")
})