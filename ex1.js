class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.motorLigado = false; 
    }

    ligarMotor() {
        this.motorLigado = true;
    }

    desligarMotor() {
        this.motorLigado = false;
    }

    statusMotor() {
        return this.motorLigado ? "O motor está ligado." : "O motor está desligado.";
    }

   
    mostrarDetalhes() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}


const carro = new Carro("Ford", "EcoSport", 2024);

console.log(carro.mostrarDetalhes());

console.log(carro.statusMotor());

carro.ligarMotor();
console.log(carro.statusMotor());

carro.desligarMotor();
console.log(carro.statusMotor());