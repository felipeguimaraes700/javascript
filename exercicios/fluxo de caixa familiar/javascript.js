let familia = {
    receitas: [4000, 30056, 1020, 70073],
    despesas: [60089, 40078, 2000, 700, 675]
}

function soma(array) {
    let total = 0;

    for(let valor of array){
        total += valor
    }

    return total
}

function calcularBalanca(params) {
    const calcularReceitas = soma(familia.receitas)
    const calcularDespesas = soma(familia.despesas)

    const ok = total >=0
    let balancaTexto = 'Negativo'

    const total = calcularReceitas - calcularDespesas

    if (ok) {
        balancaTexto = "positivo"
    }

    console.log(`seu saldo é ${balancaTexto}: ${total}`)

}

calcularBalanca()