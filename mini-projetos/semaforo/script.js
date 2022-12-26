const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0;
let intervalid = null;

const trafficLgth = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => {

    colorIndex = colorIndex < 3 ? ++colorIndex : 0;
    
}

const changeColor = () => {
    const colors = ['red', 'yellow','green', 'yellow', 'red' ]
    const color = colors[colorIndex]
    turnOn[color]();
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval(intervalid)
}

const turnOn = {
    'red': () => img.src = 'img/semaforoVermelho.png',
    'yellow': () => img.src = 'img/semaforoAmarelo.png',
    'green': () => img.src = 'img/semaforoVerde.png',
    'automatic': () => intervalid = setInterval(changeColor, 500)
}

buttons.addEventListener('click', trafficLgth );