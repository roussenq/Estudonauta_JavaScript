function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var corFundo = document.body.style
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minuto} horas`

    if (hora >= 6 && hora <= 12) {
        img.src = "imagens/manhã-250.png"
        corFundo.background = '#e2cd9f'
    } else if (hora > 12 && hora <= 18) {
        img.src = "imagens/tarde-250.png"
        document.body.style.background = '#b9846f'
    } else {
        img.src = "imagens/noite-250.png"
        document.body.style.background = '#515154'
    }
}

