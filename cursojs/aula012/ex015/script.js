function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert(`[ERRO] Verifique os daddos e tente novamente.`)
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('width', '300px')
        if (fSex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagens/cm.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jm.png')
                //jovem
            } else if (idade < 65) {
                //adulto
            } else {
                //idoso
            }
        } else if (fSex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/cf.png')
                //criança
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jf.png')
            } else if (idade < 65) {
                //adulto
            } else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gênero} de ${idade} anos <br>`
        res.appendChild(img)
    }
}
