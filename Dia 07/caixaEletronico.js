// Declarando as variáveis
let nome = 0;
let cpf = 0;
let valor = 0;
let saque = 0;
let deposito = 0;
let saldo = 0;
contador = 1

do {
    let nome = prompt("Digite seu nome")
    let cpf = Number(prompt('Digite seu CPF'))
    let opcaoSaqueOrDeposito = prompt('Saque ou Depósito S/D??')
    if (opcaoSaqueOrDeposito == "S") {
        let saque = Number(prompt('Digite um valor'))
        saldo = deposito - saque
    } else {
        let deposito = Number(prompt('Digite um valor'))
        saldo = saldo + deposito
    }
console.log(saldo)


} while (contador <= 2);