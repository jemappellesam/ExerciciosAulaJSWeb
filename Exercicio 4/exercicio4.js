const numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => console.log(numero));

function imprimirMaiusculas(strings) {
    strings.forEach(string => console.log(string.toUpperCase()));
}

const palavras = ["taylor", "swift", "reputation"];
imprimirMaiusculas(palavras);

const objetos = [{nome: "Travis", idade: 25}, {nome: "Kelce", idade: 30}, {nome: "Kai", idade: 20}];
const propriedade = 'nome'; 
objetos.forEach(objeto => console.log(objeto[propriedade]));


function calcularSomaElementos(numeros) {
    let soma = 0;
    numeros.forEach(numero => soma += numero);
    console.log("Soma dos elementos:", soma);
}

const numerosParaSomar = [28, 13, 30, 15, 5];
calcularSomaElementos(numeros);


function calcularSomaLinhas(matriz) {
    matriz.forEach(linha => {
        let soma = 0;
        linha.forEach(elemento => soma += elemento);
        console.log("Soma da linha:", soma);
    });
}

const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
calcularSomaLinhas(matriz);


function encontrarMaiorNumeroSubarray(matriz) {
    matriz.forEach(subarray => {
        let maior = subarray[0];
        subarray.forEach(numero => {
            if (numero > maior) maior = numero;
        });
        console.log("Maior número:", maior);
    });
}

const Novamatriz = [[30, 40, 50], [70, 80, 900], [100, 1000, 10000]];
encontrarMaiorNumeroSubarray(matriz);

const numerosMap = [1, 2, 3, 4, 5];
const resultado = numeros.map(numero => numero * 2);
console.log(resultado);


function converterParaMaiusculas(palavras) {
    return palavras.map(palavra => palavra.toUpperCase());
}

const palavrasMap = ["txt", "dojoon", "woosung"];
const resultadoMap = converterParaMaiusculas(palavras);
console.log(resultado);

const objetosMap = [{nome: "Taylor", idade: 33}, {nome: "Taehyung", idade: 30}, {nome: "Hajoon", idade: 20}];
const propriedadeMap = 'idade'; 
const valores = objetos.map(objeto => objeto[propriedade]);
console.log(valores);


const palavrasCP = ["lover", "folklore", "evermore"];
const comprimentos = palavras.map(palavra => palavra.length);
console.log(comprimentos);

function calcularSomaLinhas(matriz) {
    return matriz.map(linha => linha.reduce((soma, elemento) => soma + elemento, 0));
}

const matrizMap = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(calcularSomaLinhas(matriz));

function calcularRaizQuadradaInteira(numeros) {
    return numeros.map(numero => Math.round(Math.sqrt(numero)));
}

const numerosRaiz = [1, 2, 3, 4, 5];
console.log(calcularRaizQuadradaInteira(numeros));

