function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var foto = document.getElementById('foto')
    var data = new Date
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        foto.innerHTML = `Bom Dia!`
        img.src = 'imagens/peqmanha.jpg'
        document.body.style.background = '#749582'
    } else {
        if (hora > 12 && hora <= 18) {
            foto.innerHTML = `Boa Tarde!`
            img.src = 'imagens/peqtarde.jpg'
            document.body.style.background = '#BCB173'
        } else {
            foto.innerHTML = `Boa Noite!`
            img.src ='imagens/peqnoite.jpg'
            document.body.style.background = '#04142B'
        }
    }
}