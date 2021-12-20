'use strick'

const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      error = document.getElementById("audioError"),  
      acierto = document.getElementById("audioAcierto");
let solucion = 0;

function generarOperacion(){ 
  let num1 = Math.floor(Math.random() * 10),
      num2 = Math.floor(Math.random() * 10),
      respuest1 = Math.floor(Math.random() * 12),
      respuest2 = Math.floor(Math.random() * 12),
      allAnswers = [],
      listRespuestas = [];

    solucion = eval(num1 * num2);
  
  document.getElementById("num1").innerHTML = num1; 
  document.getElementById("num2").innerHTML = num2; 
  document.getElementById("signo").innerHTML = '*'

  allAnswers = [solucion, respuest1, respuest2];

  for (i = allAnswers.length; i--;){
    listRespuestas.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = listRespuestas[0];
  option2.innerHTML = listRespuestas[1];
  option3.innerHTML = listRespuestas[2]; 
};

function addOperacionHistorial() {
  event.preventDefault();
  let num1 = document.getElementById("num1").innerHTML;
  console.log(num1)
  let num2 = document.getElementById("num2").innerHTML;
  console.log(num2)
  let signo = document.getElementById("signo").innerHTML;
  console.log(signo)
  let ans = eval(num1 * num2);

  let op = document.getElementById("option1").innerHTML;
  console.log(op)
  let option2 = document.getElementById("option2").innerHTML;
  console.log(option2)
  let option3 = document.getElementById("option3").innerHTML;
  console.log(option3)

  let json = {};

  if (op == ans) {
      json = {
        "num1": num1,
        "num2": num2,
        "signo": signo,
        "resultado": op
      }
      console.log(json)
  }else { 
    if (option2 == solucion){
      json = {
        "num1": num1,
        "num2": num2,
        "signo": signo,
        "resultado": option2
     }
     console.log(json)
  }else {
    json = {
      "num1": num1,
      "num2": num2,
      "signo": signo,
      "resultado": option3
    }
    console.log(json)
  }
  return json
}
}

function post(){
  const peticion=new XMLHttpRequest();
  peticion.open('POST', 'http://localhost:3000/operaciones');
  peticion.setRequestHeader('Content-type', 'application/json');       
  peticion.send(JSON.stringify(this.addOperacionHistorial()));            
}

// Añadir mensaje
function renderMessage(message, icon) {
  swal({
      title: message,
      icon: icon,
      button: "Aceptar",
  });
}

option1.addEventListener("click", function(){
    if(option1.innerHTML == solucion){
      acierto.play();
      post();
      renderMessage('¡Enhorabuena has acertado!','success')
      generarOperacion();  
    }else{
      error.play();
      renderMessage('Has fallado, intentalo de nuevo.','error')
    }
});

option2.addEventListener("click", function(){
  if(option2.innerHTML == solucion){
    acierto.play();
    post();
    renderMessage('¡Enhorabuena has acertado!','success')
    generarOperacion();  
  }else{
    error.play();
    renderMessage('Has fallado, intentalo de nuevo.','error')
  }
});

option3.addEventListener("click", function(){
    if(option3.innerHTML == solucion){
      acierto.play();
      post();
      renderMessage('¡Enhorabuena has acertado!','success')
      generarOperacion();  
    }
    else{
      error.play();
      renderMessage('Has fallado, intentalo de nuevo.','error')
    }
});

generarOperacion()