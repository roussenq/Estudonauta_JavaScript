function tabuada(){
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    
    if (num.value.length == 0) {
        window.alert('[ERRO],Por favor informe um n° válido')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=''

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}