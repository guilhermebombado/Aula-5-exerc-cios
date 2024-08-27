class Pessoa {
    constructor(nome, idade, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.salario = salario;
    }

    exibirTrabalho(nomeEmpresa, tempoTrabalho) {
        console.log(`Nome da empresa: ${nomeEmpresa}, Tempo de trabalho: ${tempoTrabalho} anos`);
    }
}


const pessoa = new Pessoa("Guilherme", 30, "Desenvolvedora", 60000);


pessoa.exibirTrabalho("Hellermann tyton", 5);