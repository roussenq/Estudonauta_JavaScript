function soma(n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0) {
    return n1 + n2 + n3 + n4 + n5
}

console.log(soma(5, 6, 8))

//quando a função pede 5 parametros, porem a chamada envia somente 3, basta definir o valor padrão-default