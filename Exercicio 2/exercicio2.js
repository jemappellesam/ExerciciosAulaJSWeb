// Função Saudação
let saudacao = function(nome) {
    return `Olá, ${nome}! Bem vindo`;
  };
  
  // Função Soma e Quadrado
  let somaQuadrado = function(num1, num2) {
    let soma = num1 + num2;
    let quadradoSoma = soma ** 2;
    return soma, quadradoSoma;
  };
  
  // Função Concatenação
  let concatenaPalavras = function(str1, str2) {
    return str1 + str2;
  };
  
  // Acesso a Caracteres
  let primeiroUltimoCaractere = function(str) {
    return str.charAt(0) + str.charAt(str.length - 1);
  };
  
  // Função Comparação
  let comparacaoNumeros = function(num1, num2) {
    if(num1>num2){
        return num1 + "é maior"
    }
    else if(num1==num2){
        return "números iguais"
    }
    else{
        return num2 + "é maior"
    }

  };
  
  // Escopo de Variáveis
  let variavelForaDaFuncao;
  
  let funcaoComEscopo = function() {
    let variavelDentroDaFuncao = "Variável dentro da função";
    variavelForaDaFuncao = "Variável alterada dentro da função";
  };
  
  funcaoComEscopo();
  console.log(variavelForaDaFuncao); // Funciona
  console.log(variavelDentroDaFuncao); //Lança um erro
  
  // Função Média
  let calcularMedia = function(numeros) {
    let soma = 0;
    for (let num of numeros) {
      soma += num;
    }
    return soma / numeros.length;
  };
  
  // Função Fatorial
  let fatorial = function(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * fatorial(num - 1);
    }
  };
  
  // Callback Simples
  let executaCallback = function(callback) {
    callback();
  };
  
  // Função de aguardar
  let aguardarSegundos = function(segundos, functionToBeExecuted) {
    setTimeout(functionToBeExecuted,segundos,)
  };
  
  // Validação de Números
  let ehNumero = function(param) {
    return typeof param === 'number' && !isNaN(param);
  };
  