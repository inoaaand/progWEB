document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  let valorAtual = '';

  function atualizarDisplay() {
    display.value = valorAtual === '' ? '0' : valorAtual;
  }
  
  function adicionarValor(valor) {
    valorAtual += valor;
    atualizarDisplay();
  }

  function limpar() {
    valorAtual = '';
    atualizarDisplay();
  }

  function calcular() {
    try {
      let resultado = eval(valorAtual);
      valorAtual = resultado.toString();
      atualizarDisplay();
    } catch (erro) {
      display.value = 'Erro';
      valorAtual = '';
    }
  }

  document.getElementById('btn0').addEventListener('click', () => adicionarValor('0'));
  document.getElementById('btn1').addEventListener('click', () => adicionarValor('1'));
  document.getElementById('btn2').addEventListener('click', () => adicionarValor('2'));
  document.getElementById('btn3').addEventListener('click', () => adicionarValor('3'));
  document.getElementById('btn4').addEventListener('click', () => adicionarValor('4'));
  document.getElementById('btn5').addEventListener('click', () => adicionarValor('5'));
  document.getElementById('btn6').addEventListener('click', () => adicionarValor('6'));
  document.getElementById('btn7').addEventListener('click', () => adicionarValor('7'));
  document.getElementById('btn8').addEventListener('click', () => adicionarValor('8'));
  document.getElementById('btn9').addEventListener('click', () => adicionarValor('9'));
  document.getElementById('btnPonto').addEventListener('click', () => adicionarValor('.'));

  document.getElementById('btnSoma').addEventListener('click', () => adicionarValor('+'));
  document.getElementById('btnSub').addEventListener('click', () => adicionarValor('-'));
  document.getElementById('btnMultiplicar').addEventListener('click', () => adicionarValor('*'));
  document.getElementById('btnDivisao').addEventListener('click', () => adicionarValor('/'));

  document.getElementById('btnParEsq').addEventListener('click', () => adicionarValor('('));
  document.getElementById('btnParDir').addEventListener('click', () => adicionarValor(')'));

  document.getElementById('btnC').addEventListener('click', limpar);
  document.getElementById('btnIgual').addEventListener('click', calcular);

  atualizarDisplay();
});
