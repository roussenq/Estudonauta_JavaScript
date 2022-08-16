function verificar() {
  var data = new Date();
  var anoAtual = data.getFullYear();
  var anoInformado = window.document.getElementById("txtano");
  var res = window.document.getElementById("res");

  if (anoInformado.value.lenght == 0 || anoInformado.value > anoAtual) {
    window.alert("Erro, dados incorretos");
  } else {
    var sexo = document.getElementsByName("radsex");
    var idade = anoAtual - Number(anoInformado.value);
    var genero = "";
    var imagem = document.createElement("img");
    imagem.setAttribute("id", "foto"); //é como se fosse no HTML e <img id='foto'>
    if (sexo[0].checked) {
      genero = "Homem";
      if (idade > 60) {
        //idoso imagem.setAttribute('src','/Aula12/imagens/idoso_homem.png')
        imagem.setAttribute("src", "/Aula12/ex015/imagens/teste.png");
      } else if (idade > 21) {
        //adulto
      } else if (idade > 12) {
        //jovem
      } else if (idade > 3) {
        //criança
      } else {
        //bebe
      }
    } else if (sexo[1].checked) {
      genero = "Mulher";
      if (idade > 60) {
        //idoso
      } else if (idade > 21) {
        //adulto
      } else if (idade > 12) {
        //jovem
      } else if (idade > 3) {
        //criança
      } else {
        //bebe
      }
    }
    res.style.textAlign = "center";
    res.style.color = "red";
    res.innerHTML = `Sexo: ${genero} e idade:  ${idade} anos`;
    res.appendChild(imagem);
  }
}
