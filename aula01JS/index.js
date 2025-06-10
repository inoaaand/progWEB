document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');

  let valorAtual = ''; 

  function atualizarDisplay(num) {
      display.num = num;
  }

  function numDisplay(num) {
    valorAtual += num;
      updateDisplay(valorAtual);
  }

  function calcular() {
      try {
          valorAtual = eval(valorAtual).toString();
          atualizarDisplay(valorAtual);
      } catch (e) {
        atualizarDisplay('Erro');
        valorAtual = '';
      }
  }
 
  function limparDisplay() {
    valorAtual = '';
    atualizarDisplay(valorAtual);
  }

  document.getElementById('btn1').addEventListener('click', () => appendNumber('1'));
  document.getElementById('btn2').addEventListener('click', () => appendNumber('2'));
  document.getElementById('btn3').addEventListener('click', () => appendNumber('3'));
  document.getElementById('btn4').addEventListener('click', () => appendNumber('4'));
  document.getElementById('btn5').addEventListener('click', () => appendNumber('5'));
  document.getElementById('btn6').addEventListener('click', () => appendNumber('6'));
  document.getElementById('btn7').addEventListener('click', () => appendNumber('7'));
  document.getElementById('btn8').addEventListener('click', () => appendNumber('8'));
  document.getElementById('btn9').addEventListener('click', () => appendNumber('9'));
  document.getElementById('btn0').addEventListener('click', () => appendNumber('0'));
  document.getElementById('btnSoma').addEventListener('click', () => appendNumber('+'));
  document.getElementById('btnSub').addEventListener('click', () => appendNumber('-'));
  document.getElementById('btnDivisao').addEventListener('click', () => appendNumber('/'));
  document.getElementById('btnMultiplicar').addEventListener('click', () => appendNumber('*'));
  document.getElementById('btnIgual').addEventListener('click', calculate);
  document.getElementById('btnC').addEventListener('click', clearDisplay);
});
