let nome = prompt('insira o seu nome')
let idade = prompt('insira a sua idade')
let altura = prompt('insira a sua altura em metros')
let peso = prompt('insira o seu peso em kg')

let anoDeNascimento = 2023 - idade
let imc = peso / (altura * altura)

console.log('Olá, ' + nome + ', você tem ' + idade + " anos, " + 
"nasceu em " + anoDeNascimento + ", tem " + altura + ' de altura ' + 
"pesa " + peso + " kg " + " o seu IMC é de " + imc + " Kg/m²")

