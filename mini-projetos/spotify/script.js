
// eventos do play e pause
let musicas = [
    {título: 'You got it-(Remix)',
    artista: 'vedo',
}
];

let music = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('.capa')
let nameMusica = document.querySelector('.descricao h2')
let nameArtista = document.querySelector('.descricao i')


duracaoMusica.textContent = segundosParaMinutos(Math.floor(music.duration));

const play =  document.querySelector('.play').addEventListener('click', tocarMusica);
const pause =  document.querySelector('.pause').addEventListener('click', pausarMusica);

// eventos da barra de tempo da musica
music.addEventListener('timeupdate', atualizarBarra)

//funções
function tocarMusica(){
    music.play();
    document.querySelector('.pause').style.display='block';
    document.querySelector('.play').style.display='none';
}

function pausarMusica(){
    music.pause();
    document.querySelector('.play').style.display='block';
    document.querySelector('.pause').style.display='none';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((music.currentTime/music.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(music.currentTime));
}


function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if (campoSegundos < 10){
        campoSegundos = "0" + campoSegundos
    }

    return campoMinutos + ":" + campoSegundos;
}