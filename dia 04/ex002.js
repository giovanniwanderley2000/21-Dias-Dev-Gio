// 1.1 - Crie um sistema que peça para o seu usuário as seguintes informações:
// nome, idade, se possuí carta de motorista e se tem algum carro.
let nome = prompt("Digite seu nome")
let idade = Number(prompt("Digite sua idade"))
let possuiCarteira = prompt(" Possui carteira de motorista?")
let temCarro = prompt("Você tem carro?")
// 1.2 - Se o usuário não for maior de idade ou não tiver carta exiba no console: "Giovanni, você não pode dirigir".

if (idade < 18 || possuiCarteira == "não") {
    console.log(nome + ', você não pode dirigir.')
}
//1.3 - Se o usuário for maior de idade, tiver carta mas não tiver carro exiba no console: "Giovanni, você pode dirigir mas não tem um carro".
else if (idade > 18 && temCarro == "não" && possuiCarteira == "sim") {
    console.log(nome + ', você pode dirigir mas não tem carro')
}
//Se o usuário for maior de idade, tiver carta e carro exiba no console: "Giovanni, você será o motorista!"
else if (idade > 18 && temCarro == "sim" && possuiCarteira == "sim") {
    console.log(nome + ', você será o motorista')
} 
// teste git