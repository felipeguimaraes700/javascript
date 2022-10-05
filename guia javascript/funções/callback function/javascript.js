// callback function

function sayMayName(name) {
    console.log('Antes de executar a função bacllback')

    name()

    console.log('depois de executar a função callback')
}

sayMayName(
    () => {
        console.log('estou em uma callback')
    }
)