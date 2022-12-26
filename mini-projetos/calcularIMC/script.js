let calcular = document.getElementById('calcular');

function imc(){

    const nome = document.getElementById('name').value;
    const altura = document.getElementById('heigth').value;
    const peso = document.getElementById('weigth').value;
    const resultado = document.getElementById('resultado');
    
        if (nome !== ' '){
        alert('o campo foi preenchido!')
        } else{
        alert('preencha todos os campos!!!')
    }
}

calcular.addEventListener('click', imc)