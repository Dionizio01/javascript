let lista = []
let res = document.getElementById('res')
let painel = document.getElementById('ilista')
let n = document.getElementById('inumero')

function isNumber(num) {
    if(num >= 1 && num <=100){
        return true
    } else {
        return false
    }
    
}

function isLista(num, l){
    if (l.indexOf(num) != -1) { /*o -1 indica que o valor não foi encontrado na lista*/ 
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumber(n.value) && !isLista(n.value, lista)) {
        let item = document.createElement('option')
        lista.push(n.value)
        item.text = `Adicionando ${n.value} a lista`
        painel.appendChild(item)   
    }else {
        alert('valor não correspondente ou já digitado')
    }
    
}

