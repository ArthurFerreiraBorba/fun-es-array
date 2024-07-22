class produto {
    nome;
    preco; 
    quantidade;

    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade; 
    }

    vender(quantidadeVendida) {
        
        if (this.quantidade < quantidadeVendida) {
            console.log(`Estoque de ${this.nome} insuficiente`)
            return
        }

        this.quantidade -= quantidadeVendida;
        
        console.log("quantidade: " + this.quantidade) 
        return
    }

    repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta;

        console.log("quantidade: " + this.quantidade) 
    }

    mostrarEstoque() {
        console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`)
    }

    atualizarPreco(novoPreco) {
        this.preco = novoPreco;

        console.log("preço: " + this.preco) 
    }
}

let caneta = new produto("caneta", 100, 10);

caneta.vender(5);
caneta.repor(5);
caneta.mostrarEstoque();
caneta.atualizarPreco(50);