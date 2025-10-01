export function alertaRedireccion(mensaje, icono, ruta) {
    let timerInterval;
    Swal.fire({
        title: mensaje,
        html: "Será redireccionado en <b></b> milisegundos.",
        timer: 2000,
        timerProgressBar: true,
        icon: icono,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
            window.location.href = ruta
        }
    })
}

export function alertaGeneral(titulo, mensaje, icono) {
    Swal.fire({
        title: titulo,
        text: mensaje,
        icon: icono
    });
}