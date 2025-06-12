document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  let valorAtual = '';

  function atualizarDisplay() {
    if (valorAtual === '') {
      display.value = '0';
    } else {
      display.value = valorAtual;
    }
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

  document.getElementById('btn0').addEventListener('click', function() { adicionarValor('0'); });
  document.getElementById('btn1').addEventListener('click', function() { adicionarValor('1'); });
  document.getElementById('btn2').addEventListener('click', function() { adicionarValor('2'); });
  document.getElementById('btn3').addEventListener('click', function() { adicionarValor('3'); });
  document.getElementById('btn4').addEventListener('click', function() { adicionarValor('4'); });
  document.getElementById('btn5').addEventListener('click', function() { adicionarValor('5'); });
  document.getElementById('btn6').addEventListener('click', function() { adicionarValor('6'); });
  document.getElementById('btn7').addEventListener('click', function() { adicionarValor('7'); });
  document.getElementById('btn8').addEventListener('click', function() { adicionarValor('8'); });
  document.getElementById('btn9').addEventListener('click', function() { adicionarValor('9'); });
  document.getElementById('btnPonto').addEventListener('click', function() { adicionarValor('.'); });

  document.getElementById('btnSoma').addEventListener('click', function() { adicionarValor('+'); });
  document.getElementById('btnSub').addEventListener('click', function() { adicionarValor('-'); });
  document.getElementById('btnMultiplicar').addEventListener('click', function() { adicionarValor('*'); });
  document.getElementById('btnDivisao').addEventListener('click', function() { adicionarValor('/'); });

  document.getElementById('btnC').addEventListener('click', limpar);
  document.getElementById('btnIgual').addEventListener('click', calcular);

  atualizarDisplay();
});
