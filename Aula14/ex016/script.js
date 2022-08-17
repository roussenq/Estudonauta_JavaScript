function contar() {
    let inicio = window.document.getElementById('txtinicio')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpasso')
    let resposta = window.document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO], faltam dados!!!')
        resposta.innerHTML = "Preencha os campos!"
    } else {
        resposta.innerHTML = "Contando..."
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resposta.innerHTML += `${c} \u{1F449} `
            }
            resposta.innerHTML += `\u{1F3C1} `
        } else {
            for (let c = i; c >= f; c -= p) {
                resposta.innerHTML += `${c} \u{1F449} `
            }
            resposta.innerHTML += `\u{1F3C1} `

        }
    }
}