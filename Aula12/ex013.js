var relogio = new Date()
var hora = relogio.getHours()
var minutos = relogio.getMinutes()


console.log(`Agora são exatamente ${hora}:${minutos} horas!`)
if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora < 18) {
    console.log(`Bom tarde!`)
} else
    console.log(`Boa noite!`)