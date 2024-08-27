class Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.tipoComunicacao = tipoComunicacao;
        this.consumoEnergia = consumoEnergia;
        this.ligado = false;
        this.temperatura = null;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.nome} está ligada.`);
        } else {
            console.log(`${this.nome} já está ligada.`);
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`${this.nome} está desligada.`);
        } else {
            console.log(`${this.nome} já está desligada.`);
        }
    }

    ajustarTemperatura(setpoint) {
        if (this.ligado && setpoint !== undefined) {
            this.temperatura = setpoint;
            console.log(`A temperatura da ${this.nome} foi ajustada para ${this.temperatura}°C.`);
        } else if (!this.ligado) {
            console.log(`${this.nome} deve estar ligada para ajustar a temperatura.`);
        } else {
            console.log("Ajuste de temperatura inválido.");
        }
    }
}

class Fritadeira extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
}

class Televisao extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
}

class ArCondicionado extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
}


const fritadeira = new Fritadeira("Fritadeira Elétrica", 10, 300, "Bluetooth", 1500);
const televisao = new Televisao("Televisão LED", 20, 1200, "Wi-Fi", 200);
const arCondicionado = new ArCondicionado("Ar Condicionado Split", 5, 3000, "Wi-Fi", 2500);

fritadeira.ligar();
fritadeira.ajustarTemperatura(180);
televisao.ligar();
televisao.ajustarTemperatura(22); 
arCondicionado.ligar();
arCondicionado.ajustarTemperatura(22);
arCondicionado.desligar();