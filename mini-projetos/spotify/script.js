
// eventos do play e pause
let musicas = [
    {título: 'You got it-(Remix)',
    artista: 'vedo',
    musica:'musicas/Vedo - You Got It (Remix) feat. Young Dolph x Money Man (320 kbps).mp3',
    img:'https://cdns-images.dzcdn.net/images/cover/b9cc6991d99f5a90746939d8e5702901/264x264.jpg'},

    {título: 'M4',
    artista: 'teto',
    musica:'musicas/Teto - M4 feat. Matuê (320 kbps).mp3',
    img:'https://pbs.twimg.com/amplify_video_thumb/1354193076261167104/img/GZjRfWiaZygXxlC0.jpg'
    },

    {título: 'Tipo Akaza',
    artista: '',
    musica:'musicas/Tipo Akaza 😈 (Kimetsu no Yaiba) _ Style Trap _ Prod. Sidney Scaccio _ MHRAP (320 kbps).mp3',
    img:'https://howlongtobeat.com/avatars/scaramammon_1640063840.png'
    },

    {título: 'Easy',
    artista: '',
    musica:'musicas/DaniLeigh - Easy (Lyrics) ft. Chris Brown (320 kbps).mp3',
    img:'https://cdns-images.dzcdn.net/images/cover/5826d71809c06f009eb7e0e826779972/500x500.jpg'
    },

    {título: 'Go crazy',
    artista: 'Chris Brown',
    musica:'musicas/Chris Brown & Young Thug - Go Crazy (Lyrics) (320 kbps).mp3',
    img:'https://universobrown.com.br/wp-content/uploads/2021/02/FAA6A8F3-87FF-4C23-A365-FE80C9465B84-1024x1024-1-1024x1024.png'
    },
];

let music = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('.capa')
let nameMusica = document.querySelector('.descricao h2')
let nameArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica);



let play =  document.querySelector('.play').addEventListener('click', tocarMusica);
let pause =  document.querySelector('.pause').addEventListener('click', pausarMusica);

music.addEventListener('timeupdate', atualizarBarra)

let buttomPrevius = document.querySelector('.previus').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = 4;
    }
    renderizarMusica(indexMusica);
    
})

let buttomNext = document.querySelector('.next').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 4){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
})

//funções
function renderizarMusica(index){
    music.setAttribute('src', musicas[index].musica);
    music.addEventListener('loadeddata', () => {
        nameMusica.textContent = musicas[index].título;
        nameArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(music.duration));
    });
}

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