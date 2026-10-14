function cadastrarProdutos(nome,preco,estoque) {
  let produto = {
    nome:nome,
    preco:preco,
    estoque:estoque,
    valorEstoque: estoque*preco
  }
  return produto;
}

let estoque = [];

let produto1 = cadastrarProdutos("caixa30x30x20",300.00,3 )

let produto2 = cadastrarProdutos("caixa Box Ermetico 40x40x20", 1000.00,5)

let produto3 = cadastrarProdutos("Caixa embutir 100x70x25",2000,150)

estoque.push (produto1)
estoque.push (produto2)
estoque.push (produto3)
console.log (estoque)

function listaProdutos(estoque){

  for (let i = 0; i < estoque.length; i++) {
  console.log (`Produto: ${estoque[i].nome}|
      Preço: R$  ${estoque[i].preco} 
      Quantidade: ${estoque[i].estoque}`)
  
}
  
}

listaProdutos(estoque);

function calcularValorTotal(estoque) {
  let total = 0
  for (let i = 0; i < estoque.length; i++) {
   total = total + estoque[i].valorEstoque;
  }
  return total;
}

let valorTotal = calcularValorTotal(estoque)

console.log(`Valor total do estoque: R$ ${valorTotal}`)

function encontrarMaiorEstoque(estoque){
  let produtoMaior = estoque[0]
  for (let i = 1; i < estoque.length; i++) {
    if (estoque[i].estoque>produtoMaior.estoque) {
      produtoMaior = estoque[i]
    } 
 }
    return produtoMaior
}

let resultado = encontrarMaiorEstoque(estoque)
console.log(`O produto de maior quantidade em estoque é: ${resultado.nome}`)
console.log(`Quantidade: ${resultado.estoque}`)