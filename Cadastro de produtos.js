function cadastrarProduto(nome, preco, estoque) {

    // Validação do produto
    if (preco < 0 || estoque < 0) {
        return "Produto inválido";
    }

    // Criação do objeto
    let produto = {
        nome: nome,
        preco: preco,
        estoque: estoque,
        valorEstoque: preco * estoque
    };

    return produto;
}


// Cadastro dos produtos
let produto1 = cadastrarProduto("Teclado", 150, 10);
let produto2 = cadastrarProduto("Mouse", 80, 20);
let produto3 = cadastrarProduto("Monitor", 900, 5);


// Exibindo os produtos
console.log(produto1);
console.log(produto2);
console.log(produto3);


// Função para verificar qual produto possui
// o maior valor de estoque
function verificarMaiorEstoque(produto1, produto2, produto3) {

    if (
        produto1.valorEstoque > produto2.valorEstoque &&
        produto1.valorEstoque > produto3.valorEstoque
    ) {
        return "Produto 1 tem o maior valor de estoque";
    }

    else if (
        produto2.valorEstoque > produto1.valorEstoque &&
        produto2.valorEstoque > produto3.valorEstoque
    ) {
        return "Produto 2 tem o maior valor de estoque";
    }

    else {
        return "Produto 3 tem o maior valor de estoque";
    }
}


// Guardando o resultado da função em uma variável
let maiorEstoque = verificarMaiorEstoque(
    produto1,
    produto2,
    produto3
);


// Exibindo o resultado
console.log(maiorEstoque);


// Testando um produto inválido
let produto4 = cadastrarProduto("Notebook", -3000, 5);

console.log(produto4);


// Testando um produto válido
let produto5 = cadastrarProduto("Notebook", 3000, 5);

console.log(produto5);