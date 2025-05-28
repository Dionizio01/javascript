function checar() {
    let c = 1
    let tab = document.getElementById('tabuada')
    let num = document.getElementById('num')
    tab.innerHTML = ' '
    while(c <= 10){
        let item = document.createElement('option')
        item.text = `${num.value} X ${c} = ${num.value*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
}