var hora = 0
var minuto = 0
var segundo = 0

var btniniciar = document.getElementById('iniciar')
var interval

function iniciar(){
    interval = setInterval(começar,1000)
    btniniciar.style.visibility = 'hidden'
}

function começar(){
    segundo++
    if(segundo<10){segundo='0'+segundo}
    document.getElementById('segundos').innerHTML = segundo
    if(segundo == 60){
        segundo = 0
        minuto++
        if(minuto<10){minuto = '0'+minuto}
        if(segundo<10){segundo = '0'+segundo}
        document.getElementById('minutos').innerHTML = minuto+':'
        document.getElementById('segundos').innerHTML = segundo
    }
    if(minuto == 60){
        segundo = -1
        minuto = 0
        hora++
        if(hora<10){hora='0'+hora}
        if(minuto<10){minuto='0'+minuto}
        document.getElementById('horas').innerHTML = hora+':'
        document.getElementById('minutos').innerHTML = minuto+':'
    }
    
}
function pausar(){
    clearInterval(interval)
    btniniciar.style.visibility = ''
}
function parar(){
    clearInterval(interval)
    btniniciar.style.visibility = ''
    hora = 0
    minuto = 0
    segundo = 0
    document.getElementById('horas').innerHTML = '00:'
    document.getElementById('minutos').innerHTML = '00:'
    document.getElementById('segundos').innerHTML = '00'
}
