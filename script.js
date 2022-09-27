const frutas = ["laranja", "limão", "uva"];

const laranja = document.getElementById("fruta-1")
laranja.innerHTML += frutas[0]

const limao = document.getElementById("fruta-2")
limao.innerHTML += frutas[1]

const uva = document.getElementById("fruta-3")
uva.innerHTML += frutas[2]

const fruta4 = document.getElementById("fruta-4")

function lidarBotao() {
    fruta4.innerHTML = frutaB.value
    console.log(frutaB.value)
    frutaB.value= ""
}