var horas = 00
var minutos = 00 
var segundos = 00 

var second = document.getElementById('segundo')
var hour = document.getElementById('hora')
var button = document.getElementById('iniciar')

var interval

function start(){
    interval = setInterval(contador,1000)
    button.style.visibility='hidden'

}
function pause(){
    clearInterval(interval)
    button.style.visibility=''
}

function stoping(){
    location.reload()
}

function contador() {
    segundos++
    if (segundos == 60) {
        minutos++
        segundos = 0
        if (minutos < 10) {minutos = '0'+minutos}
        document.getElementById('minuto').innerHTML=`${minutos}:`
        if (minutos == 60) {
            horas++
            minutos = 0
            segundos = 0
            if (horas < 10) {horas = '0'+horas}
            document.getElementById('hora').innerHTML=`${horas}:`

        } 
    }
    
    if (segundos < 10){
        segundos = '0'+segundos
    }
    var seg = second.innerHTML = segundos
}