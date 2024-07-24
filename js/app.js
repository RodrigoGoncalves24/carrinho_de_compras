let carrinho_produto = document.getElementById("lista-produtos");
let carrinho_total = document.getElementById("valor-total");
let total = 0;
carrinho_total.innerHTML = "";
carrinho_produto.innerHTML = "";

function adicionar() {
  let quantidade = document.getElementById("quantidade").value;
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let preco = quantidade * valorUnitario;

  if (quantidade == 0) {
    alert("Erro na quantidade de itens no carrinho!");
    return;
  }

  carrinho_produto.innerHTML =
    carrinho_produto.innerHTML +
    `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${valorUnitario}</span></section>`;
  total += preco;
  carrinho_total.textContent = `R$ ${total}`;
  document.getElementById("quantidade").value = 0;
}

function limpar() {
  total = 0;
  carrinho_produto.innerHTML = "";
  carrinho_total.innerHTML = "R$";
}
