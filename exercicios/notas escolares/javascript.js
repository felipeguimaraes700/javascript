 let nota = 67

function pegarNota(nota) {

    let notaA = nota >= 90 && nota <= 100 
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79 
    let notaD = nota >= 60 && nota <= 69
    let notaF = nota < 60 && nota >= 50
    let notaInv = nota < 50
   
    let notaFinal;
   
    if(notaA) {
       notaFinal = "A"
    } else if (notaB) {
       notaFinal = "B"
    } else if (notaC) {
       notaFinal = "C"
    } else if (notaD) {
       notaFinal = "D"
    } else if (notaF) {
       notaFinal = "F"
    } else if(notaInv){
       notaFinal = "nota inválida"
    }

    return notaFinal
}

console.log(pegarNota(-1))
console.log(pegarNota(4))
console.log(pegarNota(67))
console.log(pegarNota(54))
console.log(pegarNota(90))
console.log(pegarNota(100))
console.log(pegarNota(85))
console.log(pegarNota(77))
console.log(pegarNota(66))

  