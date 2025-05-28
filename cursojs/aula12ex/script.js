var data = new Date
var hora = data.getHours()
var paragrafoHora = document.getElementById('horario')

paragrafoHora.innerHTML = `Agora são ${hora} horas.`
