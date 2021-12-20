'use strick'
let gestion = new controller()

window.addEventListener('load', () =>{
    gestion.obtenerFechaActual();
    gestion.get()
})