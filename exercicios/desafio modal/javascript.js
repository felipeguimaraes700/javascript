const openButtom = document.getElementsById('openModal')

const modalClose = document.querySelector('.fundo')

openButtom.onclick = function() {
    modalClose.remove('invisible')
}

document.addEventListener('keydown', function(event){
    console.log(event)
    const itEscKey = event.key === 'Escape'
})