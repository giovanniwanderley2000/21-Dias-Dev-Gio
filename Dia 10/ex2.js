// CRIANDO AS VARIÁVEIS
let array = []
let arrayInvertido = []

// POPULANDO O ARRAY
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt('Digite o ' + (i + 1) + '° número' ))
    array[i] = numero
}
console.log('Array original é:' + array)

// IINVERTENDO O ARRAY
let contador = 4 
for(let i = 0; i < 5 ; i++ ) {
    arrayInvertido [i] = array[contador]
    contador--
}
console.log('O ARRAY invertido é: ' + arrayInvertido)