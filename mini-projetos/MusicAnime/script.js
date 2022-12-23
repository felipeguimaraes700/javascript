let songs = [
    {
        music:'audio/dragonball.mp3',
        legend:'Dragon Ball',
    },
    {
        music:'audio/demonSleyer.mp3',
        legend:'Kimetsu No Yaiba',
    },
    {
        music:'audio/saitama.mp3',
        legend:'One Punsh Man',
    },
    {
        music:'audio/blackClover.mp3',
        legend:'Black Clover',
    },
    {
        music:'audio/attackontitan.mp3',
        legend:'Attack on Titan',
    },
    {
        music:'audio/deathNote.mp3',
        legend:'Death Note',
    },
    {
        music:'audio/tokyo.mp3',
        legend:'tokyo ghoul',
    },
    {
        music:'audio/naruto.mp3',
        legend:'Naruto ',
    },
] 

let itens = document.querySelectorAll('.itens');
let legends = document.querySelectorAll('p');

for (let i=0; i < 8; i++){
    legends[i].textContent = songs[i].legend;
    itens[i].setAttribute('data-item', i);
}

let audiotag = document.querySelector('audio')

itens.forEach(botao => {
    botao.addEventListener('click', () => {

        let som = songs[botao.getAtribute('data-item')];

        audiotag.setAttribute('src', som.music)
        audiotag.addEventListener('loadeddata', () => {
            audiotag.play();
        });
    });
});