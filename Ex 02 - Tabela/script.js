let numeros = [];

const lista = document.getElementById("lista");
const btInserirNumero = document.getElementById("btInserirNumero");
const btInserirColuna = document.getElementById("btInserirColuna");
const btValorMinimo = document.getElementById("btValorMinimo");
const btValorMaximo = document.getElementById("btValorMaximo");

function exibirListaAletoria() {
  lista.innerHTML = "";
  for (let i = 1; i <= 20; i++) {
    numeros[i] = Math.trunc(Math.random()*100)+1;
    lista.innerHTML += `<li><pre>${numeros[i]}</pre></li>`;
  }
}

function inserirColuna() {
  lista.innerHTML = "";
  for (let i = 1; i <= 20; i++) {
    lista.innerHTML += `<li><pre>${numeros[i]}</pre></li>`;
    if(i%5 == 0){
      lista.innerHTML += "<br>";
    }
  }
}

function exibrValorMinimo(){
  let min = 101;
  for(i=0; i<20; i++){
    if(numeros[i] < min){
      min = numeros[i];
    }
  }
  lista.innerHTML = `O menor valor da lista é ${min}`;
}

function exbirValorMaximo(){
  let max = 0;
  for(i=0; i<20; i++){
    if(numeros[i] > max){
      max = numeros[i];
    }
  }
  lista.innerHTML = `O maior valor da lista é ${max}`;
}

btInserirNumero.onclick = exibirListaAletoria;
btInserirColuna.onclick = inserirColuna;
btValorMinimo.onclick = exibrValorMinimo;
btValorMaximo.onclick = exbirValorMaximo;