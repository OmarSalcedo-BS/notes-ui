 export function guardarLocalStorage(llave, valor){
    localStorage.setItem(llave, JSON.stringify(valor))
 }

 export function consultarLocalStorage(llave){
   return JSON.parse(localStorage.getItem(llave))
 }

 export function limpiarLocalStorage(llave){
      localStorage.removeItem(llave)
 }



 /* 
    localStorage.setItem() - JSON.stringify(): El local storage almacena datos de tipos string, es decir, una cade de texto
    localStorage.getItem() - JSON.parse(): Para consultar o extraer contenido del local storage, se debe hacer la conversión de datos
    localStorage.removeItem() 
 */