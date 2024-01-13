//Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. Depois, o usuário vai preenchendo elemento por elemento do vetor, ao final, exiba o array e o array ao contrário
// CRIANDO AS VARIÁVEIS
let array = []
let arrayInvertido = []
let quantidade = parseInt(prompt('Digite a quantidade de numeros que você deseja'))

// POPULANDO O ARRAY
for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt('Digite o ' + (i + 1) + '° número' ))
    array[i] = numero
}
console.log('Array original é:' + array)

// IINVERTENDO O ARRAY
let contador = quantidade
for(let i = 0; i < 5 ; i++ ) {
    arrayInvertido [i] = array[contador]
    contador--
}
console.log('O ARRAY invertido é: ' + arrayInvertido)