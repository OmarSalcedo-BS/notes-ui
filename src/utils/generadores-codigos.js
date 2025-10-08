export function generarToken() {
    let token = 0
    for (let index = 1; index <= 20; index++) {
        token += Math.random().toString(36).substring(2)
    }
    return token
}

export function generarId() {
    return Math.random().toString(36).substring(2)
}

/* Math.random() -> Genera un número aleatorio entre 0 y 1, con máximo 16 posiciones decimales */