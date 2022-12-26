const images = [
    {'id': '1', 'url':'./img/asta1.jpeg'},
    {'id': '2', 'url':'./img/yami.jpeg'},
    {'id': '3', 'url':'./img/asta3.jpeg'},
    {'id': '4', 'url':'./img/asta4.jpeg'},
    {'id': '5', 'url':'./img/yuno.jpeg'},
    {'id': '6', 'url':'./img/reimago.png'},
    {'id': '7', 'url':'./img/asta2.jpeg'},
]

const containerItems = document.querySelector('#consteiner-items')

const loadImagens = (images, containerItems) => {
    images.forEach(image => {
        containerItems.innerHTML += `
        <div class='item'>
            <img src='${image.url}'
        </div>`
    })
}


loadImagens(images, containerItems)


let items = document.querySelectorAll('.item')

//previus
const previus = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore( lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#previus').addEventListener('click', next)
document.querySelector('#next').addEventListener('click', previus)
