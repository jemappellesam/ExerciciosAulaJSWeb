function apenasPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

const numeros = [1, 2, 3, 4, 5, 6];
console.log(apenasPares(numeros)); 

function stringsComMaisDeTresCaracteres(array) {
    return array.filter(string => string.length > 3);
}

const palavras = ["casa", "carro", "lua", "sol", "bicicleta"];
console.log(stringsComMaisDeTresCaracteres(palavras));

function objetosComPropriedadeDefinida(array, propriedade) {
    return array.filter(objeto => objeto.hasOwnProperty(propriedade));
}

const pessoas = [{ nome: "João", idade: 25 }, { nome: "Maria" }];
console.log(objetosComPropriedadeDefinida(pessoas, "idade"));

function multiplosDeTres(array) {
    return array.filter(numero => numero % 3 === 0);
}

const numerosMultiplos3  = [3, 6, 8, 9, 12, 15];
console.log(multiplosDeTres(numeros));

function linhasComSomaMaiorQueDez(matriz) {
    return matriz.filter(linha => linha.reduce((acc, val) => acc + val, 0) > 10);
}

const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(linhasComSomaMaiorQueDez(matriz));

function stringsComLetraMaiuscula(array) {
    return array.filter(string => /^[A-Z]/.test(string));
}

const palavrasToUpperCase = ["Maçã", "banana", "Laranja", "uva"];
console.log(stringsComLetraMaiuscula(palavras));

function somaDosElementos(array) {
    return array.reduce((acc, numero) => acc + numero, 0);
}

const numerosSomaElementos = [1, 2, 3, 4, 5];
console.log(somaDosElementos(numeros));

function concatenarStrings(array) {
    return array.reduce((acc, string) => acc + string, '');
}

const palavrasConcar = ["Taylor", " ", "Swift", "!"];
console.log(concatenarStrings(palavras));

function somaDaPropriedade(array, propriedade) {
    return array.reduce((acc, objeto) => acc + objeto[propriedade], 0);
}

const produtos = [{ nome: "Maçã", preco: 2 }, { nome: "Banana", preco: 3 }, { nome: "Laranja", preco: 4 }];
console.log(somaDaPropriedade(produtos, "preco"));

function produtoDosElementos(array) {
    return array.reduce((acc, numero) => acc * numero, 1);
}

const numerosProdutosElementos= [2, 3, 4];
console.log(produtoDosElementos(numeros));

function somaDaMatriz(matriz) {
    return matriz.reduce((accLinha, linha) => accLinha + linha.reduce((accElem, elem) => accElem + elem, 0), 0);
}

const matrizSoma = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(somaDaMatriz(matriz));

const matrizFind = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(somaDaMatriz(matriz));
