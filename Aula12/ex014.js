var diaAtual = new Date()
var diaSemana = diaAtual.getDay()

switch (diaSemana) {
    case 0: console.log(`Domingo`)
        break;
    case 1: console.log(`Segunda-feira`)
        break;
    case 2: console.log(`Terca-feira`)
        break;
    case 3: console.log(`Quarta-feira`)
        break;
    case 4: console.log(`Quinta-feira`)
        break;
    case 5: console.log(`Sexta-feira`)
        break;
    case 6: console.log(`Sabado`)
        break;
    default: console.log(`Dia invalido`)
        break;
}
console.log(`Dia da semana ${diaSemana}`)
