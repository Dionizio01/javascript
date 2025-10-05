var idade = 21
if (idade < 16) {
    console.log(`Não vota.`)
} else {
    if (idade >= 65 || idade < 18){
        console.log(`Você não é obigado a votar.`)
    } else{
        console.log(`Voto obrigatório.`)
    }
}