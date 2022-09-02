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
      genero = "Masculino";
      if (idade > 60) {
        imagem.setAttribute("src", "/Aula12_exercicios/ex015/imagens/idoso_h_250.png");
      } else if (idade > 21) {
        imagem.setAttribute("src", "/Aula12_exercicios/ex015/imagens/adulto_h_250.png");
      } else if (idade > 12) {
        imagem.setAttribute("src", "/Aula12_exercicios/ex015/imagens/jovem_h_250.png");
      } else if (idade > 3) {
        imagem.setAttribute("src", "/Aula12_exercicios/ex015/imagens/crianca_h_250.png");
      } else {
        imagem.setAttribute("src", "/Aula12_exercicios/ex015/imagens/bebe_h_250.png");
      }
    } else if (sexo[1].checked) {
      genero = "Feminino";
      if (idade > 60) {
        imagem.setAttribute("src", "/Aula12_exercicios/ex015/imagens/idoso_f_250.png");
      } else if (idade > 21) {
        imagem.setAttribute("src", "/Aula12_exercicios/ex015/imagens/adulto_f_250.png");
      } else if (idade > 12) {
        imagem.setAttribute("src", "/Aula12_exercicios/ex015/imagens/jovem_f_250.png");
      } else if (idade > 3) {
        imagem.setAttribute("src", "/Aula12_exercicios/ex015/imagens/crianca_f_250.png");
      } else {
        imagem.setAttribute("src", "/Aula12_exercicios/ex015/imagens/bebe_f_250.png");
      }
    }
    res.style.textAlign = "center";
    res.style.color = "red";
    res.innerHTML = `Sexo: ${genero} e idade:  ${idade} anos`;
    res.appendChild(imagem);
  }
}
