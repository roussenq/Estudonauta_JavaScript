function contar() {
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')

    if (inicio.value.length == 0) {
        window.alert('[ERRO]Faltam dados! ')
    }


}

/**
    let fnumi = document.getElementById("numI");
  let fnumf = document.getElementById("numF");
  let fpasso = document.getElementById("numP");
  let fres = document.getElementById("res");

  let i = Number(fnumi.value);
  let f = Number(fnumf.value);
  let c = Number(fpasso.value);
  let x;
  fres.innerHTML = `<strong>${i}<\strong> / `;

  if (fnumi.value.lenght == 0) {
    window.alert("[ERRO] Faltam dados!");
  } else {
    for (i; i < f; c) {
      x = i + c;
      if (x <= f) {
        fres.innerHTML += `<strong>${x}<\strong>`;
      }
      i += c;
    }
  }

  fres.innerHTML = `Numero inicial: ${Number(fnumi.value)}
   
                     </br>n° final: ${Number(fnumf.value)}
   
                   </br>passo: ${Number(fpasso.value)}`;
}
 */