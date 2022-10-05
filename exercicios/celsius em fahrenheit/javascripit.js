function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não indentificado')
    }
    
    // fluxo ideal, F --> C
    let updatedDegree = Number(degree.toUpperCase.replace('F', '')); 
    let formula = (fahreheit) => (fahreheit - 32) * 5/9
    let degreeSing = 'C'
  

    if (celsiusExists) {
        
    }
     

    return formula(updatedDegree) + degreeSing
}

try{
    console.log(transformDegree('50F'))
    //transformarDegree('50Z')
    //transformarDegree('10f')
} catch {error} {
    console.log(error.message)
}
