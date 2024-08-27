const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Cliente {
    constructor(nome, profissao, saldo) {
        this.nome = nome;
        this.profissao = profissao;
        this.saldo = saldo;
    }

    pix(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito via PIX realizado com sucesso. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
        } else {
            console.log("Valor inválido para PIX.");
        }
    }

    emprestimo(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Empréstimo aprovado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
        } else {
            console.log("Valor inválido para empréstimo.");
        }
    }

    saque(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque realizado com sucesso. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente para saque.");
        } else {
            console.log("Valor inválido para saque.");
        }
    }

    extrato() {
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
}

function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}

async function iniciarPrograma() {
    const nome = await perguntar("Digite o nome do cliente: ");
    const profissao = await perguntar("Digite a profissão do cliente: ");
    let saldo = parseFloat(await perguntar("Digite o saldo inicial do cliente: "));
    saldo = isNaN(saldo) ? 0 : saldo;

    const cliente = new Cliente(nome, profissao, saldo);

    while (true) {
        const opcao = await perguntar("Escolha uma opção:\n1. Pix\n2. Empréstimo\n3. Saque\n4. Extrato\n5. Sair\n");

        switch (opcao) {
            case "1":
                const valorPix = parseFloat(await perguntar("Digite o valor do PIX: "));
                cliente.pix(valorPix);
                break;
            case "2":
                const valorEmprestimo = parseFloat(await perguntar("Digite o valor do empréstimo: "));
                cliente.emprestimo(valorEmprestimo);
                break;
            case "3":
                const valorSaque = parseFloat(await perguntar("Digite o valor do saque: "));
                cliente.saque(valorSaque);
                break;
            case "4":
                cliente.extrato();
                break;
            case "5":
                console.log("Saindo do programa.");
                rl.close();
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

iniciarPrograma();