class Livros {
    constructor(nome, quantidade, preco, autor, edicao) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.autor = autor;
        this.edicao = edicao;
    }

    emprestar() {
        if (this.quantidade > 0) {
            this.quantidade--;
            console.log(`O livro "${this.nome}" foi emprestado. Quantidade restante: ${this.quantidade}`);
        } else {
            console.log(`O livro "${this.nome}" não está disponível no momento.`);
        }
    }

    devolver() {
        this.quantidade++;
        console.log(`O livro "${this.nome}" foi devolvido. Quantidade disponível agora: ${this.quantidade}`);
    }
}

const livro1 = new Livros("Dom Casmurro", 3, 29.90, "Machado de Assis", 15);
const livro2 = new Livros("O Primo Basílio", 0, 39.90, "José de Alencar", 10);

console.log("Testando o livro 1:");
livro1.emprestar(); 
livro1.emprestar();  
livro1.emprestar();
livro1.emprestar();  
livro1.devolver(); 

console.log("\nTestando o livro 2:");
livro2.emprestar(); 
livro2.devolver(); 
livro2.emprestar(); 