function contagem() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0){
        alert(`[ERRO] Faltam dados.`)
    } else {
        if(inicio<fim){
            for (var c = Number(inicio.value) ; c <= Number(fim.value) ; c+= Number(passo.value)) {
                res.style.textAlign = 'center'
                res.innerHTML += `${c} -\u{1F603} ` 
                  
            } 
        } else {
            for(var c = Number(inicio.value); c>= Number(fim.value) ; c-= Number(passo.value))
                res.innerHTML += `${c} `
        }
        
    }


    
}