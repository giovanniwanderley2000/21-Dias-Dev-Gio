// 1 - Crie um algoritmo que receba um número inteiro positivo e um array. Popule o array e no final exiba os índices em que número inserido aparece nesse array. Para testes do exercício use até 10 elementos no array.

const array = [];
const indices = [];
let contadorIndice = 0;

const numeroProcurado = parseInt(prompt('Digite o número a ser procurado'));
for (let i = 0; i < 10; i++) { //supomos que array tem até 10 elementos
    const elemento = parseInt(prompt(`Digite um elemento ${i + 1}:`));
    array[i] = elemento;
}

if (array.length > 0) { // Verificando se o array está vazio antes de acessar seus elementos
    for (let i = 0; i < array.length; i++) { // Supomos que o array tem até 10 elementos
        if (array[i] === numeroProcurado) {
            indices[contadorIndice] = i;
            contadorIndice++;
        }
    }
}

console.log(`O número ${numeroProcurado} foi encontrado nos indices: ${indices}`);