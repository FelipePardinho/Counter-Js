let visorSecunds = document.querySelector('#secunds') 
let visorMinuts = document.querySelector('#minuts')
let visorHours = document.querySelector('#hours')

seg = 0
min = 0
hor = 0

var visor;

function timer(){
    seg++;
    if(seg < 10){
        visorSecunds.innerHTML = '0' + seg
    }else{
        visorSecunds.innerHTML = seg
    }
    if(seg === 60){
        min++
        if(min < 10){
            visorMinuts.innerHTML ="0" + min
        }else{
            visorMinuts.innerHTML = min
        }
        seg = 0
        if(min === 60){
            hor++
            if(hor < 10){
                visorHours.innerHTML="0"+hor
            }else{
                visorHours.innerHTML = hor
            }
            min = 0
        }
    }
}

function startTimer(){
      visor = setInterval(timer, 1000)
}

function pauseTimer(){
    clearInterval(visor)
}

function resetTimer(){
    min = '00'
    seg = '00'
    milSeg = '00'

    visorMinuts.innerHTML = min
    visorSecunds.innerHTML = seg
    visorMilSecunds.innerHTML = milSeg
}

