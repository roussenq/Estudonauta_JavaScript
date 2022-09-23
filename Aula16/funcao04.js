// 5!=  5*4*3*2*1 = 120


function fatorial(x) {
    let resposta = x
    while (x > 1){
        resposta *= (x-1)
        x--
    }
    return resposta
}

console.log(fatorial(5))