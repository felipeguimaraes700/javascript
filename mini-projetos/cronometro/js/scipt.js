const minutsE1 = document.querySelector('#minutos')
const secundsE1 = document.querySelector('#segundos')
const milisecundsE1 = document.querySelector('#milesegundos')
const iniciarBtn = document.querySelector('#iniciar')
const pausarBtn = document.querySelector('#pausar')
const continuarBtn = document.querySelector('#continuar')
const resetarBtn = document.querySelector('#resetar')

let interval;
let minuts = 0
let secunds = 0
let milisecunds = 0
let ispaused = false

iniciarBtn.addEventListener('click', startTime)
pausarBtn.addEventListener('click', pauseTime)
continuarBtn.addEventListener('click', continuarTime)
resetarBtn.addEventListener('click', resetTime)

function startTime(){
    interval = setInterval(()=>{

        if(!ispaused){

            milisecunds += 10

            if(milisecunds === 1000){
                secunds++;
                milisecunds = 0
            }

            if(secunds === 60){
                minuts++;
                secunds = 0
            }

            minutsE1.textContent = formatTime(minuts)
            secundsE1.textContent = formatTime(secunds)
            milisecundsE1.textContent = formatMilisegundos(milisecunds)

        }

    }, 10);

    iniciarBtn.style.display = "none"
    pausarBtn.style.display = "block"
}

function pauseTime(){
    ispaused = true;
    pausarBtn.style.display = "none"
    continuarBtn.style.display = "block"
}

function continuarTime(){
    ispaused = false
    pausarBtn.style.display = "block"
    continuarBtn.style.display = "none"
}

function resetTime(){
    clearInterval(interval);
    minuts = 0
    secunds = 0
    milisecunds = 0

    minutsE1.textContent = "00"
    secundsE1.textContent = "00"
    milisecundsE1.textContent = "000"

    iniciarBtn.style.display = "block"
    pausarBtn.style.display = "none"
    continuarBtn.style.display = "none"

}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

function formatMilisegundos(time){
    return time < 100 ? `${time}`.padStart(3,"0") : time;
}