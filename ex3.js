class Automovel {
    constructor(cor, modelo, tipoDeCombustivel, quantidadeDeRodas) {
        this.cor = cor;
        this.modelo = modelo;
        this.tipoDeCombustivel = tipoDeCombustivel;
        this.quantidadeDeRodas = quantidadeDeRodas;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log(`${this.modelo} está ligado.`);
    }

    desligar() {
        this.ligado = false;
        console.log(`${this.modelo} está desligado.`);
    }
}

class Carro extends Automovel {
    constructor(cor, modelo, tipoDeCombustivel, quantidadeDeRodas, vidrosAbertos = false) {
        super(cor, modelo, tipoDeCombustivel, quantidadeDeRodas);
        this.vidrosAbertos = vidrosAbertos;
    }

    abrirVidro() {
        this.vidrosAbertos = true;
        console.log(`O vidro do ${this.modelo} está aberto.`);
    }

    descerVidro() {
        this.vidrosAbertos = false;
        console.log(`O vidro do ${this.modelo} está fechado.`);
    }
}

class Moto extends Automovel {
    constructor(cor, modelo, tipoDeCombustivel, quantidadeDeRodas) {
        super(cor, modelo, tipoDeCombustivel, quantidadeDeRodas);
    }
}

class Caminhao extends Automovel {
    constructor(cor, modelo, tipoDeCombustivel, quantidadeDeRodas) {
        super(cor, modelo, tipoDeCombustivel, quantidadeDeRodas);
    }
}

const carro = new Carro("Vermelho", "Fusca", "Gasolina", 4);
const moto = new Moto("Azul", "CBR", "Gasolina", 2);
const caminhao = new Caminhao("Amarelo", "Volvo", "Diesel", 6);

carro.ligar();
carro.abrirVidro();
carro.descerVidro(); 
carro.desligar(); 


moto.ligar();
moto.desligar(); 

caminhao.ligar(); 
caminhao.desligar(); 