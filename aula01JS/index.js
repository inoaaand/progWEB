// function mostrarOla() {
//     let nome = document.getElementById("nome").value;
//     document.getElementById("resposta").innerHTML = "Olá " + nome;
// }

// const mostrarOla = () => {
//     let nome = document.getElementById("nome").value;
//      document.getElementById("resposta").innerHTML = "Olá " + nome;
// }

// const mostrar = document.getElementById("mostrar");
// mostrar.addEventListener("click", mostrarOla)



let display = document.getElementById('display');
function adicionarNumero(numero) {
  display.value += numero;
}

function adicionarOperador(operador) {
  display.value += operador;
}

function limparVisor() {
  display.value = '';
}

function calcularResultado() {
    display.value = eval(display.value);  
}

document.getElementById('btn7').addEventListener('click', () => adicionarNumero('7'));
document.getElementById('btn8').addEventListener('click', () => adicionarNumero('8'));
document.getElementById('btn9').addEventListener('click', () => adicionarNumero('9'));
document.getElementById('btn4').addEventListener('click', () => adicionarNumero('4'));
document.getElementById('btn5').addEventListener('click', () => adicionarNumero('5'));
document.getElementById('btn6').addEventListener('click', () => adicionarNumero('6'));
document.getElementById('btn1').addEventListener('click', () => adicionarNumero('1'));
document.getElementById('btn2').addEventListener('click', () => adicionarNumero('2'));
document.getElementById('btn3').addEventListener('click', () => adicionarNumero('3'));
document.getElementById('btn0').addEventListener('click', () => adicionarNumero('0'));
document.getElementById('bntDivisao').addEventListener('click', () => adicionarOperador('/'));
document.getElementById('btnSoma').addEventListener('click', () => adicionarOperador('+'));
document.getElementById('btnSub').addEventListener('click', () => adicionarOperador('-'));
document.getElementById('btnMultiplicar').addEventListener('click', () => adicionarOperador('*'));
document.getElementById('btnC').addEventListener('click', limparVisor);
document.getElementById('btnIgual').addEventListener('click', calcularResultado);
