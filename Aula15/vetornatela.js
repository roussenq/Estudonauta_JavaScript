let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`O valor na posição ${pos} é ${valores[pos]}`)
}

valores.sort()

for (let pos in valores) {
    console.log(`O valor na posição ${pos} é ${valores[pos]}`)
}

console.log(valores.indexOf(9))