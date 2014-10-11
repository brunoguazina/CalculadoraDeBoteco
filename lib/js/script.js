//
function obterValorDaConta() {
  var numeroDesformatado = document.getElementById('valorDaConta').value;
  var valorDaConta = numeroDesformatado.replace('R$ ', '').replace(',','.');
  var porcentagem = document.getElementById('porcentagem').value; 
  var resultadoPorcentagem = (valorDaConta * porcentagem) / 100;
  var valorTotalDaConta = parseFloat(resultadoPorcentagem) + parseFloat(valorDaConta);
  return valorTotalDaConta;
}

function quantidadeDePessoas() {
  var pessoas = document.getElementById('quantidadeDePessoas').value;
  return parseFloat(pessoas);
}

function calcular(conta, pessoas) {
  var resultado = obterValorDaConta(conta) / quantidadeDePessoas(pessoas);
  exibirResultado(resultado);
}

function exibirResultado(resultado) {
  document.getElementById('resultado').value = 'R$ ' + resultado.toFixed(2);
}