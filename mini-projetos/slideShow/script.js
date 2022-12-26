const images = [
    {'id': '1', 'url':'./img/asta1'},
    {'id': '2', 'url':'./img/yami'},
    {'id': '3', 'url':'./img/asta3'},
    {'id': '4', 'url':'./img/asta4'},
    {'id': '5', 'url':'./img/yuno'},
    {'id': '6', 'url':'./img/reimago'},
    {'id': '7', 'url':'./img/nero'},
    {'id': '8', 'url':'./img/asta2'},
]

const container = document.querySelector('.conteiner-itens')

const loadImagens = (images, conteiner) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'
        </div>`
    })
}

loadImagens(images, container)