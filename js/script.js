function calcular(item, acao) {
  const valor = document.querySelector("#valor_" + item);
  let qtd = document.querySelector("#qtd_" + item);
  let total = document.querySelector("#total_" + item);
  let subTotal = document.querySelector("#subTotal");

  if (qtd === 0 && acao === "-") {
  } else {
    acao == "+" ? qtd.innerHTML++ : qtd.innerHTML--;
    total.innerHTML = qtd.innerHTML * valor.innerHTML;
    somaTotal();
  }
}

function somaTotal() {
  let sum = 0;
  sum = sum + Number(document.querySelector("#total_1").innerHTML);
  sum = sum + Number(document.querySelector("#total_2").innerHTML);
  sum = sum + Number(document.querySelector("#total_3").innerHTML);

  document.querySelector("#subTotal").innerHTML = sum;
}
