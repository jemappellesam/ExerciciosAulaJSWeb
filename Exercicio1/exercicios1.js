
let nome = "Samuel";
let idade = 22;  

console.log("Nome: " + nome + " idade: " + idade + " anos.");

// Operações Aritméticas
let numero1 = 10;
let numero2 = 5;

console.log("Soma:", numero1 + numero2);
console.log("Subtração:", numero1 - numero2);
console.log("Multiplicação:", numero1 * numero2);
console.log("Divisão:", numero1 / numero2);

// Strings e Concatenação
let palavra1 = "Olá";
let palavra2 = "Mundo";

console.log( palavra1 + " " + palavra2);

// Acessando Caracteres
let umaString = "Exemplo";

console.log("Primeiro Caractere:", umaString.charAt(0));
console.log("Último Caractere:", umaString.charAt(umaString.length - 1));

// Operações Booleanas
let valor1 = 10;
let valor2 = 5;

console.log("Igual:", valor1 == valor2);
console.log("Diferente:", valor1 !== valor2);
console.log("Maior:", valor1 > valor2);
console.log("Menor:", valor1 < valor2);
console.log("Tipo e conteudo:", valor1 === valor2);

// Escopo de Variáveis
function exemploEscopo() {
  let dentroDaFuncao = "Variável dentro da função";
  console.log(dentroDaFuncao);
}

exemploEscopo();

// Não é possível acessar 'dentroDaFuncao' fora da função
 console.log(dentroDaFuncao);

var foraDaFuncao = "Variável fora da função";
console.log(foraDaFuncao);

// Uso do Console
console.log("Mensagem com console.log");
console.warn("Aviso com console.warn");
console.error("Erro com console.error");
console.info("Informação com console.info");

// Conversão de Tipos
let numeroString = "42";
let numeroInteiro = parseInt(numeroString, 10);
console.log("Inteiro:", numeroInteiro);

// Execução no Navegador e Node
if (typeof window !== 'undefined') {
  console.log("Executando no navegador");
} else {
  console.log("Executando no Node.js");
}

// Funções
function soma(a, b) {
  return a + b;
}
console.log("Resultado da Soma:", soma(8,4));

