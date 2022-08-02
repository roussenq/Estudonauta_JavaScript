var idade = 25

if (idade >= 16 && idade < 18 || idade > 65) {
    voto = 'voto é opcional!'
} else if (idade >= 18 && idade <= 65) {
    voto = 'voto é obrigatório!'
} else {
    voto = 'não vota!'
}
console.log(`Voce tem ${idade} anos e ${voto}`)