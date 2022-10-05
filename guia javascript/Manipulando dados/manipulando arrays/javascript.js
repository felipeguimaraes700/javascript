// manipuloando arrays 

let techs = ['html', 'css', 'js']

techs.push('nodejs') //adiciona um item no fim

techs.unshift('sql') //adiciona no começo

techs.pop() //remove do fim

techs.shift() //remove do começo

techs.shift(1,2) //pega somente alguns elementos do array

techs.splice()//remove 1 ou mais itens em qualquer posição do array

let index = techs.indexOf('css') //escontra uma posição de um elemento no array

console.log(techs)