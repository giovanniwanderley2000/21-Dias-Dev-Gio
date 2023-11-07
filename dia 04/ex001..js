// 1.1 - Crie um sistema que pergunte ao seu usuário se ele está com fome, se tem dinheiro e se o restaurante está aberto.
let perguntaFome = prompt('Você está com fome?')
let perguntaDinheiro = prompt('Você tem dinheiro?')
let perguntaRestAberto = prompt('O Restaurante está aberto?')
// 1.2 - Se estiver sem fome ou sem dinheiro exiba no console: "Hoje a janta será em casa"
if (perguntaFome == "não" || perguntaDinheiro == "não") {
    console.log('Hoje a janta será em casa')
}
//1.3 - Se estiver com fome e tiver dinheiro mas o restaurante estiver fechado exiba no console: "Peça um delivery!"
else if (perguntaFome == "sim" && perguntaDinheiro && "sim" && perguntaRestAberto == "não") {
    console.log ("Peça um Delivery")
}
//1.4 - Se estiver com fome, tiver dinheiro e o restaurante estiver aberto exiba no console: 
// "Hoje o jantar será no seu restaurante preferido!"
else if (perguntaFome == "sim" && perguntaDinheiro && "sim" && perguntaRestAberto == "sim") {
    console.log ("Hoje o jantar será no seu restaurante preferido!")
}