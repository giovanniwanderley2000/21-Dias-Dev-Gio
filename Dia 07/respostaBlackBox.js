var nome, cpf, valor, saldo, maiorValor, somaValores, contador, opcao, parar;

do {
    nome = prompt("Digite seu nome:");
    cpf = prompt("Digite seu CPF:");
    saldo = 1000;
    maiorValor = 0;
    somaValores = 0;
    contador = 0;

    while (true) {
        valor = parseFloat(prompt("Digite um valor:"));

        if (valor >= 0) {
            opcao = parseInt(prompt("Escolha uma opção: 1- Saque | 2- Depósito:"));

            if (opcao === 1) {
                if (valor <= saldo) {
                    saldo -= valor;
                    maiorValor = Math.max(maiorValor, valor);
                    somaValores += valor;
                    contador++;
                    alert("Saque realizado com sucesso!");
                } else {
                    alert("Valor não disponível no saldo.");
                }
            } else if (opcao === 2) {
                saldo += valor;
                maiorValor = Math.max(maiorValor, valor);
                somaValores += valor;
                contador++;
                alert("Depósito realizado com sucesso!");
            } else {
                alert("Opção inválida. Tente novamente.");
            }
        } else {
            alert("Valor não pode ser negativo. Tente novamente.");
        }

        parar = parseInt(prompt("Deseja continuar? 1- Sim | 2- Não:"));

        if (parar === 2) {
            break;
        }
    }

    var mediaValores = somaValores / contador;

    alert("Saldo total: R$" + saldo);
    alert("Maior valor inserido: R$" + maiorValor);
    alert("Média dos valores inseridos: R$" + mediaValores.toFixed