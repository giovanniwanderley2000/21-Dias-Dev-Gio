// Switch Case
//1.1 - Crie um algoritmo que peça 2 números ao usuário
/*let numero1 = Number(prompt('Digite o primeiro número'))
let numero2 = Number(prompt('Digite o segundo número'))
// 1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números
var opcaoOperacao = prompt('Escolha qual operação você quer fazer: 1- Somar, 2- Subtração, 3- Divisão, 4- Multiplicação')
switch (opcaoOperacao) {
    case "1":
        console.log(numero1 + numero2)
        break;
    case "2":
        console.log(numero1 - numero2)
        break;
    case "3":
        console.log(numero1 / numero2)
        break;
    case "4":
        console.log(numero1 * numero2)
        break;
    default:
        console.log('Opção inválida')
        break;
}*/

// 1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: 
// abastecer com gasolina, com álcool ou calibrar os pneus.
let opcoesDoPosto = prompt("Digite 1- para abastecer com gasolina, 2- para abastecer com álcool, 3- calibrar pneus")
switch (opcoesDoPosto) {
    case "1":
        let valorGasolina = Number(prompt("Qual valor você quer abastecer?"))
        console.log(valorGasolina / 5 + " litro(s) de gasolina foram abastecidos ")


        break;
    case "2":
        let valorAlcool = Number(prompt("Qual valor (em reais) você quer abastecer?"))
        console.log(valorAlcool / 3 + " litro(s) de alcool foram abastecidos ")
        break;
    case "3":
        console.log('Pneus calibrados com sucesso!')
        break;

    default:
        "Reposta Inválida"
        break;
}