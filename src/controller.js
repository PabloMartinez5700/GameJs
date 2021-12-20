class controller {

  constructor() {
    this.view = new views();
  }

  get() {
    let historial = [];
    let peticion = new XMLHttpRequest();
    peticion.open('GET', 'http://localhost:3000/operaciones');
    peticion.send();
    peticion.addEventListener('readystatechange', () => {
        if (peticion.readyState === 4) {
            if (peticion.status === 200) {
              historial = JSON.parse(peticion.responseText);
              for (let i = 0; i < historial.length; i++) {
                this.view.renderNewOperacion(historial[i])
              }
            } else console.log("Error " + peticion.status + ".");
        }
    });
  }

  obtenerFechaActual() {
    const listMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const listDias = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

    let fecha = new Date()

    let dia = fecha.getDate()

    let posDiaSeman = fecha.getDay()

    let diaSeman = listDias[posDiaSeman]

    let annio = fecha.getFullYear()

    let posMes = fecha.getMonth()

    let mes = listMeses[posMes]

    let pintarFecha = document.getElementById("fecha")

    pintarFecha.innerHTML = diaSeman + ', ' + dia + ' de ' + mes + ' de ' + annio
  }

  /*
  obtenerTemperatura() {
    let tem;
    let icon;

    this.get('https://api.openweathermap.org/data/2.5/weather?q=Martos&appid=1c7ee6ebc45f3bf8a1f39756aadf76ef').then(value => {
      tem = value['main']['temp'];

      icon = value['weather'][0]['icon'];

      this.view.rederTemperatura(icon, tem)
    })
  }
  */
}
