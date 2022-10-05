//function scope
let subject = 'criar vídeo'

function criarPensamento(subject) {
    subject = 'study'
    return subject  
}

console.log(criarPensamento(subject))
console.log(subject)