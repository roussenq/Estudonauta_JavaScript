function verificar() {
  var txtn = window.document.getElementById("nome");
  var nome = String(txtn.value);
  var res = window.document.getElementById("res");
  var foto = window.document.getElementById("imagem");
  //  res.innerHTML = `O nome digitado: ${nome.toUpperCase()}`
  if (nome.toUpperCase() === "ANGELO") {
    foto.src = "../img/angelo.png";
  } else if(nome.toUpperCase() === "KARINE") {
    foto.src = "../img/karine.png";
  } else {
    foto.src = "../img/anna.png";
  } 
}