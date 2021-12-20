'use strick'

class views {

  renderNewOperacion(operacion) {
    var table = document.getElementById("tabla");

    var row = table.insertRow(rowCount);

    var rowCount = table.rows.length

    var cell1 = row.insertCell(0);

    var element1 = document.createTextNode(operacion.num1);

    cell1.appendChild(element1);

    var cell1 = row.insertCell(1);

    var element1 = document.createTextNode(operacion.signo);

    cell1.appendChild(element1);

    var cell1 = row.insertCell(2);

    var element1 = document.createTextNode(operacion.num2);

    cell1.appendChild(element1);

    var cell1 = row.insertCell(3);

    var element1 = document.createTextNode('=');

    cell1.appendChild(element1);

    var cell1 = row.insertCell(4);

    var element1 = document.createTextNode(operacion.resultado);

    cell1.appendChild(element1);
}

}