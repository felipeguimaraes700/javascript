//funciton anonymous

//parâmetros da função
const somar = function(numero1, numero2) {
    total = numero1 + numero2 //não recomendado deixar sem o operador
    return total
}

let numero1 = 34
let numero2 = 25

console.log(`o número1 é ${numero1} `)
console.log(`o número2 é ${numero2}`)
console.log(`a soma é ${somar(numero1, numero2)}`)