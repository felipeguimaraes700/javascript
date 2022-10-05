// function() constructor

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + 'está andando'
    }
}
const felipe = new Person('felipe')
const joao = new Person('joão')
console.log(felipe.walk())
console.log(joao.walk())