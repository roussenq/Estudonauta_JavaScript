let n = document.querySelector("input#txtn");
let list = document.querySelector("select#lista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(x) {
  if (Number(x) >= 1 && Number(x) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(x, vetor) {
  if (vetor.indexOf(Number(x)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(n.value) && !inLista(n.value, valores)) {
    valores.push(Number(n.value));
    let item = document.createElement("option");
    item.text = `Valor ${n.value} adicionado`;
    list.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor inválido ou já adicionado na lista");
  }
  n.value = "";
  n.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione valores antes de finalizar!");
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let media = 0;
    let soma = 0;

    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }
    media = soma / total;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`;
    res.innerHTML += `<p>O menor valor: ${menor}</p>`;
    res.innerHTML += `<p>O maior valor: ${maior}</p>`;
    res.innerHTML += `<p>A soma dos valores: ${soma}</p>`;
    res.innerHTML += `<p>A média dos valores: ${media} </p>`;
  }
}
