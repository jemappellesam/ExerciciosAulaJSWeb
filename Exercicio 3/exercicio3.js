
function sortElements(...elementos){
    console.log(elementos.sort())
 }
 
 function findElement(elementos, elemento) {
    for (let i = 0; i < elementos.length; i++) {
       if (elementos[i] == elemento) {
          return elemento
       }
    }
    return -1;
 }
 
 console.log(findElement(["abacaxi", "maçã"], "maçã"));
 
 function unirArrays(array1, array2) {
    return array1.concat(array2);
 }
 
 const resultado = unirArrays([1, 2, 3], ['a', 'b', 'c']);
 console.log(resultado);
 
 function implementReverse(array){
    return array.reverse()
 }
 
 console.log(implementReverse([1,2,3]))
 
 function implementKey(objeto){
   return Object.keys(objeto)
 }
 
 console.log(implementKey({nome:"a", idade:18}))
 
 function filtrarNumerosPares(array) {
    const numerosPares = [];
 
    for (let i = 0; i < array.length; i++) {
       const elemento = array[i];
       if (typeof elemento === 'number' && elemento % 2 === 0) {
          numerosPares.push(elemento);
       }
    }
 
    return numerosPares;
 }
 
 const arrayOriginal = [1, 2, 3, 'quatro', 5, 6, 'sete', 8];
 console.log(filtrarNumerosPares(arrayOriginal));
 
 
 function juntarComDelimitador(array, delimitador) {
    return array.join(delimitador);
 }
 const arrayExemplo = ['maçã', 'banana', 'laranja'];
 const delimitador = '-';
 console.log(juntarComDelimitador(arrayExemplo, delimitador));

 function calcularMedias(notasArray) {
    let somaTotal = 0
    let maiorMedia = 0
    let menorMedia = 0
  
    for (let i = 0; i < notasArray.length; i++) {
      const aluno = notasArray[i]
      const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
  
      somaTotal += media
  
      if (media > maiorMedia) {
        maiorMedia = media
      }
  
      if (media < menorMedia) {
        menorMedia = media
      }
    }
  
    const mediaGeral = somaTotal / notasArray.length;
  
    return {
      mediaGeral,
      maiorMedia,
      menorMedia,
    }
  }
  
  const alunos = [
    { nome: "fulano", notas: [4, 5, 2, 8] },
    { nome: "ciclano", notas: [7, 6, 9, 8] },
  ]

  console.log(calcularMedias(alunos))

  function calcularConjuntos(elementos, tamanho) {
    const conjuntos = [];
  
    for (let i = 0; i < elementos.length; i += tamanho) {
      conjuntos.push(elementos.slice(i, i + tamanho));
    }
  
    return conjuntos;
  }
  
  function filtrarObjetosPorPropriedade(objetos, propriedade) {
    return objetos.filter(objeto => objeto.hasOwnProperty(propriedade));
  }