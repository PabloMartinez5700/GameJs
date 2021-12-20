'use strick'

const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      error = document.getElementById("audioError"),  
      acierto = document.getElementById("audioAcierto");
var answer = 0;

function generarOperacion(){ 
  var num1 = Math.floor(Math.random() * 12),
      num2 = Math.floor(Math.random() * 12),
      dummyAnswer1 = Math.floor(Math.random() * 10),
      dummyAnswer2 = Math.floor(Math.random() * 10),
      allAnswers = [],
      Answers = [];

      document.getElementById("signo").innerHTML = '-'

  if(num1 > num2){
    answer = eval(num1 - num2);
    document.getElementById("num1").innerHTML = num1; 
    document.getElementById("num2").innerHTML = num2;
  }
  else{
    answer = eval(num2 - num1);
    document.getElementById("num1").innerHTML = num2; 
    document.getElementById("num2").innerHTML = num1;
  }
  
  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (i = allAnswers.length; i--;){
    Answers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = Answers[0];
  option2.innerHTML = Answers[1];
  option3.innerHTML = Answers[2]; 
};

function addOperacionHistorial() {
  event.preventDefault();
  let num1 = document.getElementById("num1").innerHTML;
  console.log(num1)
  let num2 = document.getElementById("num2").innerHTML;
  console.log(num2)
  let signo = document.getElementById("signo").innerHTML;
  console.log(signo)

  let solucion

  if(num1 > num2){
    solucion = eval(num1 - num2);
  }
  else{
    solucion = eval(num2 - num1);
  }
  
  let op = document.getElementById("option1").innerHTML;
  console.log(op)
  let option2 = document.getElementById("option2").innerHTML;
  console.log(option2)
  let option3 = document.getElementById("option3").innerHTML;
  console.log(option3)

  let json = {};

  if (option1 == solucion) {
      json = {
        "num1": num1,
        "num2": num2,
        "signo": signo,
        "resultado": option1
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
    if(option1.innerHTML == answer){
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
  if(option2.innerHTML == answer){
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
    if(option3.innerHTML == answer){
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