class Maquina {
    constructor(nome, quantidadeEixos, rpm, consumoEnergia) {
        this.nome = nome;
        this.quantidadeEixos = quantidadeEixos;
        this.rpm = rpm;
        this.consumoEnergia = consumoEnergia;
        this.ligada = false; 
    }

    ligar() {
        if (!this.ligada) {
            this.ligada = true;
            console.log(`${this.nome} está ligada.`);
        } else {
            console.log(`${this.nome} já está ligada.`);
        }
    }

    desligar() {
        if (this.ligada) {
            this.ligada = false;
            console.log(`${this.nome} está desligada.`);
        } else {
            console.log(`${this.nome} já está desligada.`);
        }
    }

    ajustarVelocidade(novaRPM) {
        if (novaRPM > 0) {
            this.rpm = novaRPM;
            console.log(`A velocidade de rotação da ${this.nome} foi ajustada para ${this.rpm} RPM.`);
        } else {
            console.log("Ajuste inválido de velocidade. A RPM deve ser positiva.");
        }
    }
}

class Furadeira extends Maquina {
    constructor(nome, rpm, consumoEnergia) {
        super(nome, 0, rpm, consumoEnergia); 
    }
}

const furadeira = new Furadeira("Furadeira Elétrica", 1200, 500);

furadeira.ligar(); 
furadeira.ajustarVelocidade(1500); 
furadeira.desligar(); 
furadeira.ajustarVelocidade(-100); 